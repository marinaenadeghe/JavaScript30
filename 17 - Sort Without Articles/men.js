let bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function titleComparator(a, b) {
    let articles = ['a', 'an', 'the'],
        re = new RegExp('^(?:(' + articles.join('|') + ') )(.*)$'), // e.g. /^(?:(foo|bar) )(.*)$/
        replacor = function ($0, $1, $2) {
            return $2 + ', ' + $1;
        };
    a = a.toLowerCase().replace(re, replacor);
    b = b.toLowerCase().replace(re, replacor);
    return a === b ? 0 : a < b ? -1 : 1;
}


let sortedBands = bands.slice().sort(titleComparator); // note slice
// ["The Beginning", "An Everlasting Tale", "I go in the middle", "A Wonderful Life"]

console.log(sortedBands);

document.querySelector('#bands').innerHTML =
    sortedBands
        .map(band => `<li>${band}</li>`) //über jeden Eintrag loopen und einfügen
        .join('');                      // alle zusammenfügen aber ohne , (sonst wäre wie toString)