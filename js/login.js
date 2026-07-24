/* ==========================================
   LOGIN.JS
   Portal de Editais - PRODESP
========================================== */

/* MOSTRAR E ESCONDER SENHA */

const campoSenha = document.getElementById("senha");
const olho = document.getElementById("mostrarSenha");

olho.addEventListener("click", function () {

    if (campoSenha.type === "password") {

        campoSenha.type = "text";
        olho.classList.remove("fa-eye");
        olho.classList.add("fa-eye-slash");

    } else {

        campoSenha.type = "password";
        olho.classList.remove("fa-eye-slash");
        olho.classList.add("fa-eye");

    }

});


/* VALIDAÇÃO DO FORMULÁRIO */

const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const senha = document.getElementById("senha").value.trim();

    if (email === "") {

        alert("Digite seu e-mail.");

        return;

    }

    if (!email.includes("@") || !email.includes(".")) {

        alert("Digite um e-mail válido.");

        return;

    }

    if (senha.length < 6) {

        alert("A senha deve possuir pelo menos 6 caracteres.");

        return;

    }

    /* LOGIN DE DEMONSTRAÇÃO */

    if (email === "admin@prodesp.sp.gov.br" &&
        senha === "123456") {

        alert("Login realizado com sucesso!");

        window.location.href = "edital.html";

    } else {

        alert("E-mail ou senha incorretos.");

    }

});


/* ENTER */

document.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        formulario.requestSubmit();

    }

});


/* CAMPO EM FOCO */

const inputs = document.querySelectorAll("input");

inputs.forEach(function(input){

    input.addEventListener("focus",function(){

        input.style.border="2px solid #FFD54F";

    });

    input.addEventListener("blur",function(){

        input.style.border="none";

    });

});


/* BOAS-VINDAS */

window.onload = function(){

    console.log("Sistema de Login iniciado.");

};