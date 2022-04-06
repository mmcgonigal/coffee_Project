'use strict'

let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
// depends on selection , I want to render list of coffee,
// on #roast
//information about the selected roasted on each .card


function renderCoffee(coffee){
    let roast_list = '<li><span>' + coffee.name +'</span>' + "";
   roast_list += '<span>' + coffee.roast +'</span></li>';
    return roast_list;
}


//this is function for making a list from new array from below function. 
function renderCoffeeList(coffees){
    let list = '';
    for(let i = 0; i <coffees.length; i++){
        list += renderCoffee(coffees[i])

    }
    return list;
}

// among array of coffees, select only certain roasted coffees and make new array with them 
function coffeeList(e){
    e.preventDefault();
    let selectedCoffees = [];
    let selectedRoast = roastSelection.value;
    coffees.forEach(function(coffee){
        if(coffee.roast === selectedRoast || coffee.all === selectedRoast){
            selectedCoffees.push(coffee)
        }
    })
    console.log(selectedRoast)
    displayRoast.innerHTML()=renderCoffeeList(selectedCoffees);
}

let roastSelection = document.querySelector('#roast-selection')
//render div
let displayRoast = $('#roast')
