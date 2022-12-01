import React from 'react';
import { Link } from 'react-router-dom';
import TableComp from '../common/TableComp';
import WishLike from '../common/WishLike';

const MoviesTable = (props) => {
    const { paginateMovies, onWishList, onDeleteMovie, onTableSort, sortColumn } = props;

    const table_header_array = [
        { path: 'title', name: 'Title', content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
        { path: 'genre.name', name: 'Genre' },
        { path: 'numberInStock', name: 'Stock' },
        { path: 'dailyRentalRate', name: 'Rate' },
        {
            key: 'like',
            content: movie => <WishLike movie={movie} onClick={() => onWishList(movie)} />
        },
        {
            key: 'delete',
            content: movie => <button
                className="btn btn-sm css-button-sliding-to-left--red"
                onClick={() => onDeleteMovie(movie)}
            >
                Delete
            </button>
        }
    ]

    // const handleTableSort = path => {
    //     const tableSort = { path, order: 'asc' };
    //     tableSort.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    //     onTableSort(tableSort);
    // }
    
    return (
        <TableComp
            data={paginateMovies}
            columns={table_header_array}
            sortColumn={sortColumn}
            onTableSort={onTableSort}
        />
    );
};

export default MoviesTable;