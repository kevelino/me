import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import React from 'react';

import Image from 'next/image';
import NextLink from 'next/link';

import { Link } from '@nextui-org/link';

import Logo from '@/public/logo.png';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              alt="Kevelino's Logo"
              className="w-[30px]"
              height={200}
              src={Logo}
              width={200}
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="w-2/4">
        <ul className="hidden lg:flex justify-end items-center gap-4 ml-2 w-full">
          {siteConfig.navItems.map(item => (
            <NavbarItem key={item.href}>
              <NextLink
                className="text-md font-semibold uppercase"
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
          <ThemeSwitch />
        </ul>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
        <NavbarMenu>
          {siteConfig.menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full text-default-900 hover:underline transition-200"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
    </NextUINavbar>
  );
};
