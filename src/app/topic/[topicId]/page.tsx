
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useMemo, Suspense } from 'react';
import type { Topic, Question, SubTopic } from '@/lib/azure-data';
import { getTopicById } from '@/lib/azure-data'; // Removed getSubTopicById as it's not used here directly
import { QuestionDisplay } from '@/components/azure-ace/QuestionDisplay';
import { FeedbackDisplay } from '@/components/azure-ace/FeedbackDisplay';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { generateMnemonic, type GenerateMnemonicOutput } from '@/ai/flows/generate-mnemonic-flow';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, ArrowRight, CheckSquare, Home, Lightbulb, Loader2, Sparkles } from 'lucide-react';
import Link from 'next/link';
// Image component is no longer needed for generated mnemonics
// import Image from 'next/image'; 

interface MnemonicDataState {
  text?: string;
  textLoading?: boolean;
  error?: string;
}

// StudyGuideDisplay Component
interface StudyGuideDisplayProps {
  topic: Topic;
  onGenerateMnemonic: (context: string, type: 'topic' | 'subtopic', id: string) => void;
  mnemonicData: Record<string, MnemonicDataState>;
}

function StudyGuideDisplay({ topic, onGenerateMnemonic, mnemonicData }: StudyGuideDisplayProps) {
  const currentTopicMnemonic = mnemonicData[`topic-${topic.id}`] || {};
  
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
          <h3 className="text-xl font-semibold mb-2 text-primary">Core Concepts</h3>
          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none whitespace-pre-wrap bg-muted/30 p-4 rounded-md">
            {topic.studyGuide.trim()}
          </div>
        </div>

        <Card className="bg-card border shadow-inner">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
              Textual Mnemonic Aid
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topic.mnemonicSuggestion && !currentTopicMnemonic.text && !currentTopicMnemonic.textLoading && (
              <Alert variant="default" className="bg-accent/10 border-accent/30">
                <Sparkles className="h-4 w-4 text-accent" />
                <AlertTitle>Mnemonic Idea</AlertTitle>
                <AlertDescription>{topic.mnemonicSuggestion}</AlertDescription>
              </Alert>
            )}
            {currentTopicMnemonic.error && (
                <Alert variant="destructive">
                    <AlertTitle>Error Generating Mnemonic</AlertTitle>
                    <AlertDescription>{currentTopicMnemonic.error}</AlertDescription>
                </Alert>
            )}
            {currentTopicMnemonic.textLoading && (
                <div className="flex items-center space-x-2 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" /> <span>Generating mnemonic text...</span>
                </div>
            )}
            {currentTopicMnemonic.text && (
              <div className="text-foreground/90 whitespace-pre-wrap bg-muted/20 p-3 rounded-md shadow-inner font-mono text-sm">
                {currentTopicMnemonic.text}
              </div>
            )}
            
            {!currentTopicMnemonic.text && !currentTopicMnemonic.textLoading && (
              <Button 
                onClick={() => onGenerateMnemonic(`${topic.name}: ${topic.studyGuide}`, 'topic', topic.id)}
                disabled={currentTopicMnemonic.textLoading}
                size="sm"
                className="bg-primary hover:bg-primary/90"
              >
                <Sparkles className="mr-2 h-4 w-4" /> Generate Textual Mnemonic
              </Button>
            )}
          </CardContent>
        </Card>

        {topic.subTopics && topic.subTopics.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Sub-Topics</h3>
            <Accordion type="single" collapsible className="w-full">
              {topic.subTopics.map((subTopic) => {
                const currentSubtopicMnemonic = mnemonicData[`subtopic-${subTopic.id}`] || {};
                return (
                  <AccordionItem value={subTopic.id} key={subTopic.id}>
                    <AccordionTrigger className="text-lg hover:text-accent font-medium">{subTopic.name}</AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-2">
                      <div className="prose prose-sm sm:prose lg:prose-lg max-w-none whitespace-pre-wrap bg-muted/20 p-3 rounded-md">
                        {subTopic.studyGuide.trim()}
                      </div>
                      <Card className="bg-card border-border/70 shadow-sm mt-3">
                        <CardHeader className="pb-2 pt-3">
                           <CardTitle className="text-md flex items-center">
                            <Lightbulb className="h-4 w-4 mr-2 text-yellow-500" />
                             Mnemonic for {subTopic.name}
                           </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 pb-3">
                          {subTopic.mnemonicSuggestion && !currentSubtopicMnemonic.text && !currentSubtopicMnemonic.textLoading &&(
                            <Alert variant="default" className="text-xs bg-accent/10 border-accent/30">
                               <Sparkles className="h-3 w-3 text-accent" />
                               <AlertDescription className="ml-0 pl-0">{subTopic.mnemonicSuggestion}</AlertDescription>
                            </Alert>
                          )}
                          {currentSubtopicMnemonic.error && (
                              <Alert variant="destructive" className="text-xs">
                                  <AlertTitle>Error</AlertTitle>
                                  <AlertDescription>{currentSubtopicMnemonic.error}</AlertDescription>
                              </Alert>
                          )}
                          {currentSubtopicMnemonic.textLoading && (
                              <div className="flex items-center space-x-1 text-muted-foreground text-xs">
                                  <Loader2 className="h-3 w-3 animate-spin" /> <span>Generating text...</span>
                              </div>
                          )}
                          {currentSubtopicMnemonic.text && (
                            <div className="text-foreground/80 whitespace-pre-wrap text-sm bg-muted/10 p-2 rounded-md font-mono">
                              {currentSubtopicMnemonic.text}
                            </div>
                          )}
                          
                          {!currentSubtopicMnemonic.text && !currentSubtopicMnemonic.textLoading && (
                            <Button 
                              onClick={() => onGenerateMnemonic(`${subTopic.name}: ${subTopic.studyGuide}`, 'subtopic', subTopic.id)}
                              disabled={currentSubtopicMnemonic.textLoading}
                              size="xs"
                              variant="outline"
                              className="text-xs"
                            >
                              <Sparkles className="mr-1 h-3 w-3" /> Generate Mnemonic
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
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


// QuizDisplay Component (existing quiz logic)
interface QuizDisplayProps {
  topic: Topic;
  onQuizFinished: (finalScore: number) => void;
}

function QuizDisplay({ topic, onQuizFinished }: QuizDisplayProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Reset state when topic changes (e.g., on restart)
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
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
      onQuizFinished(score);
    }
  };
  
  const progressPercentage = useMemo(() => {
    // Ensure currentQuestionIndex does not exceed array bounds if questions array is empty
    if (topic.questions.length === 0) return 0;
    const questionsCompleted = isSubmitted ? currentQuestionIndex + 1 : currentQuestionIndex;
    return (questionsCompleted / topic.questions.length) * 100;
  }, [currentQuestionIndex, isSubmitted, topic.questions.length]);

  if (topic.questions.length === 0) {
    return (
      <Alert>
        <AlertTitle>No Questions Available</AlertTitle>
        <AlertDescription>This topic currently does not have any quiz questions.</AlertDescription>
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

  const [topic, setTopic] = useState<Topic | null>(null);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'study' | 'quiz'>('study');
  const [mnemonicData, setMnemonicData] = useState<Record<string, MnemonicDataState>>({});
  const [quizKey, setQuizKey] = useState(0); // Used to force re-mount of QuizDisplay

  useEffect(() => {
    if (topicId) {
      const foundTopic = getTopicById(topicId);
      if (foundTopic) {
        setTopic(foundTopic);
        setQuizScore(null); 
        setActiveTab('study');
        setMnemonicData({});
        setQuizKey(prevKey => prevKey + 1); // Reset quiz on topic change
      } else {
        router.push('/');
      }
    }
  }, [topicId, router]);

  const handleGenerateMnemonic = async (context: string, type: 'topic' | 'subtopic', id: string) => {
    const key = `${type}-${id}`;
    setMnemonicData(prev => ({ ...prev, [key]: { textLoading: true } }));

    try {
      const mnemonicResult: GenerateMnemonicOutput = await generateMnemonic({ context });
      setMnemonicData(prev => ({ ...prev, [key]: { text: mnemonicResult.mnemonicText, textLoading: false } }));
    } catch (mnemonicError) {
      console.error("Mnemonic generation error:", mnemonicError);
      setMnemonicData(prev => ({ ...prev, [key]: { textLoading: false, error: `Failed to generate mnemonic: ${mnemonicError instanceof Error ? mnemonicError.message : String(mnemonicError)}` } }));
    }
  };

  const handleQuizFinished = (finalScore: number) => {
    setQuizScore(finalScore);
    // No need to switch tab, results are shown above tabs now.
  };

  const handleRestartQuiz = () => {
    setQuizScore(null);
    setQuizKey(prevKey => prevKey + 1); // Increment key to force QuizDisplay re-mount
    setActiveTab('quiz'); // Switch to quiz tab
  };
  
  const handleTabChange = (value: string) => {
    const newTab = value as 'study' | 'quiz';
    setActiveTab(newTab);
    if (newTab === 'quiz' && quizScore !== null) {
      // If switching to quiz tab and results were shown, restart the quiz
      handleRestartQuiz();
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

  if (quizScore !== null && activeTab === 'quiz') { // Only show results if quiz tab is active
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
            <StudyGuideDisplay topic={topic} onGenerateMnemonic={handleGenerateMnemonic} mnemonicData={mnemonicData} />
          </Suspense>
        </TabsContent>
        <TabsContent value="quiz" className="mt-6">
          {/* Render QuizDisplay only if quizScore is null (i.e., quiz is active or needs to be started) */}
          {/* The results are handled by the block above the tabs */}
          {quizScore === null ? (
             <Suspense fallback={
                <div className="flex justify-center items-center h-40">
                  <Loader2 className="h-6 w-6 animate-spin text-primary mr-2" /> 
                  <span>Loading quiz...</span>
                </div>
             }>
              <QuizDisplay key={quizKey} topic={topic} onQuizFinished={handleQuizFinished} />
             </Suspense>
          ) : (
            // This content is shown if quiz is finished but user switches away from results view
            // This typically shouldn't be seen due to quizScore !== null check above.
            <div className="text-center p-8">
                <p className="text-lg text-muted-foreground">Quiz already completed. Results are shown above.</p>
                <Button onClick={handleRestartQuiz} variant="outline" className="mt-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Restart Quiz
                </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

