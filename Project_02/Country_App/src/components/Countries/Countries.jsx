import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./style.css"
import Search from '../Search/Search';


const Countries = () => {
    const [contries, setContries] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setContries(data))
    },[])


    const handleRemoveCountry = (name)=>{
        const filterCountries = contries.filter(country => country.name.common !== name);
        setContries(filterCountries)
    }

    const handleSearchCountry = (searchValue)=>{
        const value = searchValue.toLowerCase();
        const newContries = contries.filter(country => {
            const countryNames = country.name.common.toLowerCase();
            return countryNames.startsWith(value)
        });
        setContries(newContries)
    }

   
    
    return (
        <div className="main-container">
            <h1>Country App</h1>
            <Search searchCountry={handleSearchCountry}/>
            <div className="contries-container">
                {
                    contries?.map(country => <Country key={country.name.common} country={country} removeCountry={handleRemoveCountry}/>)
                }
            </div>
        </div>
    );
};

export default Countries;