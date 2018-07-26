import React, {Component} from 'react';
import style from './Extensions.scss';

const Extensions = function(props){
    return <div className={style.extensions}>
        <div className={style.info}> 
            <a href=""><strong> Status </strong> </a>
            <a href=""><strong> Privacy & Terms </strong></a>
            <a href=""><strong> Contact Us </strong></a>
        </div>

        <div className={style.social_media}> 
            <a href=""> Status </a>
            <a href=""> Privacy & Terms </a>
            <a href=""> Contact Us </a>            
        </div>
    </div>
}

export default Extensions;