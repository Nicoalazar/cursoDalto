let alto = window.screen.availHeight
let ancho = window.screen.availWidth

comprar = confirm(`El alto es de: ${alto}, el ancho es de: ${ancho}`)

if (comprar){
    alert ("Compra efectuada")
}else {
    alert("Compra cancelada")
}

let href = window.location.href
let pathname = window.location.pathname
let hostname = window.location.hostname
let protocolo = window.location.protocol

let html = `Protocolo: ${protocolo} <br> Pathname: ${pathname} <br>
Hostname: ${hostname} <br> URL completa: ${href}`

document.write(html)
