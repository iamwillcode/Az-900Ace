
import { Navbar } from '@/components/azure-ace/Navbar';

export default function ExamLayout({
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
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} AzureAce. Test Your Knowledge!</p>
      </footer>
    </div>
  );
}

    