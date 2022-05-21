import debounce from 'lodash.debounce';
import './css/styles.css';
import fetchCountries from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');

inputRef.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));

function searchCountries(evt) {
    const countryName = evt.target.value;
    console.log(countryName);

    fetchCountries(countryName);
}


