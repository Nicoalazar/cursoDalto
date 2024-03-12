//LISTADO DE CELULARES, CON CARACTERISTICAS Y FUNCIONES HEREDADAS
class Celulares {
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false
    }
    prenderApagar(){
        if (this.encendido==false){
            alert("El celular estaba apagado y se está encenciendo");
            this.encendido = true;
        }else {
            alert("Celular apagado")
        }
    }
    reinciar(){
        if(this.encendido == true){
            alert("Reiniciando celular")
        }else{
            alert("El celular está apagado")
            this.encendido = false
        }
    }
    tomarFoto(){
        alert(`Foto tomada con una resolución de: ${this.resolucionDeCamara}`)
    }
    grabarVideo(){
        alert(`Video grabado con una resolución de: ${this.resolucionDeCamara}`)
    }
    mobileInfo(){
        return `
        Color: ${this.color} <br>
        Peso: ${this.peso} <br> 
        Tamaño: ${this.tamaño} <br>
        Resolucion de Camara: ${this.resolucionDeCamara} <br>
        Memorioa Ram: ${this.memoriaRam} <br>
        `;
    }
}

class CelularAltaGama extends Celulares{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando en camara lenta")
    }
    reconocimientofacual(){
        alert("Vamos a iniciar un reconocimiento facial")
    }
    infoAltaGama(){
        return this.mobileInfo() + 'Resolucion de camara extra: '+this.resolucionDeCamaraExtra +"<br>"
    }
}

celular1 = new Celulares("Rojo","150g",'5"',"HD","1GB")
celular2 = new Celulares("Negro","155g",'5.4"',"Full HD","2GB")
celular3 = new Celulares("Blanco","146g",'5.9"',"Full HD","4GB")
celular4 = new CelularAltaGama("Rojo","130g",'5.2"',"FullHD","6GB","4K")
celular5 = new CelularAltaGama("Negro","142g",'6"',"HD","4GB","FullHD")

// celular1.prenderApagar()
// celular1.tomarFoto()
// celular1.grabarVideo()
// celular1.reinciar()
// celular1.prenderApagar()

document.write(`
${celular2.mobileInfo()} <br>
${celular1.mobileInfo()} <br>
${celular3.mobileInfo()} <br>
`)

document.write(`
${celular4.infoAltaGama()} <br>
${celular5.infoAltaGama()} <br>
`)

// celular4.prenderApagar()
// celular4.tomarFoto()
// celular4.grabarVideo()
// celular4.reinciar()
// celular4.grabarVideoLento()
// celular4.reconocimientofacual()
// celular4.prenderApagar()

