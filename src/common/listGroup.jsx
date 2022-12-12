import React from 'react';

const ListGroup = (props) => {
    const {items, textProperty, valueProperty} = props;

    return (<ul class="list-group">
        {items.map(item => <li key={item[valueProperty]} class="list-group-item">{item[textProperty]}</li>)}
    </ul>);
};

ListGroup.defaultProps ={
    textProperty :"name",
    valueProperty : "_id"
};
 
export default ListGroup;