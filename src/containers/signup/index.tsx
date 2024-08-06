import { Formik } from 'formik';
import { Logo } from '@/components';
import routes from '@/routing/routes.ts';
import validateForm from '@/util/validation.ts';
import { Values } from '../signin';
import { useAuth0 } from '@auth0/auth0-react';

const initialValues: Values = {
  email: '',
  password: '',
};
export const SignUp = () => {
  const { loginWithRedirect } = useAuth0();
  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  };

  return (
  <div className='h-full w-full flex-centred flex-col bg-ordinaryBg'>
    <div className='flex flex-col items-center p-50 rounded-30 bg-messageBg'>
      <Logo className='login' />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
        // add validation
        validate={validateForm}
      >
        {
          ({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
            <form className='flex flex-col items-center' onSubmit={handleSubmit}>
              <div className='relative form-field-not-lof'>
                <input
									className='py-15 px-20 rounded-15 border-none bg-accentBg text-lg text-primaryText outline-0'
									name='email'
                  type='text'
                  value={values.email}
                  onChange={handleChange}
                  placeholder='email'
                />
                <div className='absolute top=[115%] py-0 px-10 text-red-700 text-xs'>
                  {errors.email}
                </div>
              </div>
              <div className='relative form-field-not-lof'>
                <input
									className='py-15 px-20 rounded-15 border-none bg-accentBg text-lg text-primaryText outline-0'
									name='password'
                  type='password'
                  value={values.password}
                  onChange={handleChange}
                  placeholder='password'
                />
                <div className='absolute top=[115%] py-0 px-10 text-red-700 text-xs'>
                  {errors.password}
                </div>
              </div>
              <button
								className='border-none rounded-15 py-7 px-35 bg-accent text-lg cursor-pointer mt-50 mb-20 mx-0'
								type='submit'
                disabled={isSubmitting}
              >
                SignUp
              </button>
            </form>
          )
        }
      </Formik>
      <a className='text-xs text-secondaryDark' href={routes.SIGNUP}>Already have account? Log in here</a>
    </div>
    <button
			className='border-none rounded-15 py-7 px-35 bg-accent text-lg cursor-pointer mt-50 mb-20 mx-0'
			onClick={handleSignUp}
		>
			SignUp via Auth0
		</button>
  </div>
  );
};
