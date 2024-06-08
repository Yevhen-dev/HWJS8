# HW8 Yevhen Chukharkin
  
Tasks: 

1) Create a list ul with 5 elements li inside.
    * Use querySelector to select:
        + the first element of the list
        + the last element of the list
        + 3 elements of the list
    * Using querySelectorAll
        + all li elements in the list
        + convert the selected elements to an array

2) Create an element on the page that is selected by these selectors
    * let listItems = document.querySelectorAll('ul.nav > li');
    * let listItem = document.querySelectorAll('li:nth-child(2)');

3) Go through the array and fill the table with data from the array

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

    <table>
        <thead>
            <tr>
                <th>
                    title
                </th>
                <th>
                    year
                </th>   
                <th>
                    rating
                </th>                   
            </tr>
        </thead>
    </table>   

4) Create an HTML page with a container to which elements will be added using JavaScript.

    const elementsArray = [
        { tag: 'p', text: 'Елемент 1' },
        { tag: 'div', text: 'Елемент 2' },
        { tag: 'span', text: 'Елемент 3' }
    ];

5) Create a function that takes an object and creates a new element using document.createElement, sets the element's text, and returns it to the container.Loop through the array and apply the created function to each object


Practices add element to web page use JS.
No issue during the working on code.    
