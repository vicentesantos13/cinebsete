"use client";
import { useEntities } from "@/context/Context";
import { useState } from "react";
import Image from "next/image";

export const SearchHeader = () => {
  const { setSearchActive, setMovie, text, setText } = useEntities();

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setMovie(text);
    }
  };

  return (
    <div className="bg-gray14 flex items-center justify-between w-11/12 sm:w-3/6 lg:w-1/3 rounded-md max-h-16 aspect-[9/1] m-auto">
      <div className="flex items-center">
        <Image
          src="/assets/search.png"
          width={20}
          height={20}
          alt="searchIcon"
          className="mx-2"
        />
        <input
          type="text"
          placeholder="Pesquisar o nome do filme"
          className="text-gray7F text-lg bg-inherit outline-none"
          onChange={(e) => setText(e.target.value)}
          onKeyUp={handleEnter}
        />
      </div>

      <Image
        src="/assets/close.png"
        width={20}
        height={20}
        alt="searchIcon"
        className="mx-2 right-0"
        onClick={() => setSearchActive(false)}
      />
    </div>
  );
};
