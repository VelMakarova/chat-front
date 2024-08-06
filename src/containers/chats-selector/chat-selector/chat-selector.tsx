import { ISelectors } from '../selectors.tsx';
export const ChatSelector = ({ icon, title, counter } : ISelectors) => {
  return (
    <div className='flex p-20 text-secondaryText hover:bg-accent hover:text-brightBg rounded-[20px]'>
      <div className='flex-0'>{icon}</div>
      <div className='flex-auto px-20 py-0 capitalize min-w-0'>{title}</div>
      <div className='flex-0 min-w-0'>{counter}</div>
    </div>
  );
};
