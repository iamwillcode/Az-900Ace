
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useMemo, Suspense } from 'react';
import type { Topic, SubTopic } from '@/lib/azure-data'; 
import { getTopicById } from '@/lib/azure-data';
import { QuestionDisplay } from '@/components/azure-ace/QuestionDisplay';
import { FeedbackDisplay } from '@/components/azure-ace/FeedbackDisplay';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, ArrowRight, CheckSquare, Home, Lightbulb, Loader2, Star, FileText } from 'lucide-react'; 
import Link from 'next/link';
import { useGamificationStats } from '@/hooks/useGamificationStats';
import { useToast } from "@/hooks/use-toast";


function convertStudyGuideToHtml(markdown: string): string {
  if (!markdown) return "";

  let text = markdown.trim();

  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/(?<![\w*])\*(?!\s|\*)([^* \n][^*]*?)\*(?![\w*])/g, '<em>$1</em>');
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');

  const lines = text.split('\n');
  let htmlOutput = "";
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    const headingMatch = line.match(/^(#+)\s+(.*)/);
    if (headingMatch) {
        if (inList) {
            htmlOutput += '</ul>\n';
            inList = false;
        }
        const level = headingMatch[1].length;
        const content = headingMatch[2];
        if (level >= 1 && level <= 6) { 
            htmlOutput += `<h${level} class="mt-4 mb-2 font-semibold text-lg">${content}</h${level}>\n`;
            continue;
        }
    }

    const listItemMatch = line.match(/^(\s*)(?:[\*-])\s+(.*)/);

    if (listItemMatch) {
      let itemContent = listItemMatch[2]; 

      if (!inList) {
        htmlOutput += '<ul class="list-disc pl-5 space-y-1 my-2">\n';
        inList = true;
      }
      htmlOutput += `  <li>${itemContent}</li>\n`;
    } else { 
      if (inList) {
        htmlOutput += '</ul>\n';
        inList = false;
      }
      if (line.trim()) {
        const isMnemonicLine = line.match(/^\s*(?:├──|└──|│|└─|├─)/); // Added more mnemonic markers
        if (isMnemonicLine) {
            // For mnemonics, ensure pre-wrap for structure if not already handled
            if (!htmlOutput.endsWith('<div class="whitespace-pre-wrap font-mono text-sm bg-muted/20 p-3 rounded-md shadow-inner">\n')) {
                 if (htmlOutput.endsWith('</div>\n')) { // if previous was a mnemonic block, continue it
                    htmlOutput = htmlOutput.slice(0, -7); // remove closing div
                 } else {
                    htmlOutput += '<div class="whitespace-pre-wrap font-mono text-sm bg-muted/20 p-3 rounded-md shadow-inner">\n';
                 }
            }
            htmlOutput += `${line}\n`;
        } else {
             // End mnemonic block if current line is not part of it
            if (htmlOutput.includes('<div class="whitespace-pre-wrap font-mono text-sm bg-muted/20 p-3 rounded-md shadow-inner">') && !htmlOutput.endsWith('</div>\n')) {
                 htmlOutput += '</div>\n';
            }
            htmlOutput += `<p class="my-2">${line.trim()}</p>\n`;
        }
      } else if (!inList && htmlOutput.trim() && !htmlOutput.endsWith('\n\n') && !htmlOutput.endsWith('</p>\n')) {
        // End mnemonic block if it's a blank line and not in a list
        if (htmlOutput.includes('<div class="whitespace-pre-wrap font-mono text-sm bg-muted/20 p-3 rounded-md shadow-inner">') && !htmlOutput.endsWith('</div>\n')) {
            htmlOutput += '</div>\n';
        }
      }
    }
  }

  if (inList) { 
    htmlOutput += '</ul>\n';
  }
   // Ensure any open mnemonic div is closed at the end
  if (htmlOutput.includes('<div class="whitespace-pre-wrap font-mono text-sm bg-muted/20 p-3 rounded-md shadow-inner">') && !htmlOutput.endsWith('</div>\n')) {
    htmlOutput += '</div>\n';
  }
  
  return htmlOutput;
}


interface StudyGuideDisplayProps {
  topic: Topic;
}

function StudyGuideDisplay({ topic }: StudyGuideDisplayProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader>
        <div className="flex items-center mb-2">
          {topic.icon && <topic.icon className="h-8 w-8 mr-3 text-primary" />}
          <CardTitle className="text-2xl md:text-3xl font-semibold">{topic.name}</CardTitle>
        </div>
        <CardDescription className="text-md text-muted-foreground">{topic.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-primary flex items-center">
            <FileText className="mr-2 h-5 w-5" /> Core Concepts
          </h3>
          <div 
            className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none bg-muted/30 p-4 rounded-md"
            dangerouslySetInnerHTML={{ __html: convertStudyGuideToHtml(topic.studyGuide) }}
          />
        </div>

        {topic.mnemonic && (
          <Card className="bg-card border shadow-inner">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
                Textual Mnemonic Aid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="prose prose-sm max-w-none text-foreground/90 bg-muted/20 p-3 rounded-md shadow-inner font-mono text-sm" // Ensure font-mono and text-sm for consistency
                dangerouslySetInnerHTML={{ __html: convertStudyGuideToHtml(topic.mnemonic) }}
              />
            </CardContent>
          </Card>
        )}

        {topic.subTopics && topic.subTopics.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Sub-Topics</h3>
            <Accordion type="single" collapsible className="w-full">
              {topic.subTopics.map((subTopic) => (
                <AccordionItem value={subTopic.id} key={subTopic.id}>
                  <AccordionTrigger className="text-lg hover:text-accent font-medium">{subTopic.name}</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-2">
                    <div 
                      className="prose prose-sm sm:prose lg:prose-lg max-w-none bg-muted/20 p-3 rounded-md"
                      dangerouslySetInnerHTML={{ __html: convertStudyGuideToHtml(subTopic.studyGuide) }}
                    />
                    {subTopic.mnemonic && (
                      <Card className="bg-card border-border/70 shadow-sm mt-3">
                        <CardHeader className="pb-2 pt-3">
                           <CardTitle className="text-md flex items-center">
                            <Lightbulb className="h-4 w-4 mr-2 text-yellow-500" />
                             Mnemonic for {subTopic.name}
                           </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 pb-3">
                          <div 
                            className="prose prose-xs max-w-none text-foreground/80 bg-muted/10 p-2 rounded-md font-mono text-sm" // Ensure font-mono and text-sm
                            dangerouslySetInnerHTML={{ __html: convertStudyGuideToHtml(subTopic.mnemonic) }}
                          />
                        </CardContent>
                      </Card>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </CardContent>
       <CardFooter>
          <Button asChild variant="outline">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" /> Back to Dashboard
            </Link>
          </Button>
        </CardFooter>
    </Card>
  );
}

interface QuizDisplayProps {
  topic: Topic;
  onQuizFinished: (finalScore: number, correctAnswersCount: number) => void;
}

function QuizDisplay({ topic, onQuizFinished }: QuizDisplayProps) {
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
  }, [topic]);

  const currentQuestion = topic.questions[currentQuestionIndex];

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
    if (currentQuestionIndex < topic.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      onQuizFinished(score, correctAnswersCount);
    }
  };
  
  const progressPercentage = useMemo(() => {
    if (!topic || topic.questions.length === 0) return 0;
    const questionsCompleted = isSubmitted ? currentQuestionIndex + 1 : currentQuestionIndex;
    return (questionsCompleted / topic.questions.length) * 100;
  }, [currentQuestionIndex, isSubmitted, topic]);

  if (!topic || topic.questions.length === 0) {
    return (
      <Alert>
        <AlertTitle>No Questions Available</AlertTitle>
        <AlertDescription>This topic currently does not have any quiz questions. Please check back later or contact support if you believe this is an error.</AlertDescription>
      </Alert>
    );
  }
  
  if (!currentQuestion) {
     return (
      <Alert variant="destructive">
        <AlertTitle>Error Loading Question</AlertTitle>
        <AlertDescription>Could not load the current question. Please try refreshing the page or restarting the quiz.</AlertDescription>
      </Alert>
    );
  }


  return (
    <div className="flex flex-col items-center space-y-8 w-full max-w-2xl mx-auto">
       <div className="w-full">
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
            {currentQuestionIndex === topic.questions.length - 1 ? 'View Results' : 'Next Question'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default function TopicPage() {
  const params = useParams();
  const router = useRouter();
  const topicId = params.topicId as string;
  const { toast } = useToast();
  const { awardPoints, checkAndAwardNewBadges, recordQuizCompleted } = useGamificationStats();

  const [topic, setTopic] = useState<Topic | null>(null);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'study' | 'quiz'>('study');
  const [quizKey, setQuizKey] = useState(0); 

  useEffect(() => {
    if (topicId) {
      const foundTopic = getTopicById(topicId);
      if (foundTopic) {
        setTopic(foundTopic);
        setQuizScore(null); 
        setActiveTab('study');
        setQuizKey(prevKey => prevKey + 1);
        if (typeof window !== 'undefined') {
          localStorage.setItem('lastVisitedTopicId', topicId);
        }
      } else {
        router.push('/');
      }
    }
  }, [topicId, router]);


  const handleQuizFinished = (finalScore: number, correctAnswers: number) => {
    setQuizScore(finalScore);
    recordQuizCompleted(); 

    const pointsEarned = awardPoints(correctAnswers);
    toast({
      title: "Quiz Complete!",
      description: `You earned ${pointsEarned} points. Your score: ${finalScore}/${topic?.questions.length || 0}`,
      action: <Star className="text-yellow-500" />,
    });
    
    const newlyAwardedBadges = checkAndAwardNewBadges(finalScore, topic?.questions.length);
    newlyAwardedBadges.forEach(badge => {
      toast({
        title: "Badge Unlocked!",
        description: `You earned the "${badge.name}" badge!`,
        action: <badge.icon className="text-accent" />,
      });
    });

    window.dispatchEvent(new CustomEvent('gamificationUpdate'));
  };

  const handleRestartQuiz = () => {
    setQuizScore(null);
    setQuizKey(prevKey => prevKey + 1); 
    setActiveTab('quiz'); 
  };
  
  const handleTabChange = (value: string) => {
    const newTab = value as 'study' | 'quiz';
    setActiveTab(newTab);
    if (newTab === 'quiz' && quizScore !== null) {
      // If switching to quiz tab and quiz was already completed,
      // we don't automatically restart. User must click restart.
      // Or, if we want to auto-restart:
      // handleRestartQuiz();
    }
  }

  if (!topic) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-200px)]">
        <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
        <p className="text-xl text-muted-foreground">Loading topic...</p>
      </div>
    );
  }

  if (quizScore !== null && activeTab === 'quiz') { 
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
              Your Score: <span className="text-accent">{quizScore}</span> out of {topic.questions.length}
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
    <div className="flex flex-col items-center space-y-6 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-primary">{topic.name}</h1>
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full max-w-4xl px-2">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="study">Study Material</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>
        <TabsContent value="study" className="mt-6">
          <Suspense fallback={
            <div className="flex justify-center items-center h-40">
              <Loader2 className="h-6 w-6 animate-spin text-primary mr-2" /> 
              <span>Loading study guide...</span>
            </div>
          }>
            <StudyGuideDisplay topic={topic} />
          </Suspense>
        </TabsContent>
        <TabsContent value="quiz" className="mt-6">
          {quizScore === null && activeTab === 'quiz' ? (
             <Suspense fallback={
                <div className="flex justify-center items-center h-40">
                  <Loader2 className="h-6 w-6 animate-spin text-primary mr-2" /> 
                  <span>Loading quiz...</span>
                </div>
             }>
              <QuizDisplay key={quizKey} topic={topic} onQuizFinished={handleQuizFinished} />
             </Suspense>
          ) : (
             activeTab === 'quiz' && quizScore !== null ? 
             // This state is handled by the card above, but for safety / alternative flows:
             <div className="text-center p-8">
                <p className="text-lg text-muted-foreground">Quiz results are shown above. Click "Restart Quiz" or navigate to "Study Material".</p>
             </div>
             : (activeTab === 'quiz' && // If quiz tab is active, but no score means it's ready to start
                <Suspense fallback={
                  <div className="flex justify-center items-center h-40">
                    <Loader2 className="h-6 w-6 animate-spin text-primary mr-2" /> 
                    <span>Loading quiz...</span>
                  </div>
                }>
                <QuizDisplay key={quizKey} topic={topic} onQuizFinished={handleQuizFinished} />
                </Suspense>
             )
          )}
          {activeTab !== 'quiz' && ( // Placeholder if not on quiz tab for some reason but content empty
             <div className="text-center p-8">
                <p className="text-lg text-muted-foreground">Select the 'Quiz' tab to start.</p>
             </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
