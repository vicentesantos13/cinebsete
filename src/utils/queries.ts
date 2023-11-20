import { useQuery } from "@tanstack/react-query"
import { getData, getGenres } from "./api"

export const useMovies = () =>{
    const query = useQuery({
        queryKey:['movies'],
        queryFn: getData
    });
    return query;
};

export const useGenres = () =>{
    const query = useQuery({
        queryKey:['movies'],
        queryFn: getGenres
    });
    return query;
};