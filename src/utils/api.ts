import { Movie } from "@/types/Movie";
import { Genre } from "@/types/Genre";



export const getMovies = async (movie?: string): Promise<Movie[]> => {
    let url;
    const searchURL = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=pt-BR&page=1`;
    const standardURL = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1'
    if (movie) {
        url = searchURL;

    } else {
        url = standardURL

    }
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWQwMDJlYjc5MGMyMjlkNzZmOTIwMmNiZDg0NjRkNSIsInN1YiI6IjY1NTY3ODRiNTM4NjZlMDExYzA3ZjhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHs4DnB-NmhkgAlET3vi_xGeow7bUV72q0rmLzJdfvc'
        },
    });

    const data = await response.json()

    return data.results;
}

export const getGenres = async (): Promise<Genre[]> => {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=pt', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWQwMDJlYjc5MGMyMjlkNzZmOTIwMmNiZDg0NjRkNSIsInN1YiI6IjY1NTY3ODRiNTM4NjZlMDExYzA3ZjhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHs4DnB-NmhkgAlET3vi_xGeow7bUV72q0rmLzJdfvc'
        },
    });

    if (!response.ok) {
        throw new Error('Erro na requisição GET');
    }

    const data = await response.json();


    return data.genres;
}

export const getData = async (movie?: string): Promise<Movie[]> => {
    const movieResponse = await getMovies(movie);
    const genresResponse = await getGenres();

    const moviesWithGenres = movieResponse.map(movie => {
        const genreIdSearch = movie.genre_ids[0];
        const genreFound = genresResponse.find(function (genre) {
            return genre.id === genreIdSearch;
        });
        if (genreFound) {
            const newMovies = { ...movie, genre: genreFound.name };
            return newMovies;
        } else {
            return movie
        }
    });

    return moviesWithGenres;

}

export const searchMovies = async (movie: string): Promise<Movie[]> => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=pt-BR&page=1`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWQwMDJlYjc5MGMyMjlkNzZmOTIwMmNiZDg0NjRkNSIsInN1YiI6IjY1NTY3ODRiNTM4NjZlMDExYzA3ZjhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eHs4DnB-NmhkgAlET3vi_xGeow7bUV72q0rmLzJdfvc'
        },
    });
    const data = await response.json();
    console.log(data.results);

    return data.results;
}