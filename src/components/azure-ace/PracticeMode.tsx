import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, Target, Eye, EyeOff } from 'lucide-react';
import { conceptExplanations } from '@/lib/az900-concepts';

interface PracticeModeProps {
  practiceMode: boolean;
}

export const PracticeMode: React.FC<PracticeModeProps> = ({ practiceMode }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  if (!practiceMode) return null;

  const practiceQuestions = Object.entries(conceptExplanations)
    .filter(([key, concept]) => concept && concept.title)
    .map(([key, concept]) => ({
      question: `What is ${concept.title}?`,
      answer: concept.explanation || 'No explanation available',
      mnemonic: concept.mnemonic || '',
      examples: concept.examples || 'No examples available',
      key
    }));

  const nextQuestion = () => {
    if (currentQuestion < practiceQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowAnswer(false);
    }
  };

  const currentQ = practiceQuestions[currentQuestion];
  const progressPercentage = ((currentQuestion + 1) / practiceQuestions.length) * 100;

  return (
    <Card className="mb-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-yellow-800 flex items-center">
          <Target className="h-6 w-6 mr-2" />
          Practice Mode
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Progress indicator */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="text-sm">
                Question {currentQuestion + 1} of {practiceQuestions.length}
              </Badge>
              <span className="text-sm text-gray-600 font-medium">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          {/* Question */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {currentQ?.question}
            </h3>
            
            {!showAnswer ? (
              <Button 
                onClick={() => setShowAnswer(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white"
              >
                <Eye className="h-4 w-4 mr-2" />
                Show Answer
              </Button>
            ) : (
              <div className="space-y-4">
                <Button 
                  onClick={() => setShowAnswer(false)}
                  variant="outline"
                  size="sm"
                  className="mb-4"
                >
                  <EyeOff className="h-4 w-4 mr-2" />
                  Hide Answer
                </Button>

                {/* Answer */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Answer:</h4>
                  <p className="text-green-700">{currentQ?.answer}</p>
                </div>

                {/* Memory Aid */}
                {currentQ?.mnemonic && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">🧠 Memory Aid:</h4>
                    <p className="text-blue-700 font-medium">{currentQ.mnemonic}</p>
                  </div>
                )}

                {/* Examples */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">💡 Examples:</h4>
                  <p className="text-purple-700">{currentQ?.examples}</p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              variant="outline"
              className="flex items-center"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>

            <div className="text-sm text-gray-500">
              Navigate through practice questions
            </div>

            <Button
              onClick={nextQuestion}
              disabled={currentQuestion === practiceQuestions.length - 1}
              variant="outline"
              className="flex items-center"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};