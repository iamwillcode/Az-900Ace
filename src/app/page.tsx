import { topics } from '@/lib/azure-data';
import { TopicCard } from '@/components/azure-ace/TopicCard';
import { Navbar } from '@/components/azure-ace/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-4">
            Welcome to AzureAce!
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Your ultimate companion for mastering the AZ-900 Microsoft Azure Fundamentals exam.
            Select a topic below to start your learning journey.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </main>
      <footer className="text-center py-6 bg-card border-t">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} AzureAce. Conquer the Cloud!</p>
      </footer>
    </div>
  );
}
