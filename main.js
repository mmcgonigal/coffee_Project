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

let l_detail = '<p>Light Roast</p> + <ul><li>Roasting time 9 min</li><li>Light brown in color</li><li>High Acidity</li><li>Fruity smell</li></ul>'

let m_detail = '<p>Medium Roast</p> + <ul><li>Roasting time 16 min</li><li>Medium brown in color</li><li>Balanced flavor & acidity</li><li>slightly sweet taste</li></ul>'

let d_detail = '<p>Dark Roast</p> + <ul><li>Roasting time 30 min</li><li>Rich, darker in color</li><li>Oily surface</li><li>Bitter, smoky taste</li></ul>'

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

// function clickHandler(){
//     if(e == light){
//         roast.append(l_detail)
//         coffeeList(e)
//     }else if (e == medium){
//         roast.append(m_detail)
//         coffeeList(e)
//     }else if (e == dark){
//         roast.append(d_detail)
//         coffeeList(e)
//     }
// }
$('#light').click(function(){
    roast.append(l_detail)
    coffeeList(light)
})
$('#medium').click(function(){
    roast.append(m_detail)
    coffeeList(medium)
})
$('#dark').click(function(){
    roast.append(d_detail)
    coffeeList(dark)
})