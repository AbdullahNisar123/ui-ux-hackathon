"use client";
import { Icon } from "@iconify/react";

import Link from "next/link";
import Image from "next/image";
export default function NavBar() {
  return (
    <div className="w-full py-[30px] pl-[54px] pr-[100px] bg-white">
    <header className="flex justify-between mx-auto h-fit">
      <div className="flex items-center">
        
        <Image src="/images/Meubel House_Logos-05.png"
          alt="logo"
          className="w-[50px] h-[32px]"
          width={100} height={100}></Image>
        <h1 className=" text-[34px] font-bold">Furniro</h1>
      </div>
      <nav className="flex items-center">
        <ul className="flex gap-[75px]  text-[16px] font-medium">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Shop</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-[45px]">
        <Link href="#">
          <Icon
            icon="mdi:account-alert-outline"
            className="w-7 h-7 text-black "
          />
        </Link>
        <Link href="#">
          <Icon
            icon="si:search-line"
            className="w-7 h-7 text-black"
          />
        </Link>

        <Link href="#">
          <Icon icon="solar:heart-linear" className="w-7 h-7 text-black " />
        </Link>
        <Link href="#">
          <Icon
            icon="streamline:shopping-cart-2"
            className="text-black w-7 h-7"
          />
        </Link>
      </div>
    </header>
    </div>
  );
}
