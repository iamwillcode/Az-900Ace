import { useState, useEffect, useRef } from 'react';

export const useStudyTimer = (selectedConcept?: any, selectedDomain?: number | null, searchTerm?: string) => {
  const [studyTime, setStudyTime] = useState(0);
  const [isStudying, setIsStudying] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isStudying) {
      intervalRef.current = setInterval(() => {
        setStudyTime(prev => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isStudying]);

  const startStudySession = () => {
    setIsStudying(true);
  };

  const pauseStudySession = () => {
    setIsStudying(false);
  };

  const resetStudySession = () => {
    setIsStudying(false);
    setStudyTime(0);
  };

  const getCurrentStudyTime = () => {
    return studyTime;
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return {
    studyTime,
    isStudying,
    startStudySession,
    pauseStudySession,
    resetStudySession,
    getCurrentStudyTime,
    formatTime
  };
};