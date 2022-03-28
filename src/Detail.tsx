import { count } from 'console';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CountryObject } from './type'
import CountryDetail from './components/CountryDetail'
import { CountryDetails } from './actions';
import { connect } from 'react-redux';

function Detail(props: { CountryDetails: (arg0: string) => void; country: CountryObject[]; }) {
    // const [country, setCountry] = useState<CountryObject[]>([]);
    const { name } = useParams();
    useEffect(() => {

        try {
            // CountryDetails(name!).then(res => {
            //     const dt:CountryObject[] = res.data;
            //     setCountry(dt);
            // });
            props.CountryDetails(name!)

           
            
        } catch (error) {
            console.log('Network Error' + error)
        }
    }, [])

    console.log('countriy', props.country)

    return (
        <div className='container-sm-fluid px-4'>
            <div className='row'>
                <div>
                    {
                        props.country.map((item, index) => {
                            return (
                                <CountryDetail key={index} country={item} />
                            );
                        })}

                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state: { country: any; }) => {
    return{
    country:state.country
}
}

export default connect(mapStateToProps,{CountryDetails})(Detail);