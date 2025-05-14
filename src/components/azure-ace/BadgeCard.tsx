
'use client';

import type { Badge } from '@/lib/gamification';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface BadgeCardProps {
  badge: Badge;
  isEarned: boolean;
}

export function BadgeCard({ badge, isEarned }: BadgeCardProps) {
  const Icon = badge.icon;
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Card className={`transition-all duration-300 ${isEarned ? 'border-accent shadow-accent/30 shadow-lg ring-2 ring-accent/70' : 'opacity-50 bg-muted/50 hover:opacity-75'}`}>
            <CardHeader className="items-center text-center pb-2 pt-4">
              <Icon className={`h-12 w-12 mb-2 ${isEarned ? 'text-accent' : 'text-muted-foreground'}`} />
              <CardTitle className={`text-lg ${isEarned ? 'text-accent' : 'text-muted-foreground'}`}>{badge.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-xs text-muted-foreground pb-3 min-h-[30px]">
              {isEarned ? badge.description : (badge.criteriaText || badge.description)}
            </CardContent>
            {isEarned && (
                <CardFooter className="p-0">
                    <div className="w-full text-center text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-100 py-1">
                        Earned
                    </div>
                </CardFooter>
            )}
          </Card>
        </TooltipTrigger>
        {!isEarned && badge.criteriaText && (
          <TooltipContent side="bottom">
            <p className="text-sm">How to earn: {badge.criteriaText}</p>
          </TooltipContent>
        )}
         {isEarned && (
          <TooltipContent side="bottom">
            <p className="text-sm">{badge.description}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
