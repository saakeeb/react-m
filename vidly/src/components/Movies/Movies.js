import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getMovies } from '../../services/fakeMovieService';
import { getGenres } from '../../services/fakeGenreService';
import { paginate } from '../../utils/Paginate';
import ListGroupComp from '../common/ListGroupComp';
import PaginationComp from '../common/PaginationComp';
import WishLike from '../common/WishLike';
import '../global/main.css'

const Movies = () => {
    const [movies, setMovies] = useState([]);
    let [loveIcon, setLoveIcon] = useState(false);
    let [pageNumberContainer, setPageNumberContainer] = useState(4);
    let [currentPage, setCurrentPage] = useState(1);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        setGenres(getGenres());
        setMovies(getMovies());
    }, []);

    const numberOfPageContainInArray = Math.ceil(movies.length / pageNumberContainer);
    const paginateMovies = paginate(movies, currentPage, pageNumberContainer);

    const HandleDeleteMovie = (movie) => {
        const newMovies = movies.filter(m => m._id !== movie._id);
        setMovies(newMovies);
    }

    const handleWishList = (movie) => {
        const newMovies = [...movies];
        const newWishIcon = newMovies.find(m => m._id === movie._id);
        newWishIcon.loveIcon = !newWishIcon.loveIcon;
        setMovies(newMovies);
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const handlePageNext = () => {
        if (currentPage >= 1 && currentPage < numberOfPageContainInArray) {
            currentPage += 1;
            setCurrentPage(currentPage);

        }
    }
    const handlePagePrev = () => {
        if (currentPage > 1 && currentPage <= numberOfPageContainInArray) {
            currentPage -= 1;
            setCurrentPage(currentPage);

        }
    }

    const handlePageFirst = () => {
        if (currentPage > 1 ) {
            currentPage = 1;
            setCurrentPage(currentPage);

        }
    }

    const handlePageLast = () => {
        if (currentPage < numberOfPageContainInArray) {
            currentPage = numberOfPageContainInArray;
            setCurrentPage(currentPage);

        }
    }

    const handleGenresChange = genre => {
        console.log(genre);
    }

    return (
        <>
            <div className="row m-1">
                <div className='col-sm-12 col-md-3 col-lg-2 my-3'>
                    <ListGroupComp
                        onGenresChange={handleGenresChange}
                        genres={genres}
                        // textProperty='name'
                        // valueProperty='_id'
                    />
                </div>
                <div className='col'>
                    {
                        movies.length ? (
                            <>
                                <h3>There {movies.length > 1 ? 'are ' + movies.length + ' movies' : 'is ' + movies.length + ' movie'} in the database.</h3>
                                <Table hover className='movies-table'>
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
                                        {
                                            paginateMovies.map(movie =>
                                                <tr key={movie._id}>
                                                    <td>{movie.title}</td>
                                                    <td>{movie.genre.name}</td>
                                                    <td>{movie.numberInStock}</td>
                                                    <td>{movie.dailyRentalRate}</td>
                                                    <td>
                                                        <WishLike movie={movie} onClick={handleWishList} />
                                                    </td>
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
                                <PaginationComp
                                    movies={movies}
                                    onPageChange={handlePageChange}
                                    onNextPage={handlePageNext}
                                    onPrevPage={handlePagePrev}
                                    onFirstPage={handlePageFirst}
                                    onLastPage={handlePageLast}
                                    currentPage={currentPage}
                                    numberOfPageContainInArray={numberOfPageContainInArray}
                                />
                            </>
                        ) : (
                            <h3>There is no movies in the database.</h3>
                        )
                    }
                </div>
            </div>
        </>
        
    );
};

export default Movies;