import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';
import React from 'react';

/**
 * Interface
 *  columns: array
 * sortColumn: object
 * onSort: function
 * 
 * This is child of MoviesTable.js*/



const TableHeader = (props) => {
    const handleTableSort = path => {
        const tableSort = { path, order: 'asc' };
        tableSort.order = (props.sortColumn.order === 'asc') ? 'desc' : 'asc';
        props.onTableSort(tableSort);
    }

    const arrowHandler = (arrow) => {
        if (arrow.path !== props.sortColumn.path ) {
            return null;
        }
        if (props.sortColumn.order === 'asc') {
            return <RiArrowUpSFill />
        }
        else {
            return <RiArrowDownSFill />
        }
    }

    return (
        <thead>
            <tr>
                {props.columns.map(column =>
                    <th
                        key={column.path || column.key}
                        onClick={() => handleTableSort(column.path)}
                        className="clickable"
                    >
                        {column.name}{ column.name && arrowHandler(column)}
                    </th>
                )}
            </tr>
        </thead>
    );
};

export default TableHeader;