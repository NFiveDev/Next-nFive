'use client'

import { Input } from '@nextui-org/input';
import { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';



export function SearchForm() {
  const [search, setSearch] = useState('')

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Changed!', e)
  }

  return (
    <form>
      <Input onChange={searchHandler} type='text' startContent={<HiMagnifyingGlass />}  placeholder='type to search...'/>
    </form>
  );
}
