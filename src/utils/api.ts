import { Movie } from "@/types/Movie";
import { Genre } from "@/types/Genre";

const apiKey = '6ad002eb790c229d76f9202cbd8464d5';


export const getMovies = async (movie?: string,genreId?:number): Promise<Movie[]> => {
    let url;
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}&include_adult=false&language=pt-BR&page=1`;
    const standardURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=pt-BR&page=1`;
    const genreFilterURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&language=pt-BR&page=1`;

    if (movie) {
        url = searchURL;

    }
    else if(genreId && genreId != 0) {
        url = genreFilterURL

    } else {
        url=standardURL;
    }
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    });

    const data = await response.json()

    return data.results;
}

export const getGenres = async (): Promise<Genre[]> => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Erro na requisição GET');
    }

    const data = await response.json();


    return data.genres;
}

export const getData = async (movie?: string,genreId?:number): Promise<Movie[]> => {
    const movieResponse = await getMovies(movie,genreId);
    const genresResponse = await getGenres();

    const moviesWithGenres = movieResponse.map(movie => {

        
        const genreIds = movie.genre_ids || [];

        const genresForMovie = genreIds.map(genreId => {
            const genreFound = genresResponse.find(genre => genre.id === genreId);
            return genreFound ? genreFound.name : null;
        });

        return {
            ...movie,
            genres: genresForMovie
        };


    });

    return moviesWithGenres;

}

