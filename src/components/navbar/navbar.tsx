'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ThemeSwitch from './themeSwitch';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import {HiAcademicCap, HiArchiveBox, HiQuestionMarkCircle, HiArrowRightOnRectangle} from 'react-icons/hi2';
import { IconType } from 'react-icons';

type INavigationConfig = {
  routes: Array<{ link: string; icon?: IconType; displayText: string }>;
  menuOpen?: boolean;
};


const NavigationConfig: INavigationConfig = {
  routes: [
    {
      link: '/course',
      icon: HiAcademicCap,
      displayText: 'courses',
    },
    {
      link: '/ressource',
      icon: HiArchiveBox,
      displayText: 'ressources',
    },
    {
      link: '/about',
      icon: HiQuestionMarkCircle,
      displayText: 'about',
    },
  ],
  menuOpen: undefined,
};

function SignUp(props: { isMobile: boolean }) {
  if (props.isMobile) {
    return (
      <Link size='lg' color='success' href='/signup'>
        Sign up
      </Link>
    );
  }

  return (
    <Link
      size='sm'
      underline='always'
      color='foreground'
      href='/signup'
      className='whitespace-nowrap'
    >
      Sign up
    </Link>
  );
}

function SignIn(props: { isMobile: boolean }) {
  if (props.isMobile) {
    return (
      <Link size='lg' color='primary' href='/signup'>
        Login
        <div className='ms-1'>
          <HiArrowRightOnRectangle/>
        </div>
      </Link>
    );
  }

  return (
    <Button size='sm' className='bg-pink-500 text-white font-semibold'>
      Login
    </Button>
  );
}



function MobileNav(props: INavigationConfig) {
  return (
    <>
      <NavbarMenuToggle
        aria-label={props.menuOpen ? 'Close menu' : 'Open menu'}
        className='sm:hidden'
      />
      <NavbarMenu>
        {props.routes.map((route, index) => (
          <NavbarMenuItem key={`${route}-${index}`}>
            <Link color='foreground' className='w-full' href='#' size='lg'>
              <div className='flex flex-row items-center '>
                {route.icon && <route.icon className='me-1 h-8 w-5 text-teal-600'/>}
                {route.displayText}
              </div>
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem>
          <div className='flex flex-row items-center'>
            <p className='me-2 text-slate-500'>Toggle color mode:</p> <ThemeSwitch />
          </div>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <SignIn isMobile={true} />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <SignUp isMobile={true} />
        </NavbarMenuItem>
      </NavbarMenu>
    </>
  );
}

function DesktopNav(props: INavigationConfig) {
  const pathname = usePathname();

  return (
    <>
      <NavbarContent className={'hidden sm:flex'} justify={'end'}>
        <ThemeSwitch />
        <span className='border-s-1 w-1 h-3/5 border-gray-300' />

        {NavigationConfig.routes.map((route) => {
          const isActive = pathname === route.link;
          return (
            <NavbarItem key={'k' + route.displayText}>
              <Link color={'foreground'} href={route.link}>
                <p
                  className={`${
                    isActive === true ? 'text-sky-500' : 'text-slate-500'
                  } text-sm`}
                >
                  {route.displayText}
                </p>
              </Link>
            </NavbarItem>
          );
        })}
        <span className='border-s-1 w-1 h-3/5 border-gray-300' />
        <div className='flex flex-row items-center gap-3 ps-2'>
          <SignUp isMobile={false} />
          <SignIn isMobile={false} />
        </div>
      </NavbarContent>
    </>
  );
}

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navProps = NavigationConfig;

  return (
    <Navbar onMenuOpenChange={setMenuOpen} maxWidth={'xl'} className='px-0'>
      <NavbarBrand>
        <Link href='/' color='foreground'>
        <Image width={30} height={30} alt='brand' src={'/logo.png'} />
        <p className='px-2  font-medium'>
          N<span className='text-teal-500'>Five</span> Courses
        </p>
        </Link>
        
      </NavbarBrand>
      <DesktopNav routes={navProps.routes} />
      <MobileNav menuOpen={isMenuOpen} routes={navProps.routes} />
    </Navbar>
  );
}

export default NavBar;
