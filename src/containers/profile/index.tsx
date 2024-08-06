import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useAppSelector } from '@/hooks';

export const Profile = () => {
	const { user } = useAppSelector(state => state.currentUser);
	const { logout } = useAuth0();
	const [isEditEnabled, toggleEditMode] = useState(false);

	const editModeHandler = () => {
		if (isEditEnabled) {
			// TODO: some saving logic
			toggleEditMode(false);
		} else (
			toggleEditMode(true)
		);
	};

	const handleLogout = () => {
		logout({
			logoutParams: {
				returnTo: 'http://127.0.0.1:5173/auth',
			},
		});
		localStorage.removeItem('token');
	};
	// TODO: change photo logic
  return (
		<div className='flex flex-col flex-auto px-20 py-40'>
			<div className='flex w-full justify-end flex-0 pb-20 border-b border-secondaryText'>
				<button
					className='flex-centred bg-accent text-brightBg px-20 py-7 rounded-15'
					onClick={editModeHandler}
				>
					{isEditEnabled ? 'save changes' : 'edit'}
				</button>
			</div>
			<div className='flex flex-auto flex-col p-20'>
				<div className='mb-40 flex flex-col self-start'>
					<div>
						<img
							className='rounded-full overflow-hidden'
							src='https://placehold.co/150x150'
							alt={user?.firstName}
						/>
					</div>
					<div className='self-center mt-20'>
						<button
							className='flex-centred bg-accent text-brightBg px-20 py-7 rounded-15'
						>
							edit
						</button>
					</div>
				</div>
				<div className='mb-20'>
					<input
						readOnly={!isEditEnabled}
						type='text'
						className='border-none rounded-[25px] bg-accentBg outline-0 text-primaryText py-10 px-20'
						placeholder='first name'
						//value={user?.firstName}
					/>
				</div>
				<div className='mb-20'>
					<input
						readOnly={!isEditEnabled}
						type='text'
						className='border-none rounded-[25px] bg-accentBg outline-0 text-primaryText py-10 px-20'
						placeholder='last name'
						//value={user?.lastName}
					/>
				</div>
			</div>
			<div className='flex w-full justify-end flex-0 pt-20 border-t border-secondaryText'>
				<button className='flex-centred bg-accent text-brightBg px-20 py-7 rounded-15' onClick={handleLogout}>Log out
				</button>
			</div>
		</div>
	);
};
