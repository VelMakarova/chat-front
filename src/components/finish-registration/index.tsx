import { useAppDispatch, useToken } from '@/hooks';
import { finishRegistration } from '@store/slices/user.slice.ts';
import { useState } from 'react';

export const FinishRegistration = ({ onClose } : {onClose: () => void}) => {
	const dispatch = useAppDispatch();
	const token = useToken();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');


	const handleClick = () => {
		dispatch(finishRegistration({ token, op: { firstName, lastName } }));
		onClose();
	};

	return (
		<div className='fixed flex-centred h-full_vh w-full_vw z-50 bg-[rgba(255,255,255,0.1)]'>
			<div className='flex flex-col items-center p-50 rounded-30 bg-messageBg'>
				<form className='flex flex-col items-center'>
					<div className='relative form-field-not-lof'>
						<input
							className='py-15 px-20 rounded-15 border-none bg-accentBg text-lg text-primaryText outline-0'
							name='firstName'
							type='text'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							placeholder='First Name'
						/>
					</div>
					<div className='relative form-field-not-lof'>
						<input
							className='py-15 px-20 rounded-15 border-none bg-accentBg text-lg text-primaryText outline-0'
							name='lastName'
							type='text'
							value={lastName}
							onChange={e => setLastName(e.target.value)}
							placeholder='Last Name'
						/>
					</div>
					<button
						className='flex-centred bg-accent text-brightBg px-20 py-7 rounded-15 mt-20'
						onClick={handleClick}
					>
						Finish registration
					</button>
				</form>
			</div>
		</div>
	);
};
