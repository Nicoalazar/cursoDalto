const button = document.querySelector(".button");

button.addEventListener("click",saludar)

function saludar (){
    alert("Hola");
    button.removeEventListener("click",saludar)
}

// button.addEventListener("click",(e)=>{
//     console.log(e.target)
// }) //muestra todos los parametros del evento, e.target muestra un parametro.