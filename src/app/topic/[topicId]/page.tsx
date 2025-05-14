
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useMemo, Suspense } from 'react';
import type { Topic, Question, SubTopic } from '@/lib/azure-data';
import { getTopicById, getSubTopicById } from '@/lib/azure-data';
import { QuestionDisplay } from '@/components/azure-ace/QuestionDisplay';
import { FeedbackDisplay } from '@/components/azure-ace/FeedbackDisplay';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { generateMnemonic, type GenerateMnemonicOutput } from '@/ai/flows/generate-mnemonic-flow';
import { generateImage, type GenerateImageOutput } from '@/ai/flows/generate-image-flow';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, ArrowRight, CheckSquare, Home, Lightbulb, Image as ImageIcon, Loader2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // For Next.js optimized images

// StudyGuideDisplay Component (moved inline for simplicity in this example, could be a separate file)
interface StudyGuideDisplayProps {
  topic: Topic;
  onGenerateMnemonic: (context: string, type: 'topic' | 'subtopic', id: string) => void;
  mnemonicData: Record<string, { text?: string; image?: string; textLoading?: boolean; imageLoading?: boolean; error?: string }>;
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
              Visual Mnemonic Aid
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topic.mnemonicSuggestion && !currentTopicMnemonic.text && (
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
            {currentTopicMnemonic.text && <p className="text-foreground/90 italic">{currentTopicMnemonic.text}</p>}
            
            {currentTopicMnemonic.imageLoading && (
                <div className="flex items-center space-x-2 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" /> <span>Generating image...</span>
                </div>
            )}
            {currentTopicMnemonic.image && (
              <div className="mt-2 border rounded-md overflow-hidden aspect-video relative bg-muted/50">
                <Image src={currentTopicMnemonic.image} alt="Generated Mnemonic" layout="fill" objectFit="contain" data-ai-hint="abstract concept" />
              </div>
            )}
            {!currentTopicMnemonic.text && !currentTopicMnemonic.textLoading && (
              <Button 
                onClick={() => onGenerateMnemonic(`${topic.name}: ${topic.studyGuide}`, 'topic', topic.id)}
                disabled={currentTopicMnemonic.textLoading || currentTopicMnemonic.imageLoading}
                size="sm"
                className="bg-primary hover:bg-primary/90"
              >
                <Sparkles className="mr-2 h-4 w-4" /> Generate Visual Mnemonic
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
                          {subTopic.mnemonicSuggestion && !currentSubtopicMnemonic.text && (
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
                          {currentSubtopicMnemonic.text && <p className="text-foreground/80 italic text-sm">{currentSubtopicMnemonic.text}</p>}
                          
                          {currentSubtopicMnemonic.imageLoading && (
                              <div className="flex items-center space-x-1 text-muted-foreground text-xs">
                                  <Loader2 className="h-3 w-3 animate-spin" /> <span>Generating image...</span>
                              </div>
                          )}
                          {currentSubtopicMnemonic.image && (
                            <div className="mt-1 border rounded-md overflow-hidden aspect-video relative bg-muted/40">
                              <Image src={currentSubtopicMnemonic.image} alt={`Mnemonic for ${subTopic.name}`} layout="fill" objectFit="contain" data-ai-hint="concept illustration" />
                            </div>
                          )}
                          {!currentSubtopicMnemonic.text && !currentSubtopicMnemonic.textLoading && (
                            <Button 
                              onClick={() => onGenerateMnemonic(`${subTopic.name}: ${subTopic.studyGuide}`, 'subtopic', subTopic.id)}
                              disabled={currentSubtopicMnemonic.textLoading || currentSubtopicMnemonic.imageLoading}
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
    return ((currentQuestionIndex + (isSubmitted ? 1 : 0)) / topic.questions.length) * 100;
  }, [currentQuestionIndex, isSubmitted, topic.questions.length]);

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
  const [quizTabActive, setQuizTabActive] = useState(false);
  const [mnemonicData, setMnemonicData] = useState<Record<string, { text?: string; image?: string; textLoading?: boolean; imageLoading?: boolean; error?: string }>>({});


  useEffect(() => {
    if (topicId) {
      const foundTopic = getTopicById(topicId);
      if (foundTopic) {
        setTopic(foundTopic);
        setQuizScore(null); 
        setQuizTabActive(false);
        setMnemonicData({});
      } else {
        router.push('/');
      }
    }
  }, [topicId, router]);

  const handleGenerateMnemonic = async (context: string, type: 'topic' | 'subtopic', id: string) => {
    const key = `${type}-${id}`;
    setMnemonicData(prev => ({ ...prev, [key]: { textLoading: true, imageLoading: false } }));

    try {
      const mnemonicResult: GenerateMnemonicOutput = await generateMnemonic({ context });
      setMnemonicData(prev => ({ ...prev, [key]: { ...prev[key], text: mnemonicResult.mnemonicText, textLoading: false, imageLoading: true } }));
      
      try {
        const imageResult: GenerateImageOutput = await generateImage({ prompt: mnemonicResult.imagePrompt });
        setMnemonicData(prev => ({ ...prev, [key]: { ...prev[key], image: imageResult.imageDataUri, imageLoading: false } }));
      } catch (imageError) {
        console.error("Image generation error:", imageError);
        setMnemonicData(prev => ({ ...prev, [key]: { ...prev[key], imageLoading: false, error: `Failed to generate image: ${imageError instanceof Error ? imageError.message : String(imageError)}` } }));
      }

    } catch (mnemonicError) {
      console.error("Mnemonic generation error:", mnemonicError);
      setMnemonicData(prev => ({ ...prev, [key]: { textLoading: false, imageLoading: false, error: `Failed to generate mnemonic: ${mnemonicError instanceof Error ? mnemonicError.message : String(mnemonicError)}` } }));
    }
  };

  const handleQuizFinished = (finalScore: number) => {
    setQuizScore(finalScore);
    setQuizTabActive(true); // Keep quiz tab active to show results
  };

  const handleRestartQuiz = () => {
    setQuizScore(null);
    // To re-init QuizDisplay, we can change its key or reset its internal state
    // For simplicity, changing tab might re-trigger or we might need explicit reset in QuizDisplay
    // For now, just clearing score. QuizDisplay will restart due to its own state logic if re-rendered.
    // A more robust way would be to pass a 'key' prop to QuizDisplay that changes on restart.
    if (topic) { // Re-set topic to force QuizDisplay re-render with initial state (if key prop not used)
      const currentTopic = getTopicById(topic.id); // get fresh topic data
      setTopic(null); // Temp set to null
      setTimeout(() => setTopic(currentTopic), 0); // Then re-set to trigger re-mount of children
    }
  };

  if (!topic) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-200px)]">
        <p className="text-xl text-muted-foreground">Loading topic...</p>
      </div>
    );
  }

  if (quizScore !== null && quizTabActive) {
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
      <Tabs defaultValue="study" className="w-full max-w-4xl px-2">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="study" onClick={() => setQuizTabActive(false)}>Study Material</TabsTrigger>
          <TabsTrigger value="quiz" onClick={() => { setQuizTabActive(true); if (quizScore !== null) setQuizScore(null); /* Reset score if switching to quiz */ }}>Quiz</TabsTrigger>
        </TabsList>
        <TabsContent value="study" className="mt-6">
          <Suspense fallback={<p>Loading study guide...</p>}>
            <StudyGuideDisplay topic={topic} onGenerateMnemonic={handleGenerateMnemonic} mnemonicData={mnemonicData} />
          </Suspense>
        </TabsContent>
        <TabsContent value="quiz" className="mt-6">
          {quizScore === null ? (
             <Suspense fallback={<p>Loading quiz...</p>}>
              <QuizDisplay topic={topic} onQuizFinished={handleQuizFinished} />
             </Suspense>
          ) : (
            // This state should be handled by the main component's quizScore !== null check
            <p>Quiz finished. Results are shown above the tabs.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

