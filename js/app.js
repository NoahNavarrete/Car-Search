// Variables
const resultado = document.querySelector("#resultado")

// Eventos

document.addEventListener("DOMContentLoaded", ()=>{
    mostrarAuntos();
})

//Funciones

function mostrarAuntos(){
autos.forEach(auto => {
    const autoHTML = document.createElement("p");

    autoHTML.textContent= `
    ${auto.marca}`
    ;

    // Insertar en el html
    resultado.appendChild(autoHTML)
})
}