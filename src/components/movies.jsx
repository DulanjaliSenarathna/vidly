import React, { Component } from 'react';
import Like from '../common/like';
import {getMovies} from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from '../common/pagination';
import {paginate} from '../utils/paginate.js';
import ListGroup from '../common/listGroup';
import MoviesTable from './moviesTable';

class Movies extends Component {
    state = {  
        movies : [],
        currentPage: 1,
        pageSize:4,
        genres:[]
    } ;

    componentDidMount(){

        const genres = [{name:"All Genres"},...getGenres()]

        this.setState({movies: getMovies(), genres});
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: movies});
    }

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }

    handlePageChange = (page) =>{
        this.setState({currentPage:page});
    }

    handleGenreSelect = genre =>{
        this.setState({selectedGenre: genre , currentPage:1});
    }

    render() { 
        const {length:count} = this.state.movies;
        const {currentPage, pageSize, selectedGenre, movies: allMovies} = this.state;

        if (count === 0) return <p>There is no movies in the list</p>;

        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m=> m.genre._id === selectedGenre._id)
            : allMovies;

        const movies = paginate(filtered,currentPage,pageSize);
        return (
            <div className='row'>
                <div className='col-3'>
                    <ListGroup
                     items={this.state.genres} 
                     selectedItem = {this.state.selectedGenre}
                     onItemSelect={this.handleGenreSelect}/>
                </div>
                <div className='col'>
                <p>There are {filtered.length} movies in the lsit</p>
           <MoviesTable movies={movies} onLike={this.handleLike} onDelete={this.handleDelete}/>
            <Pagination 
            itemCount={filtered.length} 
            pageSize={pageSize} 
            onPageChange={this.handlePageChange}
            currentPage = {currentPage}/>
                </div>           
            </div>
            
        );//inside onlick event , handleDelete(movie) parameter is same movie , in .map method
    }
}
 
export default Movies;