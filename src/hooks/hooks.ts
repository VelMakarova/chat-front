import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { DOMAIN } from '@/configs';
import socket from '@/util/socket-client.ts';

// eslint-disable-next-line
export function useWebSocketConnection(event: string, handler: (props: any) => void) {
  useEffect(() => {
    socket.on(event, handler);
    return () => {
      socket.off(event, handler);
    };
  }, [event, handler]);
}

export function useToken() {
	const [token, setToken] = useState('');
	const { user, getAccessTokenSilently } = useAuth0();

	useEffect(() => {
		const getToken = async (): Promise<void> => {
			try {
				const accessToken = await getAccessTokenSilently({
					authorizationParams: {
						audience: `https://${DOMAIN}/api/v2/`,
						scope: 'read:current_user',
					},
				});
				setToken(accessToken);
			} catch (e) {
				console.error(e);
			}
		};
		getToken();
	}, [getAccessTokenSilently, user?.sub, token]);
	return token;
}
