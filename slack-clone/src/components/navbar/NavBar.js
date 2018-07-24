import React, {Component} from 'react';
import style from './NavBar.scss'
import SlackLogo from './SlackLogo.svg'

class NavBar extends Component{

    constructor(props){
        super(props)
        console.log(style)
    }
    render(){
        return <nav className={style.navbar}>
            <div className={style.navbar_content}>
                <a href = "https://slack.com" className={style.logo}><img src={SlackLogo} alt="slack logo" /></a>
                <div className={style.navbar_list}>
                    <a href="" className={style.navbar_link}> Why Slack? </a> 
                    <a href="" className={style.navbar_link}> Pricing </a>
                    <a href="" className={style.navbar_link}> About Us </a> 
                    <a href="" className={style.workspace}> Your Workspaces </a>
                </div>
            </div>
        </nav>
    }
}

export default NavBar;