import React, {Component} from 'react';
import style from './Footer.scss';
import slack_logo from './slack_logo.png';
import Directory from './directory/Directory';
import Extensions from './Extensions/Extensions';


class Footer extends Component{
    render(){
        return <div className={style.footer}>
            <div className={style.content}>
                <div className={style.logo}>
                    <img src={slack_logo} alt="slack logo"/>
                </div>
                <Directory/>  
            </div>

             <Extensions/>
        </div>
    }
}

export default Footer;