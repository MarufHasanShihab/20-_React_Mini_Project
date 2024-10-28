import "./style.css"
const Country = ({country, removeCountry}) => {
     const { name, flags} = country || {}
    return (
        <div className="country-card">
            <img src={flags.png} alt="" />
            <div className="country-card-content">
            <h1>{name.common}</h1>
            <button onClick={()=>removeCountry(name.common)}>Remove Country</button>
            </div>
        </div>
    );
};

export default Country;