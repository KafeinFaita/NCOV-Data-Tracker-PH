import React from 'react';
import { FaBriefcaseMedical, FaAmbulance, FaHeartbeat, FaMedkit, FaCross } from 'react-icons/fa';

const CountryData = ({ summary }) => {

    return (
        <div id='country-data'>
            <div id='data'>
                <div className="data-container" id='total'>
                    <FaBriefcaseMedical size='50'/>
                    <h3>Total Cases: {summary.cases}</h3>
                </div>
                
                <div className="data-container" id='active'>
                    <FaAmbulance size='40'/>
                    <p>Active Cases: {summary.active}</p>
                </div>

                <div className="data-container" id='critical'>
                    <FaHeartbeat size='40'/>
                    <p>Critical Cases: {summary.critical}</p>
                </div>

                <div className="data-container" id='recovered'>
                    <FaMedkit size='40'/>
                    <p>Recovered: {summary.recovered}</p>
                </div>

                <div className="data-container" id='deaths'>
                    <FaCross size='40'/>
                    <p>Deaths: {summary.deaths}</p>
                </div>

            </div>
        </div>
    )
}

export default CountryData;

    