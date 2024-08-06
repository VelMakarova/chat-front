import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { LuSend } from 'react-icons/lu';
import { getMessages } from '@store/slices/selected-chat.slice.ts';
import { MsgI, UserI } from '@store/slices/interfaces.ts';
import { useAppSelector, useAppDispatch, useWebSocketConnection } from '@/hooks';
import socket from '@/util/socket-client.ts';
import { OutcomingMessage } from './message/outcoming-message.tsx';
import { IncomingMessage } from './message/incoming-message.tsx';

export const MessagesContainer = () => {
  const dispatch = useAppDispatch();
  const { id, messages, companion } = useAppSelector(state => state.selectedChat);
  const currentUser = useAppSelector(state => state.currentUser);
  const [msgs, setMessages] = useState<MsgI[]>([]);
  const [value, setValue] = useState('');
  const messagesContainerRef:React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  const handleEnter = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter') {
      sendMessage();
    }
  };
  const sendMessage = () => {
    if(value.length) {
      const newMsg = {
        date: Date.now(),
        author: currentUser.user._id,
        target: id,
        content: value,
        isRead: true,
      };
      socket.emit('newMsg', newMsg);
    }
    setValue('');
  };

  const renderCompanion = () => {
    if (companion !== null) {
      return Array.isArray(companion) ? '' : `${companion.firstName} ${companion.lastName}`;
    } else {
      return '';
    }
  };

  const renderMessages = () => {
    return (
      msgs.map(msg => {
        if(msg.author === currentUser.user._id) {
          return <OutcomingMessage key={msg._id} dateString={msg.date} content={msg.content} />;
        } else {
          return <IncomingMessage key={msg._id} author={companion as UserI} content={msg.content} dateString={msg.date} />;
        }
      })
    );
  };

  const getMessage =(data: MsgI) => {
    setMessages((prevMessages) => [...prevMessages, data]);
  };

  useWebSocketConnection('newMsg', getMessage);

  useEffect(() => {
    dispatch(getMessages(id));
  }, [id, dispatch]);

  useEffect(() => {
    setMessages([...messages]);
  }, [messages]);

  useLayoutEffect(() => {
    messagesContainerRef.current!.scrollTop = messagesContainerRef.current!.scrollHeight;
  }, [msgs]);

  return (
    <div className='flex-auto flex flex-col pt-30 px-20 pb-0'>
      <div
				className='flex-[0_0_50px] flex items-center py-0 px-15 rounded-t-15 bg-brightBg'
			>
        Conversation with {renderCompanion()}
      </div>
      <div
				className='flex-auto overflow-auto flex flex-col py-10 px-20 bg-messageBg'
				ref={messagesContainerRef}
			>
        {renderMessages()}
      </div>
      {id && <div className='relative flex-0 p-20 bg-messageBg'>
        <textarea
					className='w-full p-20 pr-[150px] border-none rounded-[25px] bg-accentBg resize-none outline-0 text-lg text-primaryText'
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={'Write a message...'}
          onKeyUp={e => handleEnter(e)}
        />
        <button
					className='absolute top-[50%] right-45 translate-y-[-50%] h-45 w-45 rounded-[18px] border-none bg-accent cursor-pointer flex-centred'
          onClick={sendMessage}
        >
          <LuSend className='h-[50%] w-[50%] -translate-x-px translate-y-[3px] text-brightBg' />
        </button>
      </div>}
    </div>
  );
};
