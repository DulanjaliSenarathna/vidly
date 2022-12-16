import React from 'react';
import TableBody from './tableBody';
import TableHeader from './tableHeader';

const Table = ({columns, sortColumn, onSort, data}) => {

    return (<table className="table">
    <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort}/>
    <TableBody columns={columns} data={data}/>
</table>);
}
 
export default Table;

// const Table = props => {

//     const {columns, sortColumn, onSort, data} = props; instead of this, we can destructure argument. in here we can remove props in srguments and paste destructure line in it