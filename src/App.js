import React, { useState, useEffect } from 'react';
import './App.css';
import GlobalData from './components/GlobalData';
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  const [countries, setCountries] = useState([]);
  const [global, setGlobal] = useState({});
  const [PHSummary, setPHSummary] = useState({});
  const [PHData, setPHData] = useState([]);

  useEffect(() => {
    fetch('https://corona.lmao.ninja/countries').then(res => res.json()).then(data => {
      setCountries(data.map(cntry => cntry.country).sort());
      setPHSummary(data[data.findIndex(obj => obj.country === 'Philippines')]);
    })

    fetch('https://corona.lmao.ninja/all').then(res => res.json()).then(data => {
      setGlobal(data);
    })

    fetch('https://coronavirus-ph-api.now.sh/cases').then(res => res.json()).then(data => {
      setPHData(data);
    })

  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact render={() => <Home summary={PHSummary} data={PHData}/>}/>
          <Route path='/global' exact render={() => <GlobalData countries={countries} global={global}/>}/>
          <Route path='/about' exact component={About}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
