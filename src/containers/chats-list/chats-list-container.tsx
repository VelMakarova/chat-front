import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { extractUsers } from '@/util';
import { GoPlus } from 'react-icons/go';
import { ChatItem } from './chat/chat-item.tsx';
import { ListSearch } from './search/list-search.tsx';
import { getUserChats } from '@store/slices/chats-list.slice.ts';

export const ChatsListContainer = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector(state => state.currentUser.user._id);
  const { chats } = useAppSelector(state => state.userChats);

  useEffect(() => {
    id && dispatch(getUserChats(id));
  }, [dispatch, id]);

  return (
    <div className='relative flex flex-col flex-0 w-[300px] py-30 pr-0 pl-20'>
      <ListSearch />
      <div className='overflow-auto flex-auto'>
        {
          chats.length ? (
            chats.map((chat) => {
              const participants = Array.isArray(chat.participants) ? extractUsers(chat.participants, id) : chat.participants;
              const extracted = {
                _id: chat._id,
                participants,
                messages: chat.messages,
                hasUnread: chat.hasUnread,
              };
              return <ChatItem key={chat._id} chat={extracted} />;
            })
          ) : <div className=''>There is nothing here yet</div>
        }
      </div>
      <button
				className='absolute bottom-40 right-0 flex-centred h-45 w-45 border-none rounded-full bg-accent'
			>
        <GoPlus className='h-[60%] w-[60%] text-brightBg' />
      </button>
    </div>
  );
};
