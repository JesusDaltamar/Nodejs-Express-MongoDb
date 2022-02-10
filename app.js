//Funciones flecha
//Funciones en ES5

const years = [2000, 2005, 2008, 2012];

var edad5 = years.map(function(el){
    return 2019 - el;
})
console.log(edad5);

//funcion en ES6 (TIPO FLECHA)
let edad6 = years.map(el=>{
    return 2019-el;
})
console.log(edad6);
