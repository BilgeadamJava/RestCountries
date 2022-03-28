import React, { FunctionComponent, useEffect, useState } from 'react'
import { CountryObject, Currencies, Languages, } from '../type'
import { useNavigate } from 'react-router-dom'

interface IntCountryObject {
  country: CountryObject
}

const CountryDetails: FunctionComponent<IntCountryObject> = (props) => {
  const { country } = props;
  const navigate = useNavigate();

  // const [language, setLanguage] = useState()
  // let k:keyof Languages
  // for(k in country.languages){
  //      const lang = country.languages.[]
  //     setLanguage(lang);
  // }
  function fncGotoHome(){
    navigate("/");
  
}



  return (
    <>
    <div className='container-fluid'>
    <button onClick={() => fncGotoHome()} style={{width:"5%"}} className='btn btn-danger'>Back</button>
      <div className='card card' style={{ marginTop: "20px" }}>
       <div className='row'>
        
        <div className='col-4 '>
         <img style={{ padding:'5px',height:'100%', display: 'flex',alignItems:'flex-start',justifyContent:' space-between' }} src={country.flags.png}/>
        </div>
        <div className='col-4'>
        <h3>{country.name.official}</h3>
        <p>Capital : {country.capital}</p>
        <p>Population : {country.population}</p>
        <p>Continent : {country.continents.map((item,index) => {
          return (
          <span key={index}>{item},</span>)
        })}</p>
        </div>
        <div className='col-4'>
        <p style={{marginTop:'10%'}}>Country Borders : {country.borders ? country.borders.map((item,index) => {
          return (
          <span key={index}>{item},</span>)
        }):<span>No borders</span>}</p>
        <p>Timezones : {country.timezones.map((item,index) => {
          return (
          <span key={index}>{item},</span>)
        })}</p>
        <p>İndependent : {country.independent ? <span>Independent</span>:<span>Not Independent</span>}</p>
        </div>
        </div>
      </div>
      {/* <div>
            <iframe style={{width:'600',height:'400'}} src={country.maps.openStreetMaps}></iframe>
      </div> */}
      </div>
    </>
  )
}
export default CountryDetails;