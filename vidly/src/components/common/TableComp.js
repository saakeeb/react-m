import React from 'react';
import { Table } from 'react-bootstrap';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const TableComp = (props) => {
    const { columns, sortColumn, onTableSort, data } = props;
    return (
        <Table hover className='movies-table'>
            <TableHeader
                columns={columns}
                sortColumn={sortColumn} //object for sorting header title to trace asc or desc
                onTableSort={onTableSort} //function for trigger asc or desc
            />
            {/* <thead>
                <tr>
                    <th onClick={() => handleTableSort('title')}>Title</th>
                    <th onClick={() => handleTableSort('genre.name')}>Genre</th>
                    <th onClick={() => handleTableSort('numberInStock')}>Stock</th>
                    <th onClick={() => handleTableSort('dailyRentalRate')}>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead> */}
            <TableBody
                data={data} // paginatemovies
                columns={columns} //table_header_array
            />
            {/* <tbody>
                {
                    paginateMovies.map(movie =>
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <WishLike movie={movie} onClick={()=> onWishList(movie)} />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onDeleteMovie(movie)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                }
            </tbody> */}
        </Table>
    );
};

export default TableComp;