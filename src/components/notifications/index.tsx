import { GoBell } from 'react-icons/go';
import { NotificationsList } from './NotificationsList/notifications-list.tsx';
import { useState } from 'react';

export const Notifications = () => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <div className='relative my-0 mx-7'>
      <div className='relative cursor-pointer h-28 w-28' onClick={() => toggleOpen(!isOpen)}>
        <GoBell className='h-full w-full' />
      </div>
      {isOpen && <NotificationsList/>}
    </div>
  );
};
