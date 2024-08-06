import { Auth0Provider } from '@auth0/auth0-react';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routing';
import { store } from '@store/store.ts';
import '@/styles/index.scss';

const App = () => {
	return (
		<StrictMode>
			<Auth0Provider
				domain={import.meta.env.VITE_AUTH_DOMAIN}
				clientId={import.meta.env.VITE_CLIENT_ID}
				authorizationParams={{
					redirect_uri: import.meta.env.VITE_REDIRECT_URI,
					audience: import.meta.env.VITE_AUDIENCE,
					scope: 'read:current_user update:current_user_metadata',
				}}
			>
				<Provider store={store}>
					<RouterProvider router={router} />
				</Provider>
			</Auth0Provider>
		</StrictMode>
	);
};

export default App;
