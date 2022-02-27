const countries = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then (res => res.json())
    .then (data => displayCountries(data))
}
countries()
const displayCountries = countries=>{
    const countriesDiv = document.getElementById("countries");
    countries.forEach(country=>{
        // console.log(country);
        const div = document.createElement("div");
        div.classList.add('country');
        div.innerHTML = `
        <h3> Name: ${country.name.common}</h3>
        <p> Official Name: ${country.name.official}</p>
        <button onclick="loadCuntryByName('${country.name.common}')">Details</button>
        `
        
        // const h3 = document.createElement("h3");
        // h3.innerText = country.name.common;
        // div.appendChild(h3)
        // const p = document.createElement("p");
        // p.innerText = country.name.official;
        // div.appendChild(p)
        countriesDiv.appendChild(div);
    })
}
const loadCuntryByName = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
       // .then(data => console.log(data[0]));
        .then(data => displayCountryDetails(data[0]));
}
const displayCountryDetails = country =>{
    const countryDev = document.getElementById("country-details")
    countryDev.innerHTML = `
    <h4>Country Name: ${country.name.common}</h4>
    <h4>Capital: ${country.capital}</h4>
    <p>Official Name: ${country.name.official}</p>
    <img src="${country.flags.png}">
    `
}
