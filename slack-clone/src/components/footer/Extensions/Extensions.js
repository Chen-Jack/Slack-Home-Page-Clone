import React from 'react';
import style from './Extensions.scss';

const Extensions = function(props){
    return <div className={style.extensions}>
        <div className={style.info}> 
            <a href=""><strong> Status </strong> </a>
            <a href=""><strong> Privacy & Terms </strong></a>
            <a href=""><strong> Contact Us </strong></a>
        </div>
    </div>
}

export default Extensions;