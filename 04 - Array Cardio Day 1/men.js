/**
 * Schnipsel DOM geladen:
 document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");
});
 */

document.addEventListener("DOMContentLoaded", event => {

    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    let fifteen = inventors.filter(inventor => {
        if(inventor.year >= 1500 && inventor.year <1600){
            return true; // wert wird behalten
        }
    })
    console.table (fifteen)

    // Array.prototype.map() -> gibt immer gleichviele zurück wie im Original, während filter nur ein Teil davon ist
    // 2. Give us an array of the inventors' first and last names
    let names = inventors.map(inventor => inventor.first + ' ' + inventor.last)
    console.table (names)

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    /* besser ist die Kurzversion von:
     let ages = inventors.sort((firstPerson, secondPerson ) => {
        if (firstPerson.year > secondPerson.year){
            return 1;
        }else{
            return -1;
        }
    })
    */
    let ages = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
    console.table(ages)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    let totalYears = inventors.reduce((total, inventor)=> {
        return total + (inventor.passed - inventor.year)
    },0) //das ",0" wird benötigt, sonst gibts ein seltsames Resultat
    console.log (totalYears)


    // 5. Sort the inventors by years lived
    let oldest = inventors.sort(function (a, b) {
        let firstPerson = a.passed - a.year;
        let secondPerson = b.passed - b.year;
        return secondPerson >firstPerson ? -1 : 1;
        /**
         * lange Version:
         * if (secondPerson > firstPerson){
         * return -1;
         * }else{
         * return 1;}
         */
    })
    console.table (oldest)

    /*
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris -> Seite aufrufen, DOM Element finden
    let category = document.querySelector('.mw-category');
    // let links = category.querySelectorAll('a');
    // -> ergibt eine Node-List für Map wird jedoch ein Array benötigt, statt [... etwas] würde auch array.from(etwas) funktionieren:
    let links = [...category.querySelectorAll('a')];

    let de = links
        .map(link => link.textContent)
        .filter(streetName => streetName.includes('de'))
    */
    // 7. sort Exercise
    // Sort the people alphabetically by last name
    let lastName = people.sort((a,b)=> a > b ? 1 : -1)
    console.log (lastName)

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    let transportation = data.reduce((obj, item) => {
        if(!obj[item]){
            obj[item] = 0;
        }
        obj[item]++;
        return obj;

    },{}) //{} in diesem leeren Teil kann man hart-codiert alle einzeln aufzählen
    console.log (transportation)
});