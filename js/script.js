/* ==========================================
   PESQUISA DE EDITAIS
========================================== */

function pesquisar() {

    const campo = document
        .getElementById("pesquisa")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        const texto = card.innerText.toLowerCase();

        if(texto.includes(campo)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

}

/* ==========================================
   BOTÃO VOLTAR AO TOPO
========================================== */

const botaoTopo = document.createElement("button");

botaoTopo.id = "topo";

botaoTopo.innerHTML = "↑";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll",function(){

    if(window.scrollY > 300){

        botaoTopo.style.display = "block";

    }else{

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click",function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
   ABRIR MAPA DA PRODESP
========================================== */

function abrirMapa(){

    window.open(

    "https://maps.google.com/?q=Rua Agueda Gonçalves,240,Taboão da Serra SP",

    "_blank"

    );

}

/* ==========================================
   ANIMAÇÃO AO ROLAR A PÁGINA
========================================== */

const elementos = document.querySelectorAll(".card,.sobre,.mapa");

const observador = new IntersectionObserver(function(entradas){

    entradas.forEach(function(entrada){

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });

});

elementos.forEach(function(item){

    observador.observe(item);

});

/* ==========================================
   MODO ESCURO
========================================== */

const botaoModo = document.createElement("button");

botaoModo.id = "modoEscuro";

botaoModo.innerHTML = "🌙";

document.body.appendChild(botaoModo);

botaoModo.addEventListener("click",function(){

    document.body.classList.toggle("dark");

});

/* ==========================================
   MENU MOBILE
========================================== */

const menu = document.querySelector("nav");

const botaoMenu = document.createElement("button");

botaoMenu.innerHTML = "☰";

botaoMenu.id = "menuMobile";

document.querySelector("header").appendChild(botaoMenu);

botaoMenu.addEventListener("click",function(){

    menu.classList.toggle("ativo");

});

/* ==========================================
   DATA ATUAL
========================================== */

const data = new Date();

console.log(

"Portal carregado em " +

data.toLocaleDateString("pt-BR")

);

/* ==========================================
   BOAS-VINDAS
========================================== */

window.addEventListener("load",function(){

    console.log(

        "Bem-vindo ao Portal de Editais da PRODESP"

    );

});