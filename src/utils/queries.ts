import { useQuery } from "@tanstack/react-query"
import { getData, getGenres, searchMovies } from "./api"


export const useMovies = (movie?: string) => {

    const query = useQuery({
        queryKey: ['movies', movie],
        queryFn: () => getData(movie)
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

