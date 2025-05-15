
import { Navbar } from '@/components/azure-ace/Navbar';

export default function TopicQuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="text-center py-6 bg-card border-t">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Az-900 Ace by: Free Will. Keep Learning!</p>
      </footer>
    </div>
  );
}
