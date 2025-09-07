import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Star, BookOpen, Target } from 'lucide-react';

interface ProgressTrackerProps {
  viewedConcepts: Set<string>;
  bookmarkedConcepts: Set<string>;
  totalConcepts: number;
  practiceMode: boolean;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  viewedConcepts,
  bookmarkedConcepts,
  totalConcepts,
  practiceMode
}) => {
  const viewedCount = viewedConcepts.size;
  const bookmarkedCount = bookmarkedConcepts.size;
  const progressPercentage = Math.round((viewedCount / totalConcepts) * 100);

  return (
    <Card className="mb-6 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
            Study Progress
          </h3>
          <Badge variant="secondary" className="text-sm font-medium">
            {viewedCount}/{totalConcepts} concepts
          </Badge>
        </div>

        <div className="mb-4">
          <Progress 
            value={progressPercentage} 
            className="h-3 bg-gray-200"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-600">
                <span className="font-medium text-green-600">{viewedCount}</span> studied
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-600" />
              <span className="text-sm text-gray-600">
                <span className="font-medium text-yellow-600">{bookmarkedCount}</span> bookmarked
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Badge 
              variant={progressPercentage >= 100 ? "default" : "secondary"}
              className="text-sm"
            >
              {progressPercentage}% Complete
            </Badge>
            
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              {practiceMode ? (
                <>
                  <Target className="h-4 w-4 text-orange-600" />
                  <span className="text-orange-600 font-medium">Practice Mode</span>
                </>
              ) : (
                <>
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-600 font-medium">Study Mode</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Progress messages */}
        <div className="mt-4 text-sm text-gray-600">
          {progressPercentage === 100 ? (
            <p className="text-green-600 font-medium">
              🎉 Congratulations! You've studied all concepts. Ready for the exam!
            </p>
          ) : progressPercentage >= 75 ? (
            <p className="text-blue-600">
              💪 Great progress! You're almost ready for the AZ-900 exam.
            </p>
          ) : progressPercentage >= 50 ? (
            <p className="text-yellow-600">
              📚 Good progress! Keep studying to master all concepts.
            </p>
          ) : progressPercentage >= 25 ? (
            <p className="text-orange-600">
              🚀 Nice start! Continue exploring more concepts.
            </p>
          ) : (
            <p className="text-gray-600">
              ✨ Begin your AZ-900 journey by clicking on concepts below.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};