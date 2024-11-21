const entrar = document.querySelector("#formulario");
const nome = document.querySelector("#primeiro-nome-1");
const nomeSegundo = document.querySelector("#segundo-nome");
const email = document.getElementById("txt-email")

entrar.addEventListener("submit", (event) => {
    event.preventDefault();
    if (nome.value === "") {
        nome.style.borderColor = "red";
    } else {
        nome.style.borderColor = ""; 
    }

    if (nomeSegundo.value === "") {
        nomeSegundo.style.borderColor = "red";
    } else {
        nomeSegundo.style.borderColor = ""; 
    }

    if (email.value === "") {
        email.style.borderColor = "red";
    } else {
        email.style.borderColor = ""; 
    }
});
