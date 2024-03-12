class App {
    constructor (descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App iniciada")
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App cerrada")
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada")
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App desinstalada")
        }
    }
    appInfo(){
        return` 
        Descargas: ${this.descargas} <br>
        Puntuación: ${this.puntuacion} <br>
        Peso: ${this.peso} <br><br>`
    }
}

app = new App("16.000","5 estrellas","900Mb")
app1 = new App("20.000","4 estrellas","400Mb")
app2 = new App("10.000","4.5 estrellas","100Mb")
app3 = new App("12.000","4.8 estrellas","1Gb")
app4 = new App("100.000","5 estrellas","250Mb")
app5 = new App("12.000","3.7 estrellas","730Mb")
app6 = new App("2.000","2.9 estrellas","522Mb")

app.instalar()
app.abrir()
app.cerrar()
app.desinstalar()

document.write(
    app.appInfo(),
    app1.appInfo(),
    app2.appInfo(),
    app3.appInfo(),
    app4.appInfo(),
    app5.appInfo(),
    app6.appInfo())

