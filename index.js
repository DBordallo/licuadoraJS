let estadoLicuadora = "apagada";
let sonidoLicuadora = document.getElementById("blender-sound");
let botonLicuadora = document.getElementById("blender-button-sound");
let licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        hacerBrr();
        licuadora.classList.add("apagado");
        console.log("encendido");
    } else {
        estadoLicuadora = "apagada"
        hacerBrr();
        licuadora.classList.remove("active");
        console.log("apagado");
    }
}

function hacerBrr(){
    if(sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.curretTime=0;
    }
}