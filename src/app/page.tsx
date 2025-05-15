
'use client';
import { useEffect, useState, useMemo } from 'react';
import { topics, getTopicById, type Topic } from '@/lib/azure-data';
import { TopicCard } from '@/components/azure-ace/TopicCard';
import { Navbar } from '@/components/azure-ace/Navbar';
import { useGamificationStats } from '@/hooks/useGamificationStats';
import { BadgeCard } from '@/components/azure-ace/BadgeCard';
import { allBadges } from '@/lib/gamification';
import { Award, Trophy, Search, PlayCircle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  const { earnedBadges, isLoading: gamificationLoading } = useGamificationStats();
  const earnedBadgeIds = earnedBadges.map(b => b.id);

  const [searchTerm, setSearchTerm] = useState('');
  const [lastVisitedTopic, setLastVisitedTopic] = useState<Topic | null>(null);

  useEffect(() => {
    const lastTopicId = localStorage.getItem('lastVisitedTopicId');
    if (lastTopicId) {
      const topic = getTopicById(lastTopicId);
      if (topic) {
        setLastVisitedTopic(topic);
      }
    }
  }, []);

  const filteredTopics = useMemo(() => {
    if (!searchTerm) {
      return topics;
    }
    return topics.filter(topic =>
      topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-4">
            Welcome to Az-900 Ace!
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Your ultimate companion for mastering the AZ-900 Microsoft Azure Fundamentals exam.
            Select a topic below to start your learning journey or search for specific content.
          </p>
        </header>

        {/* Search and Continue Section */}
        <section className="mb-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search topics..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {lastVisitedTopic && (
            <Button asChild variant="outline" size="lg">
              <Link href={`/topic/${lastVisitedTopic.id}`}>
                <PlayCircle className="mr-2 h-5 w-5" />
                Continue: {lastVisitedTopic.name}
              </Link>
            </Button>
          )}
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-semibold text-center text-primary">Your Achievements</h2>
          </div>
          {gamificationLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(3)].map((_, i) => (
                 <div key={i} className="flex flex-col items-center p-4 border rounded-lg">
                    <Skeleton className="h-12 w-12 rounded-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-1" />
                    <Skeleton className="h-3 w-1/2" />
                 </div>
              ))}
            </div>
          ) : allBadges.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {allBadges.map((badge) => (
                <BadgeCard key={badge.id} badge={badge} isEarned={earnedBadgeIds.includes(badge.id)} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No achievements defined yet. Start learning to earn them!</p>
          )}
        </section>
        
        {/* Topics Section */}
         <div className="flex items-center justify-center mb-6">
             <Award className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-semibold text-center text-primary">Study Topics</h2>
        </div>
        {filteredTopics.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">
            No topics found matching your search criteria.
          </p>
        )}
      </main>
      <footer className="text-center py-6 bg-card border-t">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Az-900 Ace by: Free Will. Conquer the Cloud!</p>
      </footer>
    </div>
  );
}
