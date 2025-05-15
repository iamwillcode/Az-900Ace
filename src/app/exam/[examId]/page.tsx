
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useMemo, Suspense } from 'react';
import type { Exam, Question } from '@/lib/exam-data';
import { getExamById } from '@/lib/exam-data';
import { QuestionDisplay } from '@/components/azure-ace/QuestionDisplay';
import { FeedbackDisplay } from '@/components/azure-ace/FeedbackDisplay';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, ArrowRight, CheckSquare, Home, Loader2, Star, ListChecks } from 'lucide-react';
import Link from 'next/link';
import { useGamificationStats } from '@/hooks/useGamificationStats';
import { useToast } from "@/hooks/use-toast";

interface ExamQuizDisplayProps {
  exam: Exam;
  onExamFinished: (finalScore: number, correctAnswersCount: number) => void;
}

function ExamQuizDisplay({ exam, onExamFinished }: ExamQuizDisplayProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setCorrectAnswersCount(0);
  }, [exam]);

  const currentQuestion = exam.questions[currentQuestionIndex];

  const handleOptionSelect = (optionIndex: number) => {
    if (!isSubmitted) {
      setSelectedOption(optionIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (currentQuestion && selectedOption === currentQuestion.correctAnswerIndex) {
      setScore(score + 1);
      setCorrectAnswersCount(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      onExamFinished(score, correctAnswersCount);
    }
  };
  
  const progressPercentage = useMemo(() => {
    if (!exam || exam.questions.length === 0) return 0;
    const questionsCompleted = isSubmitted ? currentQuestionIndex + 1 : currentQuestionIndex;
    return (questionsCompleted / exam.questions.length) * 100;
  }, [currentQuestionIndex, isSubmitted, exam]);

  if (!exam || exam.questions.length === 0) {
    return (
      <Alert>
        <AlertTitle>No Questions Available</AlertTitle>
        <AlertDescription>This exam currently does not have any questions. Please check back later.</AlertDescription>
      </Alert>
    );
  }
  
  if (!currentQuestion) {
     return (
      <Alert variant="destructive">
        <AlertTitle>Error Loading Question</AlertTitle>
        <AlertDescription>Could not load the current question. Please try refreshing the page or restarting the exam.</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-8 w-full max-w-2xl mx-auto">
       <div className="w-full">
        <Progress value={progressPercentage} className="h-3" />
        <p className="text-sm text-muted-foreground text-right mt-1">
           {isSubmitted ? currentQuestionIndex + 1 : currentQuestionIndex} / {exam.questions.length} questions
        </p>
      </div>

      <QuestionDisplay
        question={currentQuestion}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
        isSubmitted={isSubmitted}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={exam.questions.length}
      />

      {isSubmitted && (
        <FeedbackDisplay
          isCorrect={selectedOption === currentQuestion.correctAnswerIndex}
          feedbackText={currentQuestion.feedback}
          correctAnswer={currentQuestion.options[currentQuestion.correctAnswerIndex]}
          selectedAnswer={selectedOption !== null ? currentQuestion.options[selectedOption] : undefined}
        />
      )}

      <div className="mt-6 w-full flex justify-end">
        {!isSubmitted ? (
          <Button 
            onClick={handleSubmitAnswer} 
            disabled={selectedOption === null}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
          >
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNextQuestion} className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg">
            {currentQuestionIndex === exam.questions.length - 1 ? 'View Results' : 'Next Question'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default function ExamPage() {
  const params = useParams();
  const router = useRouter();
  const examId = params.examId as string;
  const { toast } = useToast();
  const { awardPoints, checkAndAwardNewBadges, recordQuizCompleted } = useGamificationStats();

  const [exam, setExam] = useState<Exam | null>(null);
  const [examScore, setExamScore] = useState<number | null>(null);
  const [examKey, setExamKey] = useState(0); 

  useEffect(() => {
    if (examId) {
      const foundExam = getExamById(examId);
      if (foundExam) {
        setExam(foundExam);
        setExamScore(null); 
        setExamKey(prevKey => prevKey + 1);
        if (typeof window !== 'undefined') {
          localStorage.setItem('lastVisitedExamId', examId);
        }
      } else {
        router.push('/exam'); 
      }
    }
  }, [examId, router]);

  const handleExamFinished = (finalScore: number, correctAnswers: number) => {
    setExamScore(finalScore);
    recordQuizCompleted(); 

    const pointsEarned = awardPoints(correctAnswers);
    toast({
      title: "Exam Complete!",
      description: `You earned ${pointsEarned} points. Your score: ${finalScore}/${exam?.questions.length || 0}`,
      action: <Star className="text-yellow-500" />,
    });
    
    const newlyAwardedBadges = checkAndAwardNewBadges(finalScore, exam?.questions.length);
    newlyAwardedBadges.forEach(badge => {
      toast({
        title: "Badge Unlocked!",
        description: `You earned the "${badge.name}" badge!`,
        action: <badge.icon className="text-accent" />,
      });
    });

    window.dispatchEvent(new CustomEvent('gamificationUpdate'));
  };

  const handleRestartExam = () => {
    setExamScore(null);
    setExamKey(prevKey => prevKey + 1); 
  };
  
  if (!exam) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-200px)]">
        <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
        <p className="text-xl text-muted-foreground">Loading exam...</p>
      </div>
    );
  }

  if (examScore !== null) { 
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <Card className="w-full max-w-md p-8 shadow-xl">
          <CardHeader>
            <CheckSquare className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <CardTitle className="text-3xl font-bold text-primary">Exam Completed!</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              You have finished the {exam.name}.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-2xl font-semibold">
              Your Score: <span className="text-accent">{examScore}</span> out of {exam.questions.length}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleRestartExam} variant="outline" className="w-full sm:w-auto">
                <ArrowLeft className="mr-2 h-4 w-4" /> Restart Exam
              </Button>
              <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                <Link href="/exam">
                  <ListChecks className="mr-2 h-4 w-4" /> Back to Exams List
                </Link>
              </Button>
              <Button asChild className="w-full sm:w-auto" variant="ghost">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" /> Dashboard
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col items-center space-y-6 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6">{exam.name}</h1>
      <Suspense fallback={
        <div className="flex justify-center items-center h-40">
          <Loader2 className="h-6 w-6 animate-spin text-primary mr-2" /> 
          <span>Loading exam questions...</span>
        </div>
      }>
        <ExamQuizDisplay key={examKey} exam={exam} onExamFinished={handleExamFinished} />
      </Suspense>
    </div>
  );
}
