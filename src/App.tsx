import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CountryObject, Name } from './type'
import Country from './components/Country'
import Pagination from './components/Pagination'
import { connect, Omit } from 'react-redux';
import {getCountries} from "./actions"

function App(props: { getCountries: () => void; countries:  any[]; }) {
  // const [countries, setCountries] = useState<CountryObject[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(25);


  // const getCountries = async () => {
  //   setLoading(true);
  //   try {
  //     // const { data } = await axios.get<CountryObject[]>("https://restcountries.com/v3.1/all");
  //     // setCountries(data);
  //     fetch("https://restcountries.com/v3.1/all").then((response) => response.json()).then((res) => {
  //     setCountries(res);

  //     })
      
  //   } catch (error) {
  //     console.log('Ülkeleri alırken hata oluştu');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    // getCountries();
    props.getCountries();
  }, []);
  // console.log('countries', countries);

  const indexOfLastPost = currentPage*postPerPage;
  const indexOfFirstPost= indexOfLastPost-postPerPage;
  const currentPost = props.countries.slice(indexOfFirstPost,indexOfLastPost);


  const paginate = (pageNumber:number) => {
    setCurrentPage(pageNumber);
  }

  return (
    
    <div className='container-fluid'>
      <div className='row'>
        <div className='table-responsive'>
          <table className='table'>
            <thead className='table-dark'>
              <tr>
              <th scope='col'>Flag</th>
              <th scope='col'>Name</th>
              <th scope='col'>Capital</th>
              <th scope='col'>Detail</th>
              </tr>
            </thead>
            <tbody>
            {loading ? <p>Loading...</p> :
              currentPost.map((country: CountryObject, index:React.Key) => {
                return (
                  <Country key={index} country={country} />
                );
              })
              }
              </tbody>
          </table>
        </div>     
        <Pagination postPerPage={postPerPage} totalPost = {props.countries.length } paginate={paginate} />
      </div>
    </div>
  );
}
const mapStateToProps = (state: { countries: any; }) =>{
  return {
    countries:state.countries
  }
}
export default connect(mapStateToProps,{getCountries})(App) ;