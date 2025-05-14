import { Logo } from '@/components/azure-ace/Logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        <Button variant="ghost" asChild>
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Dashboard
          </Link>
        </Button>
      </div>
    </nav>
  );
}
