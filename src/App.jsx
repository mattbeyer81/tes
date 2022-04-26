import {useEffect, useState} from 'react'
import reactLogo from './images/react-logo.svg'
import tesLogo from './images/tes-logo.svg'
import nodeLogo from './images/nodejs-logo.svg'
import './App.css'

function App() {
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState([])
    const [universities, setUniversities] = useState([])

    const getCountries = async () => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(countries => {
                setCountries(countries);
            });
    };

    const getUniversities = async query => {
        fetch(`http://universities.hipolabs.com/search?country=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(universities => setUniversities(universities));
    };

    useEffect(() => {
        if (countries.length === 0) {
            getCountries();
        }
    }, [countries]);

    const search = event => {
        event.preventDefault();
        getUniversities(country);
    };

    const onCountryChange = event => setCountry(event.target.value);

    return (
        <div className="App">
            <header className="App-header container">
                <img src={tesLogo} className="App-logo" alt="Tes logo"/>
                <img src={reactLogo} className="App-logo-react" alt="React logo"/>
                <img src={nodeLogo} className="App-logo-nodejs" alt="NodeJs logo"/>
            </header>
            <section>
                <div className="input-group mb-3">
                    <input className="form-control"
                           list="datalistOptions"
                           id="exampleDataList"
                           onChange={onCountryChange}
                           placeholder="Type to search..."/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                            onClick={search}>Search
                    </button>

                    <datalist id="datalistOptions">
                        {countries.map(countryItem => (<option
                            value={countryItem.name.common}
                            selected={countryItem.name.common === country ? 'selected' : ''}>
                            {countryItem.name.common}
                        </option>))}
                    </datalist>
                </div>

                <p>Number of countries: {countries.length}</p>
                <p>Number of universities in <strong>{country}</strong>: {universities.length}</p>
            </section>
            <section>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Web Page</th>
                        <th scope="col">Options</th>
                    </tr>
                    </thead>
                    <tbody>
                    {universities.map(({name, web_pages: [url]}) => (
                        <tr>
                            <td>{name}</td>
                            <td><a href={url}>{url}</a></td>
                            <td>Add review</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default App
