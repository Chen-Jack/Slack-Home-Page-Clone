import React, {Component} from 'react';
import style from './Drawer.scss';
import list_icon from './list.png';
import x_icon from './x.png';
import slack_logo_white from './slack_logo_white.png';

class Drawer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        }
    }

    toggleDrawer = ()=>{
        const new_expanded_state = !this.state.isExpanded;

        //Hide the scrolling action of the underlayer if the drawer is open
        if(new_expanded_state === true)
            document.body.style.overflow = "hidden";
        else
            document.body.style.overflow = "visible";

        this.setState({
            isExpanded: new_expanded_state
        }, ()=>{console.log(new_expanded_state)})

        
    }


    render(){
        return <div className={this.props.className}>
            <button className={style.drawer_toggle +' ' + (this.state.isExpanded? style.isExpanded:'')} onClick={this.toggleDrawer}> <img src={list_icon} alt=""/></button>
            
            {/* By Default, the drawer body is hidden off screen */}
            <div className={style.drawer_body}>  
                <div className={style.upperPanel}>
                    <div className={style.logo_space}>
                        <img src={slack_logo_white} alt=""/>
                    </div>

                    <button className={style.close_drawer}  onClick={this.toggleDrawer}> 
                        <img src={x_icon} alt=""/>
                    </button>
                </div>

                <div className={style.links}>
                    <a href=""> Why Slack? </a>
                    <a href=""> Pricing </a>
                    <a href=""> About Us </a>
                    <a href=""> Download Slack </a>
                </div>

                <a href=""> Find your Workspace </a>
                <a href=""> Create Workspace </a>

            </div>
        </div>
    }
}

export default Drawer;