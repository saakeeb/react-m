import React from 'react';
import _ from 'lodash';

const TableBody = (props) => {
    const { data, columns } = props;
    // console.log(data, columns);

    const dataColumns = (item, column) => {
        if (column.content) return column.content(item);
        else return _.get(item, column.path);
    }

    return (
        <tbody>
            {
                data.map(item => (
                    <tr key={item._id} height={5}>
                        {
                            columns.map(column => 
                                <td key={item._id + (column.path || column.key)} className='p-1 t-body'>{dataColumns(item, column)}</td>
                            )
                        }
                    </tr>
                ))
            }
        </tbody>
    );
};

export default TableBody;