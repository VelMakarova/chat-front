import { useAppSelector } from '@/hooks';
import { getTimeOfDay } from '@/util/time-handler.ts';

export const User = () => {
  const { user } = useAppSelector(state => state.currentUser);
  return (
    <div className='flex items-center ml-20'>
      <div className='text-right'>
        <div>{`Good ${getTimeOfDay()}, ${user.firstName}`}</div>
        <div className='text-secondaryText text-xs'>{user.email}</div>
      </div>
      <div className='ml-20 rounded-full overflow-hidden h-40 w-40'>
        <img
					className='flex h-full w-full object-contain object-center'
					src='https://placehold.co/50x50'
					alt='user photo'
				/>
      </div>
    </div>
  );
};
