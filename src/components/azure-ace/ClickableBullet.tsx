import React, { memo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Info, Check, Bookmark } from 'lucide-react';

interface ClickableBulletProps {
  children: React.ReactNode;
  conceptKey?: string;
  level?: number;
  isClickable?: boolean;
  isViewed?: boolean;
  isBookmarked?: boolean;
  onClick?: () => void;
}

export const ClickableBullet: React.FC<ClickableBulletProps> = memo(({
  children,
  conceptKey,
  level = 0,
  isClickable = true,
  isViewed = false,
  isBookmarked = false,
  onClick
}) => {
  const handleClick = () => {
    if (isClickable && onClick) {
      onClick();
    }
  };

  return (
    <li
      className={`flex items-center justify-between group ${
        isClickable 
          ? 'cursor-pointer hover:bg-blue-50 hover:text-blue-700 rounded px-3 py-2 transition-all duration-200 hover:shadow-sm' 
          : 'px-3 py-1'
      } ${level > 0 ? `ml-${level * 4}` : ''} ${
        isViewed ? 'bg-green-50 border-l-2 border-green-400 pl-4' : ''
      }`}
      onClick={handleClick}
      title={isClickable ? 'Click for detailed explanation' : ''}
    >
      <div className="flex-1">
        {children}
      </div>
      <div className="flex items-center space-x-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {isViewed && (
          <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50">
            <Check className="h-3 w-3 mr-1" />
            Studied
          </Badge>
        )}
        {isBookmarked && (
          <Badge variant="outline" className="text-yellow-600 border-yellow-300 bg-yellow-50">
            <Bookmark className="h-3 w-3 mr-1" />
            Saved
          </Badge>
        )}
        {isClickable && (
          <Badge variant="outline" className="text-blue-500 border-blue-300 bg-blue-50">
            <Info className="h-3 w-3 mr-1" />
            Details
          </Badge>
        )}
      </div>
    </li>
  );
});