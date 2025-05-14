'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Topic, Question } from '@/lib/azure-data';
import { getTopicById } from '@/lib/azure-data';
import { QuestionDisplay } from '@/components/azure-ace/QuestionDisplay';
import { FeedbackDisplay } from '@/components/azure-ace/FeedbackDisplay';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, CheckSquare, Home } from 'lucide-react';
import Link from 'next/link';

export default function TopicPage() {
  const params = useParams();
  const router = useRouter();
  const topicId = params.topicId as string;

  const [topic, setTopic] = useState<Topic | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (topicId) {
      const foundTopic = getTopicById(topicId);
      if (foundTopic) {
        setTopic(foundTopic);
        // Reset state if topic changes
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setIsSubmitted(false);
        setScore(0);
        setQuizFinished(false);
      } else {
        // Handle topic not found, e.g., redirect or show error
        router.push('/');
      }
    }
  }, [topicId, router]);

  if (!topic) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-200px)]">
        <p className="text-xl text-muted-foreground">Loading topic...</p>
      </div>
    );
  }

  const currentQuestion = topic.questions[currentQuestionIndex];

  const handleOptionSelect = (optionIndex: number) => {
    if (!isSubmitted) {
      setSelectedOption(optionIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === currentQuestion.correctAnswerIndex) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < topic.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };
  
  const progressPercentage = ((currentQuestionIndex + (isSubmitted ? 1: 0)) / topic.questions.length) * 100;


  if (quizFinished) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <Card className="w-full max-w-md p-8 shadow-xl">
          <CardHeader>
            <CheckSquare className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <CardTitle className="text-3xl font-bold text-primary">Quiz Completed!</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              You have finished the {topic.name} quiz.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-2xl font-semibold">
              Your Score: <span className="text-accent">{score}</span> out of {topic.questions.length}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleRestartQuiz} variant="outline" className="w-full sm:w-auto">
                <ArrowLeft className="mr-2 h-4 w-4" /> Restart Quiz
              </Button>
              <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" /> Back to Dashboard
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-primary">{topic.name} Quiz</h1>
      
      <div className="w-full max-w-2xl">
        <Progress value={progressPercentage} className="h-3" />
        <p className="text-sm text-muted-foreground text-right mt-1">
            {isSubmitted ? currentQuestionIndex + 1 : currentQuestionIndex} / {topic.questions.length} questions
        </p>
      </div>

      <QuestionDisplay
        question={currentQuestion}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
        isSubmitted={isSubmitted}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={topic.questions.length}
      />

      {isSubmitted && (
        <FeedbackDisplay
          isCorrect={selectedOption === currentQuestion.correctAnswerIndex}
          feedbackText={currentQuestion.feedback}
          correctAnswer={currentQuestion.options[currentQuestion.correctAnswerIndex]}
          selectedAnswer={selectedOption !== null ? currentQuestion.options[selectedOption] : undefined}
        />
      )}

      <div className="mt-6 w-full max-w-2xl flex justify-end">
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
            {currentQuestionIndex === topic.questions.length - 1 ? 'View Results' : 'Next Question'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
}
