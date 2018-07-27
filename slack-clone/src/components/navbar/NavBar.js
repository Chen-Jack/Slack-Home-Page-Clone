import React, {Component} from 'react';
import style from './NavBar.scss'
import SlackLogo from './SlackLogo.svg'
import Drawer from './drawer/Drawer';

class NavBar extends Component{

    constructor(props){
        super(props)
        console.log(style)
    }
    render(){
        return <nav className={style.navbar_content}>
                
            <div className={style.home}>
                <a href = "https://slack.com">
                    <img src={SlackLogo} className={style.logo} alt="" />
                </a>
            </div>
            
            {/* Either the list xor drawer will be rendered, depending on size */}
            <div className={style.navbar_list}>
                <a href="" className={style.navbar_link}> Why Slack? </a> 
                <a href="" className={style.navbar_link}> Pricing </a>
                <a href="" className={style.navbar_link}> About Us </a> 
                <a href="" className={style.workspace}> Create Workspace </a>
            </div>
            <Drawer className={style.drawer}/>
        </nav>
    }
}

export default NavBar;