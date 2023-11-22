import { useQuery } from "@tanstack/react-query"
import { getData, getGenres } from "./api"


export const useMovies = (movie?: string,genreId?:number) => {

    const query = useQuery({
        queryKey: ['movies', movie,genreId],
        queryFn: () => getData(movie,genreId)
    });

    return query;
};


export const useGenres = () => {
    const query = useQuery({
        queryKey: ['generos'],
        queryFn: getGenres
    });
    return query;
};

