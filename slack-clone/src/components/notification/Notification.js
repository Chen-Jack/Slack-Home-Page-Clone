import React, {Component} from 'react';
import style from './Notification.scss';
import logo from './frontiers-logo.png';
import close_button from './x.png';

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
        return <div className={ style.notification + ' ' + (this.state.isClosed? style.isClosed : '')}>
            <div className={style.notification_content}>
                <img className={style.logo} src={logo} alt="logo"/>
                <p className={style.text}>  Join us at Frontiers, a conference by Slack, in SF & NYC </p>
                <button className={style.register_button}> <strong> Register Now  </strong></button> 
            </div>

            
            <button className={style.close_button} onClick={this.closeNotification}>
                 x
            </button>  
   

        </div>
    }
}

export default Notification;