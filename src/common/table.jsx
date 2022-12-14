
    return (<table className="table">
    <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort}/>
    <TableBody columns={columns} data={data}/>
</table>);
}
 
export default Table;