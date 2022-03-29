'use strict'

let tbody = document.querySelector('#roast')

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

//depends on which roast, I want to render information about the roasttype
function aboutRoast(roast){
    if(roast === 'light'){
        document.querySelector('#about_roast').innerHTML = `<li>Roasting time 9 minutes.</li>`+`<li>Light brown bean color.</li>` + `<li>High acidity.</li>` + `<li> Fruity smell.</li>`
    }else if(roast === 'medium') {
        document.querySelector('#about_roast').innerHTML = `<li>Roasting time 16 minutes.</li>` + `<li>Medium brown bean color.</li>` + `<li>Balanced flavor and acidity.</li>` + `<li> slightly sweet taste.</li>`
    } else if(roast ==='dark'){ document.querySelector('#about_roast').innerHTML = `<li>Roasting time 30 minutes.</li>`+`<li>rich and darker bean color.</li>` + `<li>Oily surface.</li>` + `<li> Bitter, smokey taste.</li>`
    }

}

// and this will render in div id = roast
function renderCoffee(coffee) {
    let html =` <div id ="roast_id">`+ coffee.roast + `</div>`
        `<div><ul id="about_roast">` + aboutRoast(coffee.roast) + `</ul></div>`
        `<div><ul id="roast_list">` + coffee.name + `</ul></div>`
}

function renderCoffees(coffees) {
    let html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// grouping same roast type and coffees depends on choice of #roast-selection.
function selectRoast(selectedRoast){
    selectedRoast = document.querySelector('#roast-selection').value
    selectedRoast.preventDefault(); // don't submit the form, we just want to update the data
    var roastGroup = []
    coffees.forEach(function(coffee){
        if(coffee.roast === selectedRoast){
            roastGroup.push(coffee)
        }
    })
    tbody.innerHTML = renderCoffees(roastGroup)

}





let selectionEvent = document.getElementById('#roast-selection')
selectionEvent.addEventListener('click',selectRoast)
