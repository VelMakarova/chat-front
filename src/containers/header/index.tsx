import { Logo, Nav, User } from '@/components';
import { HeaderControls } from '../header-controls';
export const Header = () => {
  return (
    <header className='flex-0 flex items-center px-50 py-0 w-full bg-ordinaryBg'>
      <Logo />
      <Nav />
      <HeaderControls />
      <User />
    </header>
  );
};
