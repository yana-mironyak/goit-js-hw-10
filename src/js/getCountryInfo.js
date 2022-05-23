export default function getCountryInfo(countries) {
    return countries.map((country => {
        const languages = Object.values(country.languages);
        return `<p style='font-size: 20px; font-weight: bold;'><img alt = 'country flag' src = ${country.flags.svg} width=40 height=30> ${country.name.official} </p>
                <p><span style='font-size: 15px; font-weight: bold;'>Capital:</span> ${country.capital}</p>
                <p><span style='font-size: 15px; font-weight: bold;'>Population:</span> ${country.population}</p>
                <p><span style='font-size: 15px; font-weight: bold;'>Languages:</span> ${languages}</p>`
    })).join('');
}