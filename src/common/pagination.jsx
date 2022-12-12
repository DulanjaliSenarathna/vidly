import React from 'react';
import _ from 'lodash';//undersocre
import propTypes from 'prop-types';

const Pagination = (props) => {

    const {itemCount, pageSize, currentPage, onPageChange} = props;
    console.log(currentPage);
    
    const pagesCount = Math.ceil(itemCount / pageSize);
    if (pagesCount ===1) return null;
    const pages = _.range(1,pagesCount + 1);

    return <nav>
    <ul className="pagination">
        {pages.map(page => (
            <li key={page} className={page===currentPage ? "page-item active": "page-item"}>
            <a className="page-link" onClick={() => onPageChange(page)} href="#">{page}</a></li>
        ))}
      
      </ul>
    </nav>
};

Pagination.propTypes = {
    itemCount: propTypes.number.isRequired ,
    pageSize:propTypes.number.isRequired,
    currentPage:propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired
};
 
export default Pagination;