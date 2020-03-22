import React, { useState } from 'react';
import CountryData from './CountryData'

const GlobalData = ({ countries }) => {

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
        <div> 
            <select onChange={handleChange}> 
                <option value="" selected hidden>Choose Country</option>   
                {countries.map(country => <option value={country}>{country}</option>)}        
            </select>  

            {!summary ? <h2>PICK A COUNTRY</h2> : isLoading ? <h2>Loading</h2> : <CountryData summary={summary}/>}
            
        </div>
    )
}

export default GlobalData;