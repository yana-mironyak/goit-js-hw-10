export default function getCountryList(countries) {
    return countries.map(country => `<li style='list-style: none; font-size: 15px; line-height: 30px'><img alt = 'country flag' src = ${country.flags.svg} width=40 height=30> ${country.name.official} </li>`)
        .join('');
}