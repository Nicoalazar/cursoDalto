//PRIMERAS INTERACCIONES CON EL USUARIO//

let nombre 
nombre = prompt ('Dime tu nombre').toUpperCase() 

alert('Hola ' + (nombre))  


frase = `Te llamas ${nombre} y estas aprendiendo JS <br>`

if (nombre == 'NICO') {
    document.write(frase)
}
else if (nombre == 'PEDRO'){
    document.write('Hola Pedro <br>')
}
else {document.write('Quien te conoce papá? <br>')}

//CREACION Y MANEJO DE ARRAYS//

let pc = {
    nombre: 'DaltoPC',
    procesdaro: 'Intel Core I7',
    ram: '16Gb',
    espacioo: '1TB'
};

let mensaje = `<b>El nombre de mi PC es: <b>`+pc["nombre"]+'</b><br>'

document.write("<br>")

//CICLO WHILE CON BREAK//

let numero0 = 0

while (numero0 < 100){
    numero0++
    document.write(numero0+'<br>')
    if(numero0==10){
        break
    }
}
document.write("<br>")

//CICLO DO WHILE//

let numero1 = 0

do{
    document.write(numero1)
    numero1++
}
while (numero1 < 5)
document.write("<br>")

//CICLO FOR//

for (let i = 0; i <= 6; i++) {
    document.write(i) 
}
document.write("<br>")

//CICLO FOR CON CONTINE PARA SALTEAR//

for (let i = 0; i <= 6; i++) {
    if(i==2){
        continue};
    document.write(i +"<br>") 
}
document.write("<br>")

//FOR IN (posicion) Y FOR OF (valor)//

let animales = ["gato", "perro","ratapaloma"]

for (animal in animales){
    document.write(animal+"<br>")
}
document.write("<br>")
for (animal of animales){
    document.write(animal+"<br>")
}
document.write("<br>")

let array1= ["maria","josefa","roberta"]
let array2= [ "pedro", "marcelo", array1,"mandzukic"]

for (let array of array2){
    document.write(array +"<br>")
}
document.write("<br>")

forRancio: //label de todo el for
for (let array in array2){
    if (array == 2){
        for(let array of array1){
            document.write(array +"<br>")
        } break forRancio //corta todo el for
    } else {
        document.writeA(array2[array]+"<br>")
    }
}
document.write("<br>")