'use client'
import { useEntities } from "@/context/ContextHeader";
import Image from "next/image";

export const SearchComponent = () => {
  const { setMovie, text, setText } = useEntities();

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setMovie(text);
    }
  };
  return (
    <div className="bg-gray1F hidden sm:flex items-center w-11/12 sm:w-3/6 lg:w-1/3 rounded-md max-h-16 aspect-[9/1] sm:mr-6">
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
  );
};
