"use client";
import { Movie } from "@/types/Movie";
import Image from "next/image";

type MovieIndexType = {
  item: Movie;
  index: number;
};
export const MovieFolder = ({ item, index }: MovieIndexType) => {
  const imageURL = "https://image.tmdb.org/t/p/original";

  return (
    <div key={index} className="aspect-[62/100] w-11/12 sm:w-full  m-auto mt-5">
      <Image
        src={`${imageURL}${item.poster_path}`}
        alt=""
        width={300}
        height={600}
        className="w-full aspect-[62/100] rounded-md"
      />
      <div className="font-poppins text-2xl text-white mt-4 text-ellipsis overflow-hidden whitespace-nowrap">
        {item.title}
      </div>
      <div className="font-poppins text-base text-white flex text-ellipsis overflow-hidden whitespace-nowrap">
        Gêneros:{" "}
        {item.genres &&
          item.genres.map((generos, index) => <p key={index} className="ml-3">{generos}</p>)}
      </div>
    </div>
  );
};
