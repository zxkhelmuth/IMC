let img = document.getElementById("imgIMC");
let valor = document.getElementById("valorIMC");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let msj = document.getElementById("mensaje");
const mostrar = document.getElementById("mostrarimg");

function calcularIMC(event){
    event.preventDefault();
    let imc = peso.value / (altura.value ** 2);
    imc = (imc).toFixed(2)
    valor.textContent = `Tu IMC es N: ${imc}`

    if (imc >30){
        img.src = "img/img4.jpeg"
        msj.textContent = "Tienes obesidad. Es recomendable que busques asesoramiento para mejorar tu salud."
    }else if (imc > 25 && imc < 29.9){
        img.src = "img/img3.jpeg"
        msj.textContent = "Tienes sobrepeso. Considera hacer ajustes en tu dieta y nivel de actividad fisica."
    }else if (imc > 18.5 && imc < 24.9){
        img.src = "img/img2.jpeg"
        msj.textContent = "¡Estas en el rango de peso normal! Sigue manteniendo un estilo de vida saludable."
    }else if (18.5 > imc){
        img.src = "img/img1.jpeg"
        msj.textContent = "Estas debajo del peso normal. Es importante que consultes con un profesional de la salud."
    }

    mostrar.style.display = "flex";
}