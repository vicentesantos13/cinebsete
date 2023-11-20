'use client';
import { MovieFolder } from "./MovieFolder";
import { useMovies } from "@/utils/queries";

export const MoviesArea = () => {
  

    const movies = useMovies();
    
  
  return (
    <div className="grid grid-cols-1 ">
        
      {movies.data && movies.data.map((item, index) => (
        <MovieFolder index={index} item={item} key={index} />
      ))}
      
    </div>
  );
};
