/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import clsx from "clsx";
import Link from "next/link";
import { ThemeSwitch } from "@/src/components/UI/theme-switch";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <NextUINavbar
      className={clsx(
        "text-green-400 transition-colors duration-300",
        isDarkMode ? "bg-[#0d1224]" : "bg-white text-black shadow-md"
      )}
      maxWidth="xl"
      position="sticky"
    >
      {/* Left: Logo and Brand */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              src="/assets/MyLogo.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </NextLink>
        </NavbarBrand>

        {/* Navbar links for larger screens */}
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "hover:text-primary transition-colors duration-200",
                  isDarkMode ? "text-white" : "text-black"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Right: Theme Switch and Profile Icon */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="flex gap-2 items-center">
          <ThemeSwitch />
          {/* Additional icons or elements can be added here */}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile: Menu Toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu
        className={isDarkMode ? "bg-[#0d1224]" : "bg-white text-black"}
      >
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "Contact", href: "/contact" },
          ].map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className={clsx(
                  "hover:text-primary transition-colors duration-200",
                  isDarkMode ? "text-white" : "text-black"
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
