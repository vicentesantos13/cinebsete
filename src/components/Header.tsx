"use client";
import Image from "next/image";
import SearchHeader from "./SearchHeader";
import { useEntities } from "@/context/Context";

export const Header = () => {
  const { searchActive, setSearchActive } = useEntities();

  return (
    <div className="w-full bg-gray1F">
      {!searchActive && (
        <div className="flex justify-between items-center px-3 m-auto xl:px-0 xl:max-w-7xl">
          <div className="flex items-center py-10 ">
            <Image
              src="/assets/movie.png"
              height={36}
              width={36}
              alt="movieIcon"
              className="aspect-square w-6 sm:w-9"
            />
            <h1 className="text-white text-2xl sm:text-3xl font-poppins">
              cine<span className="font-medium">bsete</span>
            </h1>
          </div>
          <div
            className="aspect-square w-14 border border-grayD9 flex items-center justify-center rounded-md cursor-pointer sm:hidden"
            onClick={() => setSearchActive(true)}
          >
            <Image
              src="/assets/search.png"
              width={24}
              height={24}
              alt="searchIcon"
            />
          </div>
          <span className="text-gray7F text-lg hidden sm:block">
            powered by B7Web
          </span>
        </div>
      )}
      {searchActive && (
        <div className="w-full bg-gray1F py-10 ">
          <SearchHeader />
        </div>
      )}
    </div>
  );
};
