//CREAR CALCULADORA
class Calculadora {
    constructor(){
    }
sumar (){
    let a= parseInt(prompt("Primer numero para sumar: "))
    let b= parseInt(prompt("Segundo numero para sumar: "))
    return a + b
}

restar (){
    let a= parseInt(prompt("Primer numero para restar: "))
    let b= parseInt(prompt("Segundo numero para restar: "))
    return a - b
}

dividir (){
    let a= parseInt(prompt("Dividendo: "))
    let b= parseInt(prompt("Divisor: "))
    return a / b
}

multiplicar (){
    let a= parseInt(prompt("Primer numero para multiplicar: "))
    let b= parseInt(prompt("Segundo numero para multiplicar: "))
    return a * b
}
exponente (){
    let a = parseInt(prompt("Ingrese la base de la potencia: "))
    let b = parseInt(prompt("Ingrese el exponente: "))
    return a**b
}
raizCuadrada(){
    let a = parseInt(prompt("Ingrese el numero a calcular: "))
    return Math.sqrt(a)
}
raizCubica(){
    let a = parseInt(prompt("Ingrese el numero a calcular: "))
    return Math.cbrt(a)
}
}
const calculadora = new Calculadora();
alert("¿Que operacion desear realizar?")

let operacion= prompt(`1: suma, 2: resta, 3: division, 4: multiplicacion, 5: elevar al cuadrado, 
6: raiz cuadrada, 7: raiz cubica`)

if(operacion==1){
    alert("Resultado: " + calculadora.sumar())    
}else if (operacion == 2 ){
    alert("Resultado: " + calculadora.restar())  
}else if (operacion == 3 ){
    let resultado =  calculadora.dividir()
    if(resultado==Infinity){
        alert("No es posible dividir en cero")
    }else if(isNaN(resultado)){
        alert("La division 0/0 no está definida")
    }
    else{
        alert("Resultado: " +resultado)
    }  
}else if (operacion == 4 ){
    alert("Resultado: " + calculadora.multiplicar())  
}else if (operacion == 5){
    alert("Resultado: " + calculadora.exponente())
}else if (operacion == 6){
    alert("Resultado: "+calculadora.raizCuadrada())
}else if (operacion == 7){
    alert("Resultado: "+calculadora.raizCubica())
}
else {
    alert("Ingresó una opcion invalida, reinicie")  
}