'use strict'

let tbody = document.querySelector('#roast')
let roast_id = document.querySelector('#roast_id')
let about_roast =document.querySelector('#about_roast')
let roast_list = document.querySelector('#roast_list')
let selectedRoast = document.querySelector('#roast-selection').value


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

console.log(coffees);

//depends on which roast, I want to render information about the roasttype
function aboutRoast(){
    selectedRoast ;
    console.log(selectedRoast)
    if(selectedRoast === 'light'){
        document.querySelector('#about_roast').innerHTML = `<li>Roasting time 9 minutes.</li>`+`<li>Light brown bean color.</li>` + `<li>High acidity.</li>` + `<li> Fruity smell.</li>`
       // return document.querySelector('#about_roast').innerHTML
    }else if(selectedRoast === 'medium') {document.querySelector('#about_roast').innerHTML = `<li>Roasting time 16 minutes.</li>` + `<li>Medium brown bean color.</li>` + `<li>Balanced flavor and acidity.</li>` + `<li>slightly sweet taste.</li>`
      //  return document.querySelector('#about_roast').innerHTML
    } else if(selelctedRoast ==='dark'){ document.querySelector('#about_roast').innerHTML = `<li>Roasting time 30 minutes.</li>`+`<li>rich and darker bean color.</li>` + `<li>Oily surface.</li>` + `<li> Bitter, smokey taste.</li>`
       // return document.querySelector('#about_roast').innerHTML
    }
}

// and this will render in div id = roast
function renderCoffee(coffee) {
    //aboutRoast(coffee.roast)
    console.log(coffee.roast)
    let html =`<div id="roast_id"> ${coffee.roast} </div>
        <div><ul id="about_roast"> ${aboutRoast(selectedRoast)} </ul></div>
        <div><ul id="roast_list">  ${coffee.name } </ul></div>`
    return html
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
 console.log(selectedRoast)
    var roastGroup = []
    coffees.forEach(function(coffee){
        if(coffee.roast === selectedRoast){
            roastGroup.push(coffee)
        }
    })
    roast_list.innerHTML = renderCoffees(roastGroup)

}


//let selectionEvent = document.querySelector('#roast-selection').value
//selectionEvent.addEventListener('change',(e)=>{selectRoast(selectedRoast)})

let selectionEvent = document.getElementById("roast-seleciton");
let selectionEvent_value = selectionEvent.options[selectionEvent.selectedIndex].value;
console.log(selectionEvent_value)
console.log(selectionEvent)
selecitonEvent.addEventListener('click',()=>{
    
}) 

// event listener to listen to event continuesly .



