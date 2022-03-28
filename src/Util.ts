import axios from "axios";
import { CountryObject } from "./type";




export const CountryDetails = async (name:string) => {
    const url:string = "https://restcountries.com/v3.1/name/"+name;
    return await axios.get(url);
    // fetch(url).then(response => response.json()).then((res:CountryObject[]) => {
    //         console.log('res', res)
    //     return res;
    // })
}