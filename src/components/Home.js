import React, { useState, useEffect } from 'react';
import CountryData from './CountryData';

const Home = ({ summary, data }) => {

    const [patientData, setPatientData] = useState([]);
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [pinoysOnly, setPinoysOnly] = useState(false);

    const today = new Date();

    useEffect(() => {
        setPatientData(data);
    }, [data])

    const handleGender = (e) => {
        setGender(e.target.value);
    }

    const handleStatus = (e) => {
        setStatus(e.target.value);  
    }

    const handleNationality = () => {
        pinoysOnly === false ? setPinoysOnly(true) : setPinoysOnly(false);
    }

    useEffect(() => {
        setPatientData(data.filter(patient => { 
            if (pinoysOnly) {
                return (patient.gender === gender || !gender) && (patient.status === status || !status) && patient.nationality === 'Filipino'
            } else {
                return (patient.gender === gender || !gender) && (patient.status === status || !status)
            }
        }))
    }, [gender, status, pinoysOnly])
    
    return (
        <div id='local-data'>
            <div id="ph-summary">
                <h1>Philippines</h1>
                <p>As of {today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()}</p>
                <CountryData summary={summary}/>
            </div>

            <div id="patient-container">
                <h2 id='individual-cases-title'>Individual Cases Information</h2>

                <div id="patient-container-header">
                    <div id='cases-guide'>
                        <h3 style={{marginBottom: '10px'}}>Patient Status Guide</h3>
                        <p style={{color: 'orange'}}>Orange: Admitted</p>
                        <p style={{color: 'green'}}>Green: Recovered</p> 
                        <p style={{color: 'red'}}>Red: Died</p> 
                        <p>Black: To Be Announced</p> 
                    </div>

                    <div id="filters">
                        <h3 style={{fontWeight: 'bold', marginBottom: '10px'}}>Filters</h3>
                        
                        <p className='radio-label'>Gender</p>
                        <form onChange={handleGender}>
                            <input type="radio" name="gender" id="A" value=""/>
                            <label for="A">All</label>

                            <input type="radio" name="gender" id="M" value="M"/>
                            <label for="M">Male</label>

                            <input type="radio" name="gender" id="F" value="F"/>
                            <label for="F">Female</label>
                        </form>

                        <p className='radio-label'>Patient Status</p>
                        <form onChange={handleStatus}>
                            <input type="radio" name="status" id="All" value=""/>
                            <label for="All">All</label>

                            <input type="radio" name="status" id="Ad" value="Admitted"/>
                            <label for="Ad">Admitted</label>

                            <input type="radio" name="status" id="D" value="Died"/>
                            <label for="D">Died</label>

                            <input type="radio" name="status" id="R" value="Recovered"/>
                            <label for="R">Recovered</label>
                        </form>

                        <input type="checkbox" name="nationality" id="nationality" value="nationality" onChange={handleNationality}/>
                        <label for="nationality">Filipinos Only</label>
                    </div>
                
                </div>

                <div id='patients'>
                    {patientData.map(patient => { 
                        const style = patient.status === 'Died' ? 
                            'red' : patient.status === 'Recovered' ?
                            'green' : patient.status === 'Admitted' ?
                            'orange' : 'black'                        

                        return (
                            <div className='patients' style={{border: `2px solid ${style}`}}>
                                <h3 style={{color: style}}>Case #{patient.case_no}</h3>
                                <p>Date Confirmed: {patient.date}</p>
                                <p>Age: {patient.age}</p>
                                <p>Gender: {patient.gender}</p>
                                <p>Nationality: {patient.nationality}</p>
                                <p>Hospital: {patient.hospital_admitted_to}</p>
                                <p>Recently Travelled Abroad?: {patient.had_recent_travel_history_abroad}</p>
                                <p>Additional Info: {patient.other_information}</p>   
                            </div>
                        )}
                    )}
                </div>
                
            </div>
            
        </div>
    )
}

export default Home;