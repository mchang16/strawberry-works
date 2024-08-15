"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { createPortal } from "react-dom";
import MobileNav from "./MobileNav";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export default function Header() {
  const [isHover, setIsHover] = useState(false);

  return (
    <nav className="px-12 py-4 mx-auto sticky z-40 ">
      <div className="flex flex-row justify-between lg:justify-normal">
        <Link href="/">
          <Image
            className="w-20 lg:min-w-32 xl:w-40"
            src={logo}
            alt="Strawberry Works Logo"
            quality={100}
          />
        </Link>
        <div className="justify-around items-center hidden lg:flex lg:mx-12 lg:gap-12 xl:gap-24">
          <span className="bg-white">
            <div className="text-3xl text-brown transition-colors duration-200 ease-in hover:text-green">
              <Link href="/about">About</Link>
            </div>
          </span>
          <div className="text-3xl text-brown transition-colors duration-200 ease-in hover:text-red">
            <Link href="/needlefelting">Needlefelting</Link>
          </div>
          <div className="text-3xl text-brown transition-colors duration-200 ease-in hover:text-yellow">
            <Link href="/clay">Clay</Link>
          </div>
          <div className="text-3xl text-brown transition-colors duration-200 ease-in hover:text-green">
            <Link href="/illustrations">Illustrations</Link>
          </div>
          <div className="text-3xl text-brown transition-colors duration-200 ease-in hover:text-red">
            <Link href="/contact">Contact</Link>
          </div>
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <Link
              href="/shop"
              className="text-3xl text-brown transition-colors duration-200 ease-in hover:text-yellow"
            >
              Shop
            </Link>
            <Menu open={isHover} />
          </div>
        </div>
        <Hamburger />
      </div>
    </nav>
  );
}
