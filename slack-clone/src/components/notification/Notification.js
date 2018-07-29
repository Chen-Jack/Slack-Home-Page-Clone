import React, {Component} from 'react';
import style from './Notification.scss';
import logo from './frontiers-logo.png';
import close_button from './x_hover.png';

class Notification extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isClosed : false
        }
    }

    closeNotification = (e)=>{
        e.preventDefault();

        this.setState({
            isClosed: true
        })
    }


    render(){
        return <div className={ style.notification_space + ' ' + (this.state.isClosed? style.isClosed : '')}>
            
            <div className={style.notification_content}>
                <img className={style.logo} src={logo} alt="logo"/>
                <p className={style.text}>  
                    Join us at Frontiers, a conference by Slack, in SF & NYC &nbsp;  
                    <a href="" className={style.register}> <strong> Register Now  </strong></a>
                </p>            
            </div>

            
            <div className={style.close_button_space}>
                <button className={style.close_button} onClick={this.closeNotification}>
                    <img src={close_button} alt=""/>
                </button>  
            </div>
   

        </div>
    }
}

export default Notification;