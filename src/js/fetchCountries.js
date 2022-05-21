export default function fetchCountries(name) {

    return fetch('https://restcountries.com/v2/{name}?fields=name.official,capital,population,flag.svg,languages').then(response => {console.log(response.json()) });
}
