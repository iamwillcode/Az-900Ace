
'use client';

import Link from 'next/link';
import { exams } from '@/lib/exam-data';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ListChecks } from 'lucide-react';

export default function ExamListPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-4">
          Practice Exams
        </h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
          Test your knowledge with our comprehensive practice exams. Each exam is designed to simulate the AZ-900 experience with 30 questions.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {exams.map((exam) => (
          <Card key={exam.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center mb-3">
                <ListChecks className="h-10 w-10 mr-3 text-primary" />
                <CardTitle className="text-2xl font-semibold">{exam.name}</CardTitle>
              </div>
              <CardDescription className="text-sm text-muted-foreground min-h-[60px]">{exam.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">Number of questions: {exam.questions.length} (Target: 30)</p>
              {exam.questions.length < 30 && (
                 <p className="text-xs text-orange-500 mt-1">Note: This exam currently has placeholder questions. More will be added.</p>
              )}
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={`/exam/${exam.id}`}>
                  Start Exam
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
