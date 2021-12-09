const countries = require('./countries.json');

/** Get only the name of the country given his iso3 code.
 * For example: given the isoCode 'ARG'
 * The response should be: 'Argentina'
 * @param  {array} isoCode
 * @returns {array}
 */
function getCountryNameByIso3(isoCode){
    return countries.find(item => item.iso3 === isoCode).name;
}

/**
 * Get country summary given the ISO3 code. 
 * It has to be a new object containing only the following data:
 * {
 *  name: ,
 *  iso3: ,
 *  iso2: ,
 *  phone_code,
 *  capital: ,
 *  currency: ,
 *  tld: ,
 *  region: ,
 *  emoji: ,
 * }
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountrySummary(isoCode){
    const ciudad = countries.find(item => item.iso3 === isoCode);
    const city = {
         name: ciudad.name ,
         iso3: ciudad.iso3,
         iso2: ciudad.iso2,
         phone_code: ciudad.phone_code,
         capital: ciudad.capital,
         currency: ciudad.currency,
         tld: ciudad.tld,
         region: ciudad.region,
         emoji: ciudad.emoji,
        };
    return city;
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryNameByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountrySummary('ARG'),
        '\n');

}

main();