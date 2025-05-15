
import { BrainCircuit } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
      <BrainCircuit className="h-8 w-8" />
      <span className="text-2xl font-bold">Az-900 Ace</span>
    </Link>
  );
}
