import * as axios from "axios";
import {MDB_API_KEY} from "../config/config";
import {lolcatizeList} from "./lol";

const API_BASE_URL = 'https://api.themoviedb.org/3/';

export const loadMovies = async (page = 1) => {
    const movies = await axios.get(
        `${API_BASE_URL}movie/top_rated?api_key=${MDB_API_KEY}&page=${page}`
    );

    const titles = movies.data.results.map(result => result.title);
    const lolTitles = await lolcatizeList(titles);

    return {
        ...movies,
        data: {
            ...movies.data,
            results: movies.data.results.map((result, i) => ({
                ...result,
                lolTitle: lolTitles[i],
            })),
        },
    };
}

export const loadMovieDetail = (id) => axios.get(
    `${API_BASE_URL}movie/${id}?api_key=${MDB_API_KEY}`
);

// 780*439
export const getMovieImageUrl = (path, size = 'w780') => `https://image.tmdb.org/t/p/${size}${path}`;
