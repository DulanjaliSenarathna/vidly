import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination'
import {paginate} from '../utils/paginate.js';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = {  
        movies : [],
        currentPage: 1,
        pageSize:4,
        genres:[],
        sortColumn: {path:'title', order:'asc'}
    } ;

    componentDidMount(){

        const genres = [{_id:'',name:"All Genres"},...getGenres()]

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

    handleSort = sortColumn => {
    
       this.setState({sortColumn});
    }

    getPageData = () =>{
        const {currentPage, sortColumn, pageSize, selectedGenre, movies: allMovies} = this.state;

        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m=> m.genre._id === selectedGenre._id)
            : allMovies;

       const sorted =  _.orderBy(filtered,[sortColumn.path],[sortColumn.order]);

        const movies = paginate(sorted,currentPage,pageSize);

        return {totalCount: filtered.length, data: movies};
    }

    render() { 
        const {length:count} = this.state.movies;
        const {currentPage, sortColumn, pageSize} = this.state;

        if (count === 0) return <p>There are no movies in the list</p>;

        const {totalCount,data: movies} = this.getPageData();

        return (
            <div className='row'>
                <div className='col-3'>
                    <ListGroup
                     items={this.state.genres} 
                     selectedItem = {this.state.selectedGenre}
                     onItemSelect={this.handleGenreSelect}/>
                </div>
                <div className='col'>
                <p>There are {totalCount} movies in the lsit</p>
           <MoviesTable 
           movies={movies}
           sortColumn={sortColumn}
            onLike={this.handleLike} 
            onDelete={this.handleDelete}
            onSort = {this.handleSort}/>
            <Pagination 
            itemCount={totalCount} 
            pageSize={pageSize} 
            onPageChange={this.handlePageChange}
            currentPage = {currentPage}/>
                </div>           
            </div>
            
        );//inside onlick event , handleDelete(movie) parameter is same movie , in .map method
    }
}
 
export default Movies;