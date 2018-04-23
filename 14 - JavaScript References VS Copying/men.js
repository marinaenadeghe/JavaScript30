/**
 * Schnipsel DOM geladen:
 document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM fully loaded and parsed");
});
 */


document.addEventListener("DOMContentLoaded", event => {

    // start with strings, numbers and booleans
    // siehe finished

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    let team = players // ist eine Reference


    // You might think we can just do something like this:
    team[3]= 'Lex'
    console.log(players, team) // da eine reference wird auch players verändert - ist also anders als obiges Beispiel

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!

    // one way

    // or create a new array and concat the old one in

    // or use the new ES6 Spread

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
        name: 'Wes Bos',
        age: 80
    };

    // and think we make a copy:

    // how do we take a copy instead?

    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method,
    // but you should think twice before using it.

    console.log("JSON.parse(JSON.stringify) -> macht einen String und dann wieder ein Objekt, so kann man auch eine Kopie machen - Performance?")
});
