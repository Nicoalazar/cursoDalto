//TOMAR ASISTENCIA DE ALUMNOS, SI TIENEN MAS DE 6 FALTAS REPRUEBAN

let cantidad = prompt("¿Cuantos alumnos son?")
let alumnosTotales = []

for (i =0; i<cantidad;i++){
    alumnosTotales[i]= [prompt("Nombre del alumno "+(i+1)),0]
}//lleno el array con los nombres que ingreso, solo se llena el primer elemento, el segundo queda en 0

const tomarAsistecia =(nombre,p) =>{
    let presencia = prompt("Asistencia de: "+ nombre)
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}//funcion que suma los presentes en el segundo elemento del array

for (i=0; i<10;i++){
    for(alumno in alumnosTotales){
        tomarAsistecia(alumnosTotales[alumno][0],alumno)
    }
}//for que utiliza la funcion para llenar 10 asistencias

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br> 
             Presentes: ${alumnosTotales[alumno][1]} <br>
             Ausencias: ${10-alumnosTotales[alumno][1]}`
             if ((10-alumnosTotales[alumno][1])>=6){
                resultado += "<b style='color:red'> REPROBADO POR PORCENTAJE </b><br><br>"
             } else {
                resultado+="<br><br>"}

    document.write(resultado)            
}//for que calcula y muestra las asistencias y ausencias

