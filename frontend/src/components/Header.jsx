"use client";
import { CartIcon, SearchIcon, UserIcon } from "@/Logos/Icons";
import PineconeLogo from "@/Logos/Pinecone";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  return (
    <div className="fixed top-0 bg-white w-full">
      <div className="flex items-center justify-between min-w-[1440px] w-[1258px] mx-auto py-2 px-6">
        <div className="flex gap-6">
          <div className="p-1">
            <PineconeLogo />
          </div>
          <Link
            href={"/"}
            className={`${
              path === "/" ? "text-green-400" : ""
            } p-1 font-semibold`}
          >
            НҮҮР
          </Link>
          <Link
            href={"/menu"}
            className={`${
              path === "/menu" ? "text-green-400" : ""
            } p-1 font-semibold`}
          >
            ХООЛНЫ ЦЭС
          </Link>
          <Link
            href={"/delivery"}
            className={`${
              path === "/delivery" ? "text-green-400" : ""
            } p-1 font-semibold`}
          >
            ХҮРГЭЛТИЙН БҮС
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <div className="relative">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Хайх"
              className="py-2 pr-4 pl-10 border-[1px] border-black rounded-lg"
            />
            <div className="absolute top-1/2 left-3 -translate-y-1/2">
              <SearchIcon />
            </div>
          </div>
          <div className="flex gap-2 py-2 px-4">
            <CartIcon />
            <span className="font-semibold">Сагс</span>
          </div>
          <Link href={"/login"} className="flex gap-2 py-2 px-4">
            <UserIcon />
            <span className="font-semibold">Нэвтрэх</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
