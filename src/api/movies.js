import * as axios from "axios";
import {MDB_API_KEY} from "../config/config";

const API_BASE_URL = 'https://api.themoviedb.org/3/';

export const loadMovies = (page = 1) => axios.get(
    `${API_BASE_URL}movie/top_rated?api_key=${MDB_API_KEY}&page=${page}`
);

export const loadMovieDetail = (id) => axios.get(
    `${API_BASE_URL}movie/${id}?api_key=${MDB_API_KEY}`
);
