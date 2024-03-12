//CREAR CALCULADORA

const sumar = ()=>{
    let a= parseInt(prompt("Primer numero para sumar: "))
    let b= parseInt(prompt("Segundo numero para sumar: "))
    return a + b
}

const restar = ()=>{
    let a= parseInt(prompt("Primer numero para restar: "))
    let b= parseInt(prompt("Segundo numero para restar: "))
    return a - b
}

const dividir = ()=>{
    let a= parseInt(prompt("Dividendo: "))
    let b= parseInt(prompt("Divisor: "))
    return a / b
}

const multiplicar = ()=>{
    let a= parseInt(prompt("Primer numero para multiplicar: "))
    let b= parseInt(prompt("Segundo numero para multiplicar: "))
    return a * b
}

alert("¿Que operacion desear realizar?")

let operacion= prompt("1: suma, 2: resta, 3: division, 4: multiplicacion")

if(operacion==1){
    alert("Resultado: " +sumar())    
}else if (operacion == 2 ){
    alert("Resultado: " +restar())  
}else if (operacion == 3 ){
    let resultado = dividir()
    if(resultado==Infinity){
        alert("No es posible dividir en cero")
    }else if(isNaN(resultado)){
        alert("La division 0/0 no está definida")
    }
    else{
        alert("Resultado: " +resultado)
    }  
}else if (operacion == 4 ){
    alert("Resultado: " +multiplicar())  
}else {
    alert("Ingresó una opcion invalida, reinicie")  
}


