//Crear una funcion que nos muestre el profesor y los alumnos de una materia

const materias = {
    fisica: ["Perez", "pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","juan","pepito"],
    logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
}

const obtenerInformacion = (materia) =>{

        if (materias[materia] !== undefined){
            return [materias[materia],materia,materias]
        }else {
            return materias;
    }
}

// const mostrarInformacion = (materia)=>{
//         let informacion = obtenerInformacion(materia);

//     if(informacion !== false){
//         let profesor = informacion[0][0];
//         let alumnos = informacion[0];
//         alumnos.shift()
//         document.write(`El profesor de <b> ${informacion[1]}</b> es: <b style= "color:red">${profesor}</b><br>
//         Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>`)
//     }else 
//     document.write(`La materia ${materia} no existe`)
// }

function cantidadDeClases(alumno) {
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    } return `<b style='color:blue'>
	${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
	<br><br>`;
}


// mostrarInformacion("fisica")
// mostrarInformacion("programacion")
// mostrarInformacion("logica")
// mostrarInformacion("quimica")
// mostrarInformacion("matematica")

document.write(cantidadDeClases("cofla"))
document.write(cantidadDeClases("pedro"))