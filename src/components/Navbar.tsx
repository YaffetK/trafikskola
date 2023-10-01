import Image from "next/image";
import favicon from "../app/favicon.ico";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/toggle";

export type NavbarProps = {
  id: number;
  path: string;
};

const Navbar = ({ Lista }: { Lista: NavbarProps[] }) => {
  return (
    <nav className=" xsm:bg-red-300 xsm:flex xsm:text-xs xsm:flex-col sm:flex sm:flex-col sm:max-h-full flex flex-row justify-between items-center bg-gray-400 w-full p-4 text-black mx-auto box-border max-h-20 gap-10 mb-20">
      <div className="flex flex-col items-center justify-center max-h-full xsm:max-h-full xsm:bg-red-200">
        <Image
          src={favicon}
          alt="this is the logo for the company"
          width={50}
          height={50}
          objectFit="contain"
          className="cursor-pointer"
        ></Image>
        <h1 className="tracking-tighter text-gray-700 text-lg font-semibold">
          Master TrafikSkola
        </h1>
      </div>
      <ul className=" xs:flex xs:flex-col flex box-border text-xl font-semibold ">
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
      <ModeToggle />
      <Button>Toggle Mode</Button>
    </nav>
  );
};

export default Navbar;
