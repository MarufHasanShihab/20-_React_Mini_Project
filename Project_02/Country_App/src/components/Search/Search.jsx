

const Search = ({searchCountry}) => {
    return (
        <div>
            <input type="text" name="search" id="search" placeholder="Search Your Country" onChange={e=>searchCountry(e.target.value)} />
        </div>
    );
};

export default Search;