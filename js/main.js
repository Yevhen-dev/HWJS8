// Create a list ul with 5 elements li inside.
// Use querySelector to select:
// the first element of the list
let firstLi = document.querySelector( ".first__list" ).firstElementChild;
console.log( firstLi );
// the last element of the list
let lastLi = document.querySelector( ".first__list" ).lastElementChild;
console.log( lastLi );
//3 elements of the list
let threeElementLi = [];
let thirdLi = document.querySelector( ".first__list" ).children[2];
threeElementLi.push( thirdLi, thirdLi.previousElementSibling, thirdLi.nextElementSibling );
console.log( threeElementLi );
// Using querySelectorAll
// all li elements in the list
// convert the selected elements to an array
let allLi = document.querySelectorAll( ".first__list__item" );
console.log( allLi );
console.log( [...allLi] );
// Create an element on the page that is selected by these selectors
let listItems = document.querySelectorAll('ul.nav > li');
let listItem = document.querySelectorAll('li:nth-child(2)');
console.log(listItems);
console.log(listItem);
// Go through the array and fill the table with data from the array
const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];

let table = document.querySelector( "#table" );
booksArray.forEach( (item, index) => {
    let tr = document.createElement( "tr" );
    table.appendChild( tr );
    let arr = Object.values( item );
    for( let value of arr ) {
        let td = document.createElement( "td" );
        td.innerHTML = value;
        tr.appendChild( td );
    }
} );


// Create an HTML page with a container to which elements will be added using JavaScript.
let div = document.createElement( "div" ) ;
div.classList.add( "container" );
table.after( div );
const elementsArray = [
    { tag: 'p', text: 'Елемент 1' },
    { tag: 'div', text: 'Елемент 2' },
    { tag: 'span', text: 'Елемент 3' }
];

for( let element of elementsArray ) {
    let item = document.createElement( element.tag );
    item.innerHTML = element.text;
    div.appendChild( item );
}


// Create a function that takes an object and creates a new element using document.createElement, sets the element's text, and returns it to the container.Loop through the array and apply the created function to each object
let card = [
    { tag: 'h3', text: 'Card title' },
    { tag: 'div', text: 'Card discription' },
    { tag: 'button', text: 'Button' }
];

function createElem( obj ) {
    let el = document.createElement( obj.tag )
    if( obj.text ) {
        el.innerHTML = obj.text;
    }
    return el;
}

let container = document.querySelector( ".card-list__container" );

for( let obj of card ) {
    container.appendChild( createElem( obj ) );
}

