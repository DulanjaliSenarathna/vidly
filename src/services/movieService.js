import http from "./httpService"
import config from '../config.json'

const apiEndpoint = config.apiUrl + '/movies';

function movieUrl(id){
    return `${apiEndpoint}/${id}`;
}

export function getMovies(){
    return  http.get(apiEndpoint);
}

export function getMovie(movieId){
    return  http.get(movieUrl(movieId));
}

export function saveMovie(movie){
    if(movie._id){
        const body = {...movie};
        delete body._id;
        return http.put(movieUrl(movie._id), body); //restful api doesn't like body of the request include 'id' property that is also include url too. so we delete id from movie object
    }

    return http.post(apiEndpoint, movie);
   }

export function deleteMovie(movieId){
   return http.delete(movieUrl(movieId));
}