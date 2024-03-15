const button = document.querySelector(".button");

button.addEventListener("dblclick",saludar)

function saludar (){
    alert("Hola, hiciste doble click");
    //button.removeEventListener("dblclick",saludar) //para que funcione una vez
}
// button.addEventListener("click",(e)=>{
//     console.log(e.target)
// }) //muestra todos los parametros del evento, e.target muestra un parametro.
const contenedorr = document.querySelector(".contenedor-r")
const contenedora = document.querySelector(".contenedor-a")

contenedorr.addEventListener("click",(e)=>{
    alert("di click en el contenedor rojo")
})

contenedora.addEventListener("click",(e)=>{
    alert("di click en el contenedor azul")
    //e.stopPropagation() //para detener el efecto
})

const contenedors = document.querySelector(".contenedor-s")
const contenedorv = document.querySelector(".contenedor-v")

contenedors.addEventListener("mouseover",(e)=>{ //mouseout para marcar salida
    alert("ingresaste el mouse al verde o amarillo")
    e.stopPropagation()
})

const buttonsec = document.querySelector(".buttonsec")
buttonsec.addEventListener("contextmenu",(e)=>{
    alert("hiciste click secundario")
})

const input = document.querySelector(".input-prueba")
const contenedorm = document.querySelector(".contenedor-m")

input.addEventListener("keydown",(e=>{
    console.log("una tecla fue tocada")
}))
input.addEventListener("keypress",(e=>{
    console.log("una tecla fue presionada y soltada")
}))
input.addEventListener("keyup",(e=>{
    console.log("una tecla fue soltada")
    let tecla = (e.key).toLocaleUpperCase()
     contenedorm.innerHTML = `Te presionó la tecla <b>${tecla}</b>`
}))

addEventListener("load",()=>{
    console.log("El sitio se cargó correctamente")
})

