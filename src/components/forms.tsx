'use client';

import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import {
  Avatar,
  Checkbox,
  Divider,
  Select,
  SelectItem,
} from '@nextui-org/react';

type SearchFormProps = {
  placeholder?: string;
};

export function SearchForm(props: SearchFormProps) {
  const [search, setSearch] = useState('');

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Validation
    setSearch(e.target.value);
  };

  return (
    <>
      <form className="flex flex-row gap-x-3">
        <Input
          onChange={searchHandler}
          type="text"
          startContent={<HiMagnifyingGlass />}
          placeholder={props.placeholder}
          value={search}
        />
        <Button
          size="md"
          type="submit"
          color="primary"
          className="font-semibold"
        >
          Search
        </Button>
      </form>
      <div></div>
    </>
  );
}

export function CourseFilterForm() {
  return (
    <div className='mx-auto w-max shadow-inner px-20 py-8 rounded-lg bg-slate-50'>
      <h3 className='text-cyan-800 text-lg font-semibold'>Filter Courses</h3>
      <form
        action={''}
        className=" overflow-hidden"
      >
        <section className="flex flex-row gap-x-5">
          <div className="flex flex-col flex-1">
            <h4 className="text-base font-light py-2">Programming Language</h4>
            <Checkbox size="sm">
              <span className="text-sm font-medium text-slate-400 pb-20">
                Python
              </span>{' '}
            </Checkbox>
            <Checkbox size="sm">
              <span className="text-sm font-medium text-slate-400">
                Javascript
              </span>{' '}
            </Checkbox>
            <Checkbox size="sm">
              <span className="text-sm font-medium text-slate-400">SQL</span>{' '}
            </Checkbox>
            <Checkbox size="sm">
              <span className="text-sm font-medium text-slate-400">C#</span>{' '}
            </Checkbox>
          </div>
          <div className="px-2">
            <Divider orientation="vertical" />
          </div>
          <div>
            <h4 className="text-base font-light py-2">Category-path</h4>
            <div className="flex flex-col">
              <Checkbox size="sm">
                <span className="text-sm font-medium text-slate-400">
                  backend
                </span>{' '}
              </Checkbox>
              <Checkbox size="sm">
                <span className="text-sm font-medium text-slate-400">
                  frontend
                </span>{' '}
              </Checkbox>
              <Checkbox size="sm">
                <span className="text-sm font-medium text-slate-400">
                  database administrator
                </span>{' '}
              </Checkbox>
              <Checkbox size="sm">
                <span className="text-sm font-medium text-slate-400">
                  fullstack developer
                </span>{' '}
              </Checkbox>
              <Checkbox size="sm">
                <span className="text-sm font-medium text-slate-400">
                  infrastructure
                </span>{' '}
              </Checkbox>
            </div>
          </div>
          <div className="px-2">
            <Divider orientation="vertical" />
          </div>
          <div className="w-48">
            <Select
              color="secondary"
              size="sm"
              label="select language..."
              className="max-w-xs"
            >
              <SelectItem key={'da-DK'} startContent={<Avatar src={''} />}>
                Danish
              </SelectItem>
              <SelectItem key={'en-GB'} startContent={<Avatar src={''} />}>
                English
              </SelectItem>
            </Select>
          </div>
        </section>
        
          <Button type="submit" color="primary" variant="solid" className="float-right">
            Apply
          </Button>
        
      </form>
    </div>
  );
}
