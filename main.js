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
// depends on selection , I want to render,
// the selection on #roast_id
//information about the selected roasted on #about_roast
// and list of coffees on #roast_list

//each button.
let light = $('#light')
let medium = $('#medium')
let dark = $('#dark')

//render div
let roast = $('#roast')


function renderCoffee(coffee){
    let roast_list = `<li>${coffee.name}</li>`
    roast_list += roast_list;
    $('#roast_list').append(roast_list)
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
function coffeeList(roast){
    let selectedCoffees = [];
    coffees.forEach(function(coffee){
        if(coffee.roast === roast){
            selectedCoffees.push(coffee)
        }
    })
    return renderCoffeeList(selectedCoffees);
}
