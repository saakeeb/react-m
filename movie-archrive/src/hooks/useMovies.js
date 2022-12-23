import { useEffect, useState } from 'react';
import _, { orderBy } from 'lodash';
import { toast } from 'react-toastify';
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from '../utils/Paginate';

const useMovies = () => {
    const [movies, setMovies] = useState([]);
    let [loveIcon, setLoveIcon] = useState(false);
    let [pageNumberContainer, setPageNumberContainer] = useState(5);
    let [currentPage, setCurrentPage] = useState(1);
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortColumn, setSortColumn] = useState({ path: 'title', order: 'asc' });

    useEffect(() => {
        const genresName = [{ name: 'All Genres', _id: "" }, ...getGenres()];
        setGenres(genresName);
        setMovies(getMovies());
    }, []);

    // const filterdMovies = selectedGenres && selectedGenres._id ? movies.filter(m => m.genre._id === selectedGenres._id) : movies;
    let filterdMovies = movies;
    //search query
    if (searchQuery) {
        filterdMovies = movies.filter(m=> m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
    }
    //filter query
    else if (selectedGenres && selectedGenres._id) {
        filterdMovies = movies.filter(m => m.genre._id === selectedGenres._id);
    }
    //sorted query
    const sortedMovies = _.orderBy(filterdMovies, [sortColumn.path], [sortColumn.order]);
    const numberOfPageContainInArray = Math.ceil(filterdMovies.length / pageNumberContainer);
    const paginateMovies = paginate(sortedMovies, currentPage, pageNumberContainer);

    const handleDeleteMovie = (movie) => {
        toast.warn("Movie Deleted");
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
        if (currentPage > 1) {
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
        setSelectedGenres(genre);
        setCurrentPage(1);
        setSearchQuery('');
    }

    const handleTableSort = sortColumn => {
        // const tableSort = { path, order: 'asc' };
        // tableSort.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        setSortColumn(sortColumn);
    }

    const handleSearch = (query) => {
        setSelectedGenres(null);
        setCurrentPage(1);
        setSearchQuery(query);
    }

    return (
        [
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
        ]
    );
};

export default useMovies;