import React, { FunctionComponent } from 'react'
import { CountryObject, } from '../type'
import { Button, Image, Table, } from 'react-bootstrap'
import {CountryDetails} from '../Util'
import { useNavigate } from 'react-router-dom'
interface ICountryProps {
    country: CountryObject
}

const Country: FunctionComponent<ICountryProps> = (props) => {
    const { country } = props;
    const navigate = useNavigate();
    function fncGotoDetail(name:string){
        navigate("detail/"+name)
        // window.open("/detail/"+name);
    }
    return (
        <>
        
                <tr>
                    <td>                   
                        <Image src={country.flags.png} className='img-fluid' />
                    </td>
                    <td>
                        <p>{country.name.official}</p>
                    </td>
                    <td>
                        <p>{country.capital}</p>
                    </td>
                    <td>
                        <button onClick={() =>fncGotoDetail(country.name.official)} type='button' className='btn btn-outline-danger'>Detail</button>
                    </td>
                </tr>
        </>
    )
}
export default Country;