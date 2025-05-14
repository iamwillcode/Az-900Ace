
'use client';
import { Logo } from '@/components/azure-ace/Logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home, Award, Star } from 'lucide-react';
import { useGamificationStats } from '@/hooks/useGamificationStats';
import { useEffect } from 'react';

export function Navbar() {
  const { totalPoints, isLoading, refreshStats } = useGamificationStats();

  useEffect(() => {
    // Refresh stats when component mounts or when navigating,
    // in case localStorage was updated elsewhere (though less likely in this simple app)
    // More importantly, ensures Navbar displays the latest points if a quiz was just finished.
    refreshStats();

    const handleStorageChange = () => {
      refreshStats();
    };
    // Custom event to listen for point changes from TopicPage
    window.addEventListener('gamificationUpdate', handleStorageChange);
    
    // Standard storage event (less reliable for same-tab updates)
    window.addEventListener('storage', handleStorageChange);


    return () => {
      window.removeEventListener('gamificationUpdate', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [refreshStats]);


  return (
    <nav className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-4">
          {!isLoading && (
            <div className="flex items-center gap-2 text-primary font-semibold p-2 rounded-md bg-primary/10">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>{totalPoints} Points</span>
            </div>
          )}
          <Button variant="ghost" asChild>
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
