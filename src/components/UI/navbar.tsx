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
import Link from "next/link";
import { ThemeSwitch } from "@/src/components/UI/theme-switch";
import Image from "next/image";
import { useTheme } from "next-themes";

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
        "text-green-400 transition-all duration-300",
        isDarkMode ? "bg-[#0d1224]" : "bg-white text-black shadow-lg"
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
              className="rounded-full transition-transform duration-300 hover:scale-110"
            />
          </NextLink>
        </NavbarBrand>

        {/* Navbar links for larger screens */}
        <ul className="hidden lg:flex gap-8 justify-start ml-2">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
            { label: "Blog", href: "#Blog" },
          ].map((item) => (
            <NavbarItem key={item.href}>
              <button
                onClick={() => handleScrollToSection(item.href.slice(1))}
                className={clsx(
                  "text-lg font-medium transition-colors duration-200",
                  isDarkMode ? "text-white" : "text-black",
                  "hover:text-primary"
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
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Login", href: "#login" },
            { label: "SignUp", href: "#signUp" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
            { label: "Blog", href: "#Blog" },
          ].map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <button
                onClick={() => handleScrollToSection(item.href.slice(1))}
                className={clsx(
                  "text-lg font-medium transition-colors duration-200",
                  isDarkMode ? "text-white" : "text-black",
                  "hover:text-primary"
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
