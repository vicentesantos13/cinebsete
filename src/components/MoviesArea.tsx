"use client";
import { MovieFolder } from "./MovieFolder";
import { useMovies } from "@/utils/queries";
import { useEntities } from "@/context/ContextHeader";

export const MoviesArea = () => {
  const { movie } = useEntities();
  const { data } = useMovies(movie);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-3 xl:max-w-7xl xl:px-0 m-auto w-full gap-6 ">
      {data &&
        data.map((item, index) => (
          <MovieFolder index={index} item={item} key={index} />
        ))}
      {data?.length === 0 && (
        <div className="text-white m-auto mt-5">
          Não encontramos esse filme!
        </div>
      )}
    </div>
  );
};
