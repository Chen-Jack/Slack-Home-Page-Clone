import React from 'react';
import style from './CompanyInfo.scss';
import airbnb_logo from './airbnb.png';
import capitalone_logo from'./capital_one.png';
import latimes_logo from './los-angeles-times.png';
import oracle_logo from './oracle.png';
import target_logo from './target.png';
import ticketmaster_logo from './ticketmaster.png';

const CompanyInfo = function (){
    return <div className={style.info_space}>
        <div className={style.info}>
            <h1> You're in good company </h1>
            <p> Millions of people around the world have already made Slack the place where their work happens. </p>
            <a href=""> <strong> DISCOVER WHY </strong> </a>
        </div>

        <div className={style.company_grid}>
            <img src={airbnb_logo} alt="airbnb logo"/>
            <img src={capitalone_logo} alt="capital one logo"/>
            <img src={target_logo} alt="Target logo" />
            <img src={latimes_logo} alt="LA Times logo"/>
            <img src={oracle_logo} alt="Oracle logo"/>
            <img src={ticketmaster_logo} alt="Ticket Master logo"/>
        </div>

    </div>
}

export default CompanyInfo;