/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
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
import Image from "next/image";
import { useTheme } from "next-themes";
import { ThemeSwitch } from "./theme-switch";

export const Navbar = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <NextUINavbar
      className={clsx(
        "transition-all duration-300 shadow-lg",
        isDarkMode
          ? "bg-gradient-to-r from-[#0d1224] to-[#1c2331] text-white"
          : "bg-gradient-to-r from-white to-gray-100 text-gray-800"
      )}
      maxWidth="xl"
      position="sticky"
    >
      {/* Left: Logo and Brand */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-3" href="/">
            <Image
              src="/assets/MyLogo.jpg"
              alt="Logo"
              width={45}
              height={45}
              className="rounded-full border-2 border-teal-400 transition-transform duration-300 hover:scale-110 shadow-lg"
            />
          </NextLink>
        </NavbarBrand>

        {/* Navbar links for larger screens */}
        <ul className="hidden lg:flex gap-8 ml-4">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
            { label: "Blog", href: "#blog" },
          ].map((item) => (
            <NavbarItem key={item.href}>
              <button
                onClick={() => handleScrollToSection(item.href.slice(1))}
                className={clsx(
                  "text-lg font-medium transition-all duration-200 px-2",
                  isDarkMode
                    ? "text-gray-200 hover:text-teal-400"
                    : "text-gray-800 hover:text-blue-600"
                )}
              >
                {item.label}
              </button>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Right: Theme Switch and Profile Icon */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="flex gap-3 items-center">
          <ThemeSwitch />
          <button
            className="rounded-full w-10 h-10 bg-teal-400 hover:bg-teal-500 transition-all duration-300 flex items-center justify-center text-white shadow-lg"
            title="Profile"
          >
            <i className="fas fa-user text-xl"></i>
          </button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile: Menu Toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu
        className={clsx(
          "py-4 px-6 text-center rounded-lg shadow-xl",
          isDarkMode ? "bg-[#0d1224] text-white" : "bg-white text-gray-800"
        )}
      >
        <div className="flex flex-col gap-4">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Login", href: "#login" },
            { label: "SignUp", href: "#signup" },
            { label: "Contact", href: "#contact" },
            { label: "Blog", href: "#blog" },
          ].map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <button
                onClick={() => handleScrollToSection(item.href.slice(1))}
                className={clsx(
                  "text-lg font-medium transition-all duration-200 py-2",
                  isDarkMode
                    ? "text-gray-200 hover:text-teal-400"
                    : "text-gray-800 hover:text-blue-600"
                )}
              >
                {item.label}
              </button>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
