// LA FIESTA FUNCIONA DE 22:00 A 7:00, SOLO INGRESAN MAYORES DE EDAD
// Y EL PRIMERO QUE ENTRE DESPUES DE LAS 02:00 ENTRA GRATIS, EL RESTO PAGA

let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Que edad tenes maquina?");
    if (edad>=18){
        if (time <=7 || time>=22 ){
            if(time>=2 && time <7 && free == false){
                alert(`Podes pasar gratis capo, son las ${time}:00hs y sos la primer persona despues de las 2 am`);
                free = true;
             }else {
                alert(`Son las ${time}:00 hs, podes pasar pero pagando`)
        }
        } else{
        alert(`Loco son las ${time}:00hs, la fiesta es de 22:00 a 7:00, rescatate`)}
    } else {
        alert("Papu sos menor de edad, anda a tomar la cindor")}
}

validarCliente(12);
validarCliente(22);
validarCliente(24);
validarCliente(2);
validarCliente(3);
validarCliente(8);