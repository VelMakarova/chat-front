import React from 'react';
interface LogoProps {
	className?: string
}
export const Logo: React.FC<LogoProps> = ({ className }) => {
	return (
		<h1
			className={`text-lg text-secondaryLight font-bold ${className && className}`}
		>
			Chit<span className='text-secondaryDark'>Chat</span>
		</h1>
	);
};
