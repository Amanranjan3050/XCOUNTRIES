import { useEffect, useState } from 'react';
import './App.css';
import Countries from './Components/countries';
import axios from 'axios';

function App() {
  const [data,setData] = useState([]);
  
  useEffect(()=>{
    const CountriesgetData = async()=>{
      try{
        const resp = await axios.get("https://xcountries-backend.azurewebsites.net/all");
        setData(resp.data);
      }catch(err){
        console.error("Error fetching data: ",err);
      }
    }
    CountriesgetData();
  },[]);
  return (
    <div className='wrapper'>
      {data.map((country)=>{
        return(
          <div key={`${country.name}-${country.abbr}`}>
            <Countries name={country.name} flag={country.flag} abbr={country.abbr}/>
          </div>
        )
      })}
    </div>
  );
}

export default App;