import React, {Component} from 'react';
import style from './EmailSignUp.scss';


class EmailSignUp extends Component{
    render(){
        return <div className={style.signup_space}>
            <div className={style.signup_content}>
                <h1> Try Slack with your team for free </h1>
                <input type="text" placeholder="Email Address"/>
                <button> <strong> GET STARTED </strong> </button> 
            </div>
        </div>
    }
}

export default EmailSignUp;