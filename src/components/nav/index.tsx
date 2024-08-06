import routes from '@/routing/routes.ts';
import { NavLink } from 'react-router-dom';
import { GoPeople, GoCommentDiscussion, GoPerson } from 'react-icons/go';

export const Nav = () => {
	const classes = 'relative flex-centred text-secondaryText text-lg py-60 px-30 navlink-pseudo';
  return (
    <nav className='flex'>
			<NavLink
				to={routes.PROFILE}
				className={classes}
			>
				<GoPerson className='mr-10' />
				Profile
			</NavLink>
      <NavLink
				to={routes.CONTACTS}
				className={classes}
			>
				<GoPeople className='mr-10' />
				Contacts
			</NavLink>
      <NavLink
				to={routes.INDEX}
				className={classes}
			>
				<GoCommentDiscussion className='mr-10' />
				Chats
			</NavLink>
    </nav>
  );
};
