import React from 'react';
import { UserI } from '@store/slices/interfaces.ts';
import { dateExtractor } from '@/util/date-handler.ts';

export interface IncomingMSG {
  author: UserI,
  content: string,
  dateString: string
}
export const IncomingMessage: React.FC<IncomingMSG> = ({ author, content, dateString }) => {
  const { hour, minutes } = dateExtractor(dateString);

  return (
    <div className='flex flex-col items-start max-w-[500px] mb-20'>
      <div className='flex items-center text-xs mb-15'>
        <div className='flex-0 h-30 w-30 rounded-full overflow-hidden'>
          <img
						className='h-full w-full object-center object-contain'
						src='https://placehold.co/50x50'
						alt='userpic'
					/>
        </div>
        <div className='flex-0 my-0 mx-15'>{`${author.firstName} ${author.lastName}`}</div>
        <div className='flex-0 text-secondaryText'>{`${hour}:${minutes}`}</div>
      </div>
      <div className='flex origin-top bg-brightBg p-20 rounded-20 rounded-tl-0 animate-jelly'>
        {content}
      </div>
    </div>
  );
};
