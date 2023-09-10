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

type INavigationConfig = {
  routes: Array<{ link: string; icon?: string; displayText: string }>;
  menuOpen?: boolean;
};

function SignUp(props: { isMobile: boolean }) {
  if (props.isMobile) {
    return (
      <Link size="md" color="success" href="/signup">
      Sign up
    </Link>
    )
  }

  return (
    <Link size="sm" underline="always" color="foreground" href="/signup" className="whitespace-nowrap">
      Sign up
    </Link>
  );
}

function SignIn(props: { isMobile: boolean }) {
  if (props.isMobile) {
    return (
      <Link size="md" color="primary" href="/signup">
        Login
      </Link>
    );
  }

  return (
    <Button size="sm" className="bg-pink-500 text-white font-semibold">
      Login
    </Button>
  );
}

const NavigationConfig: INavigationConfig = {
  routes: [
    {
      link: '/course',
      icon: '',
      displayText: 'courses',
    },
    {
      link: '/ressource',
      icon: '',
      displayText: 'ressources',
    },
    {
      link: '/about',
      icon: '',
      displayText: 'about',
    },
  ],
  menuOpen: undefined,
};

function MobileNav(props: INavigationConfig) {
  return (
    <>
      <NavbarMenuToggle
        aria-label={props.menuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
      />
      <NavbarMenu>
        {props.routes.map((route, index) => (
          <NavbarMenuItem key={`${route}-${index}`}>
            <Link color="foreground" className="w-full" href="#" size="lg">
              {route.displayText}
            </Link>
          </NavbarMenuItem>
        ))}

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
  return (
    <>
      
      <NavbarContent className={'hidden sm:flex'} justify={'end'}>
      <ThemeSwitch />
      <span className="border-s-1 w-1 h-3/5 border-gray-300"/>
      
        {NavigationConfig.routes.map((route) => {
          return (
            <NavbarItem key={'k' + route.displayText}>
              <Link color={'foreground'} href={route.link}>
                <p className="text-sm text-slate-500">{route.displayText}</p>
              </Link>
            </NavbarItem>
          );
        })}
        <span className="border-s-1 w-1 h-3/5 border-gray-300"/>
        <div className="flex flex-row items-center gap-3 ps-2">
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
    <Navbar onMenuOpenChange={setMenuOpen} maxWidth={'xl'}>
      <NavbarBrand>
        <Image width={30} height={30} alt="brand" src={'/logo.png'} />
        <p className="px-2 font-sans font-medium">
          N<span className="text-teal-500">Five</span> Courses
        </p>
      </NavbarBrand>
      <DesktopNav routes={navProps.routes} />
      <MobileNav menuOpen={isMenuOpen} routes={navProps.routes} />
    </Navbar>
  );
}

export default NavBar;
