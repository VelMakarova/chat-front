import { JSX } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements, Navigate,
	Route,
} from 'react-router-dom';
import routes from './routes.ts';
import { MainLayout, AuthLayout } from '@/pages';
import { SignIn, SignUp, Dashboard, Contacts, Profile, Login } from '@/containers';
import { FeatureFlags } from '@/feature-flags.ts';

// eslint-disable-next-line
const ProtectedRoute = ({ children }: any): JSX.Element => {
	const token = localStorage.getItem('token');
	if(!token) {
		return <Navigate to={routes.SIGNIN} />;
	}
	return children;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {FeatureFlags.isInternalLoginEnabled ? (
        <>
          <Route path={routes.SIGNIN} element={<AuthLayout />}>
            <Route path={routes.SIGNIN} element={<SignIn />} />
          </Route>
          <Route path={routes.SIGNUP} element={<AuthLayout />}>
            <Route path={routes.SIGNUP} element={<SignUp />} />
          </Route>
        </>
        ) : (
        <Route path={routes.SIGNIN || routes.SIGNUP} element={<AuthLayout />}>
          <Route path={routes.SIGNIN} element={<Login />} />
        </Route>
        )
      }
      <Route path={routes.INDEX} element={<MainLayout />}>
				<Route path={routes.INDEX} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path={routes.CONTACTS} element={<Contacts />} />
        <Route path={routes.PROFILE} element={<Profile />} />
      </Route>
    </Route>
  )
);
