'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, XCircle, Info } from 'lucide-react';

interface FeedbackDisplayProps {
  isCorrect: boolean;
  feedbackText: string;
  correctAnswer: string;
  selectedAnswer?: string;
}

export function FeedbackDisplay({ isCorrect, feedbackText, correctAnswer, selectedAnswer }: FeedbackDisplayProps) {
  return (
    <Alert variant={isCorrect ? 'default' : 'destructive'} className={`mt-6 w-full max-w-2xl mx-auto shadow-md ${isCorrect ? 'bg-green-50 border-green-500 text-green-700' : 'bg-red-50 border-red-500 text-red-700'}`}>
      {isCorrect ? (
        <CheckCircle2 className={`h-5 w-5 ${isCorrect ? 'text-green-600' : 'text-red-600'}`} />
      ) : (
        <XCircle className={`h-5 w-5 ${isCorrect ? 'text-green-600' : 'text-red-600'}`} />
      )}
      <AlertTitle className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
        {isCorrect ? 'Correct!' : 'Incorrect'}
      </AlertTitle>
      <AlertDescription className={`mt-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
        {!isCorrect && selectedAnswer && (
          <p className="mb-1">Your answer: {selectedAnswer}</p>
        )}
        {!isCorrect && (
          <p className="mb-1">Correct answer: {correctAnswer}</p>
        )}
        <p className="font-medium mt-2 text-foreground/80 flex items-start">
          <Info size={18} className="mr-2 mt-0.5 shrink-0 text-foreground/60" />
          <span>{feedbackText}</span>
        </p>
      </AlertDescription>
    </Alert>
  );
}
