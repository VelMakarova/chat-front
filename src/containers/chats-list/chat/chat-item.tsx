import React from 'react';
import { ChatI } from '@store/slices/interfaces.ts';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectChat } from '@store/slices/selected-chat.slice.ts';
import { FeatureFlags } from '@/feature-flags.ts';

export const ChatItem: React.FC<{chat: ChatI}> = ({ chat }) => {
  const dispatch = useAppDispatch();
  const activeChatId = useAppSelector(state => state.selectedChat.id);
  const nameStr = !Array.isArray(chat.participants) && `${chat.participants.firstName} ${chat.participants.lastName}`;
  const number = !Array.isArray(chat.participants) && chat.participants.email;
  const isActive = activeChatId === chat._id;

  const handleActiveChat = () => {
		if (activeChatId !== chat._id) {
			dispatch(selectChat({ chatID: chat._id, companion: chat.participants }));
		}
  };

  return (
    <div onClick={handleActiveChat} className={`flex py-15 px-10 rounded-[20px] mb-10 ${isActive && 'bg-accentBg'}`}>
      <div className='flex-[0_0_50px] h-50 overflow-hidden rounded-full'>
        <img
					className='block h-50 w-50 object-contain object-center'
					src='https://placehold.co/50x50'
					alt='user'
				/>
      </div>
      <div className='flex-auto ml-10 chat-item text-secondaryText'>
        <div className='text-primaryText area-name'>
          <span className='relative font-bold'>
            {nameStr}
            {FeatureFlags.isOnlineEnabled && <div className='absolute top-[50%] right-[-13px] translate-y-[-50%] h-8 w-8 rounded-full bg-online' />}
          </span>
        </div>
        <div className='area-time text-xs'>12:34</div>
        <div className='area-number text-xs'>{number}</div>
        <div className='area-msg'></div>
      </div>
    </div>
  );
};
