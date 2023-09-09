'use client'

import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";

function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <Image width={30} height={30} alt='brand' src={'/logo.png'}/>
        <p className='px-2 font-sans'>NFive Courses</p>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link href={''}>
          
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavBar;
