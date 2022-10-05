import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { getMovies } from '../../services/fakeMovieService';

const Movies = () => {
    const [movies, setMovies] = useState(getMovies());

    const HandleDeleteMovie = (movie) => {
        const newMovies = movies.filter(m => m._id !== movie._id);
        setMovies(newMovies);
    }

    return (
        <>
            {
                movies.length ? (
                    <>
                        <h3>There {movies.length > 1 ? 'are ' + movies.length + ' movies' : 'is ' + movies.length + ' movie'} in the database.</h3>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Stock</th>
                                    <th>Rate</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    movies.map(movie =>
                                        <tr key={movie._id}>
                                            <td>{movie.title}</td>
                                            <td>{movie.genre.name}</td>
                                            <td>{movie.numberInStock}</td>
                                            <td>{movie.dailyRentalRate}</td>
                                            <td>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => HandleDeleteMovie(movie)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </>
                ) : (
                     <h3>There is no movies in the database.</h3>
                )
            }
        </>
        
    );
};

export default Movies;