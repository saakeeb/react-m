import ListGroupComp from '../common/ListGroupComp';
import PaginationComp from '../common/PaginationComp';
import '../global/main.css'
import MoviesTable from '../MoviesTable/MoviesTable';
import useMovies from '../../hooks/useMovies';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Searchbox from '../common/Searchbox';

const Movies = () => {
    let [
        movies,
        loveIcon,
        pageNumberContainer,
        currentPage,
        genres,
        selectedGenres,
        sortColumn,
        filterdMovies,
        numberOfPageContainInArray,
        paginateMovies,
        searchQuery,
        handleDeleteMovie,
        handleWishList,
        handlePageChange,
        handlePageNext,
        handlePagePrev,
        handlePageFirst,
        handlePageLast,
        handleGenresChange,
        handleTableSort,
        handleSearch
    ] = useMovies();

    return (
        <div className='container'>
            <div className="row m-auto align-items-center">
                <div className='col-sm-12 col-md-3 col-lg-2 my-3'>
                    <ListGroupComp
                        onGenresChange={handleGenresChange}
                        genres={genres}
                        selectedGenres={selectedGenres}
                    // textProperty='name'
                    // valueProperty='_id'
                    />
                </div>
                <div className='col px-3'>
                    <div className="d-flex m-auto align-items-center justify-content-between">
                        <Searchbox value={searchQuery} onChange={handleSearch} />
                        <Button
                            variant="primary"
                            type="submit"
                            className='css-button-sliding css-button-sliding-to-left--primary ms-3'
                        >
                            <Link to="/movies/new">
                                Add Movies
                            </Link>
                        </Button>
                    </div>
                    {
                        filterdMovies.length ? (
                            <>
                                <h3 className='list-title display-6 mb-4 mt-3'>There {filterdMovies.length > 1 ? 'are ' + filterdMovies.length + ' movies' : 'is ' + filterdMovies.length + ' movie'} in the database.</h3>

                                <MoviesTable
                                    paginateMovies={paginateMovies}
                                    onWishList={handleWishList}
                                    onDeleteMovie={handleDeleteMovie}
                                    onTableSort={handleTableSort}
                                    sortColumn={sortColumn}
                                />
                                <PaginationComp
                                    movies={filterdMovies}
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
            
        </div>

    );
};

export default Movies;