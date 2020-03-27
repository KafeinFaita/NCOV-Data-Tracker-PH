import React, { useState } from 'react';
import CountryData from './CountryData';
import { FaUserInjured, FaSkullCrossbones, FaUserCheck } from 'react-icons/fa';

const GlobalData = ({ countries, global }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [summary, setSummary] = useState()

    const handleChange = (e) => {
        setIsLoading(true);

        fetch(`https://corona.lmao.ninja/countries/${e.target.value}`).then(res => res.json()).then(data => {
            setSummary(data);
            setIsLoading(false);
        })
    }  

    return (
        <div id='global-data'> 
            <div id='global-stats-container'>
                <h2>Global Statistics</h2>
                <div className='global-stats'>
                    <FaUserInjured size={70} className='global-icon' style={{color: 'blue'}}/>
                    <h3>Cases</h3>
                    <p>{global.cases}</p>
                </div>  

                <div className='global-stats'>
                    <FaSkullCrossbones size={70} className='global-icon' style={{color: 'red'}}/>
                    <h3>Deaths</h3>
                    <p>{global.deaths}</p>
                </div>  

                <div className='global-stats'>
                    <FaUserCheck size={70} className='global-icon' style={{color: 'green'}}/>
                    <h3>Recovered</h3>
                    <p>{global.recovered}</p>
                </div>  
            </div>

            <h2 id='stats-country-title'>Statistics by Country</h2>

            <select onChange={handleChange}> 
                <option value="" selected hidden>Choose Country</option>   
                {countries.map(country => <option value={country}>{country}</option>)}        
            </select>  

            {isLoading ? <h3>Loading</h3> : null} 

            {!summary ? <h3>PICK A COUNTRY</h3> : <CountryData summary={summary}/>}
       
        </div>
    )
}

export default GlobalData;