"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-Button h-[440px] flex flex-col justify-center items-center w-full px-[100px]">
      <div className="w-[1240px] h-[419px] flex flex-col gap-[48px]">
        <div className="w-full h-[312px] flex justify-between ">
          <div className="flex flex-col gap-[50px] ">
            <h2 className="text-[24px] font-bold text-black">Funiro.</h2>
            <div>
              <h2 className="text-[16px] font-normal text-[#9F9F9F]">
                400 University Drive Suite 200 Coral <br /> Gables, <br />FL 33134 USA.
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-[50px] ">
            <h2 className="text-[16px] font-medium text-[#9F9F9F]">Links</h2>
            <ul className="text-[16px] font-medium text-black flex flex-col justify-between h-full  ">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex flex-col gap-[50px] h-[242px]">
            <h2 className="text-[16px] font-medium text-[#9F9F9F]">Help</h2>
            <ul className="text-[16px] font-medium text-black h-full flex flex-col justify-between">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          <div className="flex flex-col gap-[50px]">
            <h2 className="text-[16px] font-medium text-[#9F9F9F]">Newsletter</h2>
            <div className="flex gap-8">
              <input type="text" name="" id="" placeholder="Enter Your Email Address"
              className="text-[14px] font-normal text-[#9F9F9F] border-0 border-b border-black" />

              <button className="text-[14px] font-medium text-black border-0 border-b border-black">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="pt-[16px] w-full border-t border-[#D9D9D9] text-left ">
          <p className="text-black text-[16px] ">
          2023 furino. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  );
}
