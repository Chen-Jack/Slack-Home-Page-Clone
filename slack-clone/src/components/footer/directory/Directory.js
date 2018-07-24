import React, {Component} from 'react';
import style from './Directory.scss';


class Directory extends Component{
    render(){
        return <div className={style.directory}>
            <ul className={style.column}>
                <li className={style.column_title}> <strong>PRODUCT</strong> </li>
                <li> <a href="">Why Slack? </a> </li>
                <li> <a href=""> Customer Stories </a> </li>
                <li> <a href=""> Pricing </a> </li>
                <li> <a href=""> Security </a> </li>
                <li> <a href=""> Enterprise </a> </li>
            </ul>

            <ul className={style.column}>
                <li className={style.column_title}><strong> SOLUTIONS </strong></li>
                <li> <a href=""> Engineering </a> </li>
                <li> <a href=""> Sales </a> </li>
                <li> <a href=""> Marketing </a> </li>
                <li> <a href=""> IT </a> </li>
                <li> <a href=""> Customer Support </a> </li>
            </ul>

            <ul className={style.column}>
                <li className={style.column_title}> <strong>RESOURCES </strong></li>
                <li> <a href=""> Download </a> </li>
                <li> <a href=""> Help Center </a> </li>
                <li> <a href=""> eBooks & Reports </a> </li>
                <li> <a href=""> Events </a> </li>
                <li> <a href=""> Guides </a> </li>
                <li> <a href=""> App Directory </a> </li>
                <li> <a href=""> API </a> </li>
            </ul>

            <ul className={style.column}>
                <li className={style.column_title}><strong> COMPANY </strong> </li>
                <li> <a href=""> About Us </a> </li>
                <li> <a href=""> Careers </a> </li>
                <li> <a href=""> Blog </a> </li>
                <li> <a href=""> Press </a> </li>
                <li> <a href=""> Partners </a> </li>
            </ul>
        </div>
    }
}

export default Directory;