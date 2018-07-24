import React, {Component} from 'react';
import style from './Landing.scss';
import landing_img from './landing_img.png';


class Landing extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return <div className={style.landing}>
            <img className={style.img} src={landing_img} alt="some img"></img>
            <div className={style.body}>
                <h1> Where Work Happens</h1>
                <p>When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slack has you covered.</p>
                <a href="" className={style.register}> 
                    <span> Get Started </span>
                </a>
                <h6> 
                    Already using Slack? 
                    <a href=""> Sign in. </a>
                </h6>
            </div>
        </div>
    }
}

export default Landing;