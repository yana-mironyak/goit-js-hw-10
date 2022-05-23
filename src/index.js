import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import getInfoNote from './js/getInfoNote';
import getCountryList from './js/getCountryList';
import getCountryInfo from './js/getCountryInfo';

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'), 
    container: document.querySelector('.country-info'),
    list: document.querySelector('.country-list'),
} 

refs.input.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));

function searchCountries(evt) {
    const countryName = evt.target.value.trim();
    refs.list.innerHTML = '';
    refs.container.innerHTML = '';

    if (countryName === '') {
        return
    }
    
    fetchCountries(countryName)
        .then(country => {
            if (country.length > 10) {
                getInfoNote();
            } if (country.length >= 2 && country.length <= 10) {
                refs.list.innerHTML = getCountryList(country);   
            } if (country.length === 1) {
                refs.container.innerHTML = getCountryInfo(country);
            }
        }).catch(error => Notiflix.Notify.failure('Oops, there is no country with that name'));
}