import React from 'react';
import { Table } from 'react-bootstrap';
import { getMovies } from '../../services/fakeMovieService';

const Movies = () => {
    const movies = getMovies();
    return (
        <Table hover>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
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
                        </tr>
                    )
                }
            </tbody>
        </Table>
    );
};

export default Movies;