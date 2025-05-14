'use client';

import type { Question } from '@/lib/azure-data';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface QuestionDisplayProps {
  question: Question;
  selectedOption: number | null;
  onOptionSelect: (optionIndex: number) => void;
  isSubmitted: boolean;
  questionNumber: number;
  totalQuestions: number;
}

export function QuestionDisplay({
  question,
  selectedOption,
  onOptionSelect,
  isSubmitted,
  questionNumber,
  totalQuestions,
}: QuestionDisplayProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardDescription className="text-sm text-muted-foreground">
          Question {questionNumber} of {totalQuestions}
        </CardDescription>
        <CardTitle className="text-xl md:text-2xl font-semibold leading-tight">{question.text}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedOption !== null ? selectedOption.toString() : undefined}
          onValueChange={(value) => onOptionSelect(parseInt(value))}
          disabled={isSubmitted}
          className="space-y-3"
        >
          {question.options.map((option, index) => (
            <Label
              key={index}
              htmlFor={`option-${index}`}
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out
                ${isSubmitted && index === question.correctAnswerIndex ? 'bg-green-100 border-green-500 ring-2 ring-green-500' : ''}
                ${isSubmitted && selectedOption === index && index !== question.correctAnswerIndex ? 'bg-red-100 border-red-500 ring-2 ring-red-500' : ''}
                ${!isSubmitted && selectedOption === index ? 'bg-accent/20 border-accent ring-2 ring-accent' : 'border-border hover:bg-muted/50'}
                ${isSubmitted ? 'cursor-not-allowed opacity-75' : ''}
              `}
            >
              <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mr-3" />
              <span className="text-base">{option}</span>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
