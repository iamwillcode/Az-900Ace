import type { Topic } from '@/lib/azure-data';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  const Icon = topic.icon;
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex-grow">
        <div className="flex items-center mb-3">
          {Icon && <Icon className="h-10 w-10 mr-3 text-primary" />}
          <CardTitle className="text-2xl font-semibold">{topic.name}</CardTitle>
        </div>
        <CardDescription className="text-sm text-muted-foreground min-h-[40px]">{topic.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={`/topic/${topic.id}`}>
            Start Learning
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
