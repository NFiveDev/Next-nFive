'use client';

import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

type SearchFormProps = {
  placeholder?: string;
};

export function SearchForm(props: SearchFormProps) {
  const [search, setSearch] = useState('');

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Validation
    setSearch(e.target.value)
  };

  return (
    <>
      <form className='flex flex-row gap-x-3'>
        <Input
          onChange={searchHandler}
          
          type="text"
          startContent={<HiMagnifyingGlass />}
          placeholder={props.placeholder}
          value={search}
        />
        <Button size='md' type='submit' color='primary'>Search</Button>
      </form>
      <div></div>
    </>
  );
}
