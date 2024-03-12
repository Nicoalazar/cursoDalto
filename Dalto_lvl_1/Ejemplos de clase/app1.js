//FUNCION SIMPLE//
function suma(num1,num2){
    return document.write(num1 + num2)
}
suma(20,24)

document.write("<br>")
//FUNCION INTEGRADA//
function saludar(nombre){
    return document.write(`¡Hola ${nombre}! ¿Como estas?<br>`)
}

saludar(prompt("¿Como te llamas?"))
//FUNCION FLECHA// Simplifica todo
const saludo= (nombre)=>document.write(`¡Hola ${nombre}! ¿Como estas loco?<br>`);


saludo(prompt("¿Como te llamas?"))

//PROGRAMACION ORIENTADA A OBJETOS - CLASE

class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info= `Soy un ${especie}, tengo ${edad} años, soy de color 
        ${color}`;
    }
    verInfo(){ //Esto es un metodo
        document.write(this.info + "<br>");
    }
}

//perro hereda especie, edad,color de animal
class perro extends animal {
    constructor (especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza //agrego raza
        this.infoPerro = `Soy un ${especie}, tengo ${edad} años, soy de color 
        ${color} y soy un ${raza} <br>`;
    }
    verInfoPerro(){
        document.write(this.infoPerro + "<br>");
    }
    ladrar(){ //un metodo para que ladre
        alert("GUAU");
    }
    set setRaza(newName){//permite cambiar la raza
        this.raza = newName;
    }
    get getRaza(){ //permite mostrar
        return this.raza
    }
}

let dog= new perro ("perro",5,"marron","american bully");
let gato= new animal("gato",10,"negro");
let pajaro = new animal("pajaro",2,"verde")


gato.verInfo();
pajaro.verInfo();

dog.verInfoPerro();

dog.ladrar();

document.write(dog.getRaza+"<br>")

dog.setRaza = "dogo argentino";//cambio raza temporalmente

document.write(dog.getRaza+"<br>")

