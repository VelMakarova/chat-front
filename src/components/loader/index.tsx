import React from 'react';

interface ILoader {
	isInline?: boolean
}
export const Loader: React.FC<ILoader> = ({ isInline = false }) => {
	const wrapperClasses = isInline ? '' : 'fixed flex-centred h-full_vh w-full_vw z-50 bg-[rgba(255,255,255,0.1)]';

	return (
		<div className={wrapperClasses}>
			<div className='h-60 w-60 rounded-full border-4 border-transparent border-t-accent animate-spin'></div>
		</div>
	);
};
