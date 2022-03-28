import axios from "axios";

export const getCountries = () => (dispatch: (arg0: { type: string; payload: any }) => void) => {
    fetch("https://restcountries.com/v3.1/all").then((response) => response.json()).then((res) => {
        dispatch({ type: 'GET_COUNTRIES', payload: res })
    })
}

export const CountryDetails = (name: string) =>async (dispatch: (arg0: { type: string; payload: any }) => void)=> {
    const url: string = "https://restcountries.com/v3.1/name/" + name;
    // const res =await axios.get(url);
    

    fetch(url).then(response => response.json()).then((res) => {
        dispatch({ type: 'GET_COUNTRY', payload: res })
    })
}



