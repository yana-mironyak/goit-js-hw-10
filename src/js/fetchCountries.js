export default function fetchCountries(name) {

    return fetch(`'https://restcountries.com/v3.1/${name}?fields=name.official,capital,population,flag.svg,languages'`)
        .then(response => response.json()).then(data => { console.log(data) });
}
