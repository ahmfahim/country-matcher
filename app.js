const getSeacrh = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => {
            displayCountries(data)
            // console.log(data[0].name)
        });
}
const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country'
        const countryInfo = `
            <img src="${country.flag}">
            <h3 class="country-name">${country.name}</h3>
            <p> <strong>CAPITAL</strong>: ${country.capital}</p>
        `
        countryDiv.addEventListener("click", () => {
            displayCountryDetail(country.name);
        })
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    }
}

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.className = "showCountryDetails"
    countryDiv.innerHTML = `
        <img src="${country.flag}">
        <p>Name: ${country.name}</p>
        <p>Capital: ${country.capital}, Population: ${country.population}, Area: ${country.area}, Region: ${country.region}, Languages: ${country.languages[0].name}</p>
    `
}
getSeacrh();