import React from 'react';
import { dateExtractor } from '@/util/date-handler.ts';

export interface OutcomingMsg {
  dateString: string,
  content: string,
}

export const OutcomingMessage: React.FC<OutcomingMsg> = ({ dateString, content }) => {
  const { hour, minutes } = dateExtractor(dateString);

  return (
    <div className='flex flex-col items-end mb-20'>
      <div className='flex'>
        <div className='ml-auto text-xs text-secondaryText mb-15'>{`${hour}:${minutes}`}</div>
      </div>
      <div className='flex origin-bottom bg-secondaryLight p-20 rounded-20 rounded-tl-0 animate-jelly max-w-[500px]'>
        {content}
      </div>
    </div>
  );
};
