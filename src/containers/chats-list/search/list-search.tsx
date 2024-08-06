import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { CgClose } from 'react-icons/cg';

export const ListSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setFocus] = useState(false);

  return (
    <div
			className='relative flex py-15 pl-25 pr-40 rounded-[30px] overflow-hidden mb-30 bg-accentBg text-primaryText'
		>
      {(!isFocused && !searchValue) && (
        <div className='flex-0 h-20 w-20'>
          <GoSearch className='h-full w-full text-inherit'/>
        </div>
      )}
      <input
				className='flex-auto border-none text-[inherit] bg-inherit outline-0'
        onChange={e => setSearchValue(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type='text'
        value={searchValue}
      />
      {searchValue && (
        <button
					className='absolute top-[50%] right-20 translate-y-[50%] h-20 w-20 bg-transparent border-none text-primaryText'
					onClick={() => setSearchValue('')}
				>
          <CgClose className='h-full w-full text-inherit' />
        </button>
      )}
    </div>
  );
};
