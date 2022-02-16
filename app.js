//Funciones CallBack

function Sumar(num1, num2, callBack){
    let resultado = num1+num2;
    callBack(resultado);
}

function Resultado(res){
    console.log(res);
}

Sumar(5,8, Resultado);

//set time out

setTimeout(() =>console.log("Esto se va a ejecutar despues de 3 segundos"), 3000);