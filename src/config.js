const BASE_URL = 'https://restcountries.com/v3.1/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,population,region,flags,cap';
export const searchCountry = (name) => BASE_URL + 'name/' + name;
export const filterCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');