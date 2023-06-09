"use client";
import React from "react";
import { Button } from "../components/UI/Button";
import Navbar from "../components/UI/Navbar";
import NavLink from "../components/UI/Nav-link";
import "tailwindcss/tailwind.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

type learningpageprops = {
  children: React.ReactNode;
};

const links = [
  { href: "/LearningPage", label: " programes & degrees" },
  { href: "/LearningPage/ShortcoursesPage", label: "shortcourses" },
];
const Layout = (props: learningpageprops) => {
  const { children } = props;
  const path = usePathname();

  return (
    <main>
      <Navbar heading="Learning" />
      <div className="flex px-3 gap-3 flex-col mt-[50px] lg:ml-[50px]">
        <ul className="flex gap-3 text-sm items-center justify-start md:items-start px-2 capitalize">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative p-3 text-sm font-semibold text-black-100 z-20 md:w-full"
              >
                {link.label}
                {link.href === path && (
                  <motion.div className="absolute h-full w-full top-0 left-0 z-[8] bg-blue-200/40 text-black-100 "></motion.div>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-4">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
