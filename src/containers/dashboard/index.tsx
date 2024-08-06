import { FeatureFlags } from '@/feature-flags.ts';
import { ChatSelectorsContainer } from '../chats-selector';
import { ChatsListContainer } from '../chats-list';
import { MessagesContainer } from '../messages';

export const Dashboard = () => {
  return (
    <div className='flex-auto flex min-h-0'>
			{
				FeatureFlags.isChatSelectorsEnabled && <ChatSelectorsContainer />
			}
      <div className='flex flex-auto bg-ordinaryBg border-t-2 border-brightBg'>
        <ChatsListContainer />
        <MessagesContainer />
      </div>
    </div>
  );
};
