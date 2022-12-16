import React, { Component } from 'react';

//Input : liked : boolean
//Output : onClick

const Like = (props) => {
    let classes = 'fa fa-heart';
    if(!props.liked) classes += '-o';
    return (<i onClick={props.onClick} style = {{cursor:'pointer'}} className={classes} area-hidden='true'></i>);
}
 
export default Like;

 