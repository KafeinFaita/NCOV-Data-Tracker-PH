import React, { useState, useEffect } from 'react';
import CountryData from './CountryData';
import LazyLoad from 'react-lazyload';

const Home = ({ summary, data }) => {

    const [patientData, setPatientData] = useState([]);
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        setPatientData(data)
    }, [data])

    const handleGender = (e) => {
        setGender(e.target.value);
    }

    const handleStatus = (e) => {
        setStatus(e.target.value);  
    }

    useEffect(() => {
        setPatientData(data.filter(patient => (patient.gender === gender || !gender) && (patient.status === status || !status)))
    }, [gender, status])

    console.log(data)
    
    return (
        <div id='local-data'>
            <h1>Philippines: Quick Summary</h1>
            <CountryData summary={summary}/>

            <div id="patient-container">
                <h2 id='individual-cases-title'>Individual Cases Information</h2>

                <h3 style={{fontWeight: 'bold', marginBottom: '10px'}}>Filters</h3>
                
                <p className='radio-label'>Gender:</p>
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
                    <label for="A">Admitted</label>
                    <input type="radio" name="status" id="D" value="Died"/>
                    <label for="D">Died</label>
                    <input type="radio" name="status" id="R" value="Recovered"/>
                    <label for="R">Recovered</label>
                </form>

                {patientData.map(patient => <LazyLoad placeholder={<p>Loading, please wait</p>}>
                    <div className='patients'>
                        <h3>Case #{patient.case_no}</h3>
                        <p>Date Diagnosed: {patient.date}</p>
                        <p>Age: {patient.age}</p>
                        <p>Gender: {patient.gender}</p>
                        <p>Nationality: {patient.nationality}</p>
                        <p>Hospital: {patient.hospital_admitted_to}</p>
                        <p>Recently Travelled Abroad?: {patient.had_recent_travel_history_abroad}</p>
                        <p>Status: {patient.status}</p>
                        <p>Additional Info: {patient.other_information}</p>

                    </div>
                </LazyLoad>)}
            </div>
            
        </div>
    )
}

export default Home;