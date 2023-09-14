import Image from "next/image";
import favicon from "../app/favicon.ico";

import React from "react";

export type NavbarProps = {
  id: number;
  path: string;
};

const Navbar = ({ Lista }: { Lista: NavbarProps[] }) => {
  return (
    <nav className="flex flex-row justify-between items-center bg-gray-400 w-full p-4 text-black mx-auto box-border max-h-20">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={favicon}
          alt="this is the logo for the company"
          width={50}
          height={50}
          objectFit="contain"
          className="cursor-pointer"
        ></Image>
        <h1 className="tracking-tighter text-gray-700 border-b-2">
          Master TrafikSkola
        </h1>
      </div>
      <ul className="flex box-border ">
        {Lista.map((list) => {
          return (
            <li
              className="mx-3 hover:underline cursor-pointer p-4"
              key={list.id}
            >
              {list.path}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
