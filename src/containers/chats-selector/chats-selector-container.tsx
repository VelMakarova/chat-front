import selectors from './selectors.tsx';
import { ChatSelector } from './chat-selector/chat-selector.tsx';
export const ChatSelectorsContainer = () => {
  return (
    <div className='flex-0 flex flex-col px-10 py-40'>
      {
        selectors.map(s => {
          return <ChatSelector key={s.title} {...s} />;
        })
      }
    </div>
  );
};
