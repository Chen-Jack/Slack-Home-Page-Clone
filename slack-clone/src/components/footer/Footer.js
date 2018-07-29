import React, {Component} from 'react';
import style from './Footer.scss';
import Directory from './directory/Directory';
import Extensions from './Extensions/Extensions';
import slack_logo from './slack_logo.png';


class Footer extends Component{
    render(){
        return <div className={style.footer}>
           {/* Footer Content */}
            <div className={style.content}>
                <span className={style.logo}>
                    <img src={slack_logo} alt="slack logo"/>
                </span>

                <Directory className={style.dic}/>  
            </div>

            {/* Social Media Extensions */}
            <Extensions/>
        </div>
    }
}

export default Footer;