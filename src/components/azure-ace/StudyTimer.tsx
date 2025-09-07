import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Pause, RotateCcw, Timer } from 'lucide-react';

interface StudyTimerProps {
  studyTime: number;
  isStudying: boolean;
  formatTime: (seconds: number) => string;
  getCurrentStudyTime: () => number;
  startStudySession: () => void;
  pauseStudySession: () => void;
  resetStudySession: () => void;
}

export const StudyTimer: React.FC<StudyTimerProps> = ({
  studyTime,
  isStudying,
  formatTime,
  getCurrentStudyTime,
  startStudySession,
  pauseStudySession,
  resetStudySession
}) => {
  return (
    <Card className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Timer className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-gray-800">Study Session</h3>
            </div>
            <div className="text-2xl font-bold text-blue-600 font-mono">
              {formatTime(getCurrentStudyTime())}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {!isStudying ? (
              <Button
                onClick={startStudySession}
                size="sm"
                className="bg-green-600 hover:bg-green-700"
              >
                <Play className="h-4 w-4 mr-1" />
                Start
              </Button>
            ) : (
              <Button
                onClick={pauseStudySession}
                size="sm"
                variant="outline"
                className="border-orange-300 text-orange-600 hover:bg-orange-50"
              >
                <Pause className="h-4 w-4 mr-1" />
                Pause
              </Button>
            )}
            
            <Button
              onClick={resetStudySession}
              size="sm"
              variant="outline"
              className="border-gray-300 text-gray-600 hover:bg-gray-50"
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
          </div>
        </div>
        
        <div className="mt-2 text-sm text-gray-600">
          {isStudying ? (
            <span className="flex items-center text-green-600">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Study session active
            </span>
          ) : (
            <span>Click Start to begin your study session</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};