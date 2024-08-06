import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks.ts';
import { Header } from '@/containers';
import { Loader, FinishRegistration } from '@/components';
import { useToken } from '@/hooks';
import { getUser } from '@/store/slices/user.slice.ts';

export const MainLayout = () => {
	const { isUserLoading, fromRegister } = useAppSelector(state => state.currentUser);
	const dispatch = useAppDispatch();
	const token = useToken();
	const [isPopupOpen, togglePopup] = useState(true);

	const closePopup = () => {
		togglePopup(false);
		dispatch(getUser(token));
	};

	useEffect(() => {
		togglePopup(fromRegister);
	}, [fromRegister]);

	useEffect(() => {
		dispatch(getUser(token));
	}, [dispatch, token]);

	useEffect(() => {
		if (token) {
			localStorage.setItem('token', JSON.stringify(token));
		}
	}, [token]);

  return (
		<>
			{isPopupOpen && <FinishRegistration onClose={closePopup} />}
			{isUserLoading && <Loader />}
			<div className={`h-full w-full flex flex-col ${(isUserLoading || isPopupOpen) && 'blur-sm'}`}>
				<Header />
				<Outlet />
			</div>
		</>
  );
};
