import React, { Component } from 'react';
import Like from '../common/like';
import {getMovies} from '../services/fakeMovieService';
import Pagination from '../common/pagination';

class Movies extends Component {
    state = {  
        movies : getMovies(),
        pageSize:4
    } ;

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
        console.log(page);
    }
    render() { 
        const {length:count} = this.state.movies;
        if (count === 0) return <p>There is no movies in the list</p>
        return (
            <React.Fragment>
                <p>There are {count} movies in the lsit</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie =>(
                        <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)}/></td>
                        <td><button onClick={() =>this.handleDelete(movie)} className='btn btn-danger btn-sm'>Delete</button></td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
            <Pagination itemCount={count} pageSize={10} onPageChange={this.handlePageChange}/>
            </React.Fragment>
            
        );//inside onlick event , handleDelete(movie) parameter is same movie , in .map method
    }
}
 
export default Movies;