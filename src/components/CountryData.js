import React from 'react';
import { FaBriefcaseMedical, FaAmbulance, FaHeartbeat, FaMedkit, FaCross } from 'react-icons/fa';

const CountryData = ({ summary }) => {
    return (
        <div>

            <div id='data'>
                <div className="data-container" id='total'>
                    <FaBriefcaseMedical size='50'/>
                    <h3>Total Cases</h3>
                    <p>{summary.cases}</p>
                </div>
                
                <div className="data-container">
                    <FaAmbulance size='40'/>
                    <p>Active Cases: {summary.active}</p>
                </div>

                <div className="data-container">
                    <FaHeartbeat size='40'/>
                    <p>Critical Cases: {summary.critical}</p>
                </div>

                <div className="data-container">
                    <FaMedkit size='40'/>
                    <p>Recovered: {summary.recovered}</p>
                </div>

                <div className="data-container">
                    <FaCross size='40'/>
                    <p>Deaths: {summary.deaths}</p>
                </div>

            </div>
        </div>
    )
}

export default CountryData;

    