import { Logo } from '@/components';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useToken } from '@/hooks';
import { useNavigate } from 'react-router';

export const Login = () => {
	const navigate = useNavigate();
  const { loginWithRedirect, loginWithPopup } = useAuth0();
	const token = useToken();


  // const handleSignUp = async () => {
	// 	if (!isAuthenticated) {
	// 		await loginWithPopup({
	// 			authorizationParams: {
	// 				screen_hint: 'signup',
	// 			},
	// 		});
	// 	}
	// 	//await ApiService.getAuthApi().register()
  // };
	useEffect(() => {
		if (token) {
			localStorage.setItem('token', JSON.stringify(token));
			navigate('/profile', { state: { fromRegister: true } });
		}
	}, [token, navigate]);

  return(
    <div className='h-full w-full flex-centred'>
      <div className='flex flex-col items-center p-50 rounded-30 bg-messageBg'>
				<Logo className='login' />
        <button
					className='border-none rounded-15 py-7 px-35 bg-accent text-lg text-brightBg cursor-pointer mt-50 mb-20 mx-0'
					onClick={() => loginWithRedirect()}
				>
					Login via Auth0
				</button>
        <button
					className='border-none rounded-15 py-7 px-35 bg-accent text-lg text-brightBg cursor-pointer mt-50 mb-20 mx-0'
					onClick={() => loginWithPopup()}
				>
					Signup via Auth0
				</button>
      </div>
    </div>
  );
};
