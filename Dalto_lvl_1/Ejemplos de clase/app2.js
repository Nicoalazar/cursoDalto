let cadena = "Cadena De Prueba";
let cadena2 = "cadena"

resultado1 = cadena.concat(" hola") //cocaten
resultado2 = cadena.startsWith(cadena2) //ToF si empieza con
resultado3 = cadena.endsWith("prueba") //ToF si termina con
resultado4 = cadena.includes("de") //ToF si contiene 
resultado5 = cadena.indexOf("pr") //indice de la letra o palabra
resultado6 = cadena.lastIndexOf("de")//indice de la letra o palabra buscando desde atras 
resultado7 = cadena.padStart(20,"e");//rellena al principio hasta n con el texto elegido
resultado8 = cadena.padEnd(20,"e")//rellena al final hasta n con el texto elegido
resultado9 = cadena.repeat(2)//la repite n veces

document.write(resultado1 +"<br>")
document.write(resultado2 +"<br>")
document.write(resultado3 +"<br>")
document.write(resultado4 +"<br>")
document.write(resultado5 + "-" + cadena[10] +"<br>")
document.write(resultado6 + "-" + cadena[7] +"<br>")
document.write(resultado7 +"<br>")
document.write(resultado8 +"<br>")
document.write(resultado9 +"<br><br>")

resultado1 = cadena.split(" ")//crea un array separando por el caracter
resultado2 = cadena.startsWith(cadena2) //ToF si empieza con
resultado3 = cadena.endsWith("prueba") //ToF si termina con
resultado4 = cadena.includes("de") //ToF si contiene 
resultado5 = cadena.indexOf("pr") //indice de la letra o palabra
resultado6 = cadena.lastIndexOf("de")//indice de la letra o palabra buscando desde atras 
resultado7 = cadena.padStart(20,"e");//rellena al principio hasta n con el texto elegido
resultado8 = cadena.padEnd(20,"e")//rellena al final hasta n con el texto elegido
resultado9 = cadena.repeat(2)//la repite n veces
resultado10= cadena.substring(1,3)//extra donde empieza hasta donde termina-1
resultado11= cadena.toLocaleLowerCase() //todo minuscula
resultado12= cadena.toLocaleUpperCase() // todo mayuscula

document.write(`<b>${resultado1[0]}</b> es el primer elemento del array: ${resultado1} <br>`)
document.write(resultado2 +"<br>")
document.write(resultado3 +"<br>")
document.write(resultado4 +"<br>")
document.write(resultado5 + "-" + cadena[10] +"<br>")
document.write(resultado6 + "-" + cadena[7] +"<br>")
document.write(resultado7 +"<br>")
document.write(resultado8 +"<br>")
document.write(resultado9 +"<br>")
document.write(resultado10 +"<br>")
document.write(resultado11 +"<br>")
document.write(resultado12 +"<br>")


//TRANSFORMADORES DE ARRAY: MODIFICAN EL ARRAY
resultado1.pop() //Elimina el ultimo elemento del array y lo muestra
resultado1.shift() // Elimina el primer elemento del array y lo muestra
resultado0= resultado1.push("juancito")//agrega un elemnto al array al final
document.write("Elemento removido: "+resultado1 +"<br>")
document.write("Elemento removido: "+resultado1 +"<br>")
document.write("Resultado: "+resultado1 + "<br>")
document.write(resultado1+": " +resultado0+" elementos" +"<br><br>")

numeros = [1,2,3,4,5,2,3,4];
numeros.reverse(); //invierte el orden
numeros.unshift(0) //agrega un elemento al principio
numeros.sort() //ordena los datos
document.write(numeros + "<br><br>")
numeros.splice(1,3,"roberto") //elimina desde la posicion 1, 3 elementos y los reemplaza con "roberto"
document.write(numeros + "<br><br>")

//ACCESORES DE ARRAY: CREAN NUEVO ARRAY
numeros = [1,2,3,4,5,2,3,4];
resultado13 = numeros.join("-"); // crea una cadena de texto separando los elementos con "-"
document.write(resultado13 + "<br>")

resultado14 = numeros.splice(0,3) // devuelve porcion del array 0 inicio, 2 final no incluido (-1 para todos menos el ultimo)
document.write(resultado14 + "<br>")

//Ya visto en cadenas
numeros = [1,2,3,4,5,2,3,4]
document.write(numeros.includes(4) + "<br>")
document.write(numeros.indexOf(5) + "<br>")
document.write(numeros.lastIndexOf(2) + "<br><br>")

//DE REPETICIÓN
document.write(numeros.filter(numero => numero <=3)+"<br><br>")
//filter recorre el array ejecutando una condición y crea un array
numeros.forEach(numero => {
    document.write(numero + "<br>")
}) //forEach recorre el array ejecutando una función

//OBJETO MATH
document.write("<br>"+Math.sqrt(25)+"<br>") //raiz cuadrada
document.write(Math.cbrt(27)+"<br>") //raiz cubica
document.write(Math.max(4,1,2,123,459,100,-22)+"<br>") //muestra el mas grande
document.write(Math.min(4,1,2,123,459,100,-22)+"<br>") //muestra el mas chico
document.write(Math.random()+"<br>") //tira un numero aleatorio entre 0 y 1
numero = Math.random()*100
document.write(Math.round(numero)+"<br>") //redondea
document.write(Math.floor(numero)+"<br>") //redpmdea para abajo siempre
document.write(Math.fround(4.55415794321324654974)+"<br>") //representacion flotante de precision mas cercana
document.write(Math.trunc(numero)+"<br>") //trunca la parte decimal casi como floor
//propiedades
document.write(Math.PI+"<br>") //PI
document.write(Math.SQRT1_2+"<br>") //RAIZ DE 1/2
document.write(Math.SQRT2+"<br>") //RAIZ DE 2
document.write(Math.E+"<br>") //EULER
document.write(Math.LN2+"<br>") //Ln2
document.write(Math.LN10+"<br>") //Ln10
document.write(Math.LOG2E+"<br>")
document.write(Math.LOG10E+"<br>")