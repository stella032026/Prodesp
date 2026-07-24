/* ==========================================
   BASE DE DADOS DOS EDITAIS
========================================== */

const editais = [

{
    numero:"001/2026",
    titulo:"Desenvolvimento de Sistemas",
    categoria:"Tecnologia",
    status:"Aberto",
    publicacao:"24/07/2026",
    encerramento:"30/08/2026",
    arquivo:"documentos/edital001.pdf"
},

{
    numero:"002/2026",
    titulo:"Infraestrutura de Redes",
    categoria:"Infraestrutura",
    status:"Em análise",
    publicacao:"15/07/2026",
    encerramento:"20/08/2026",
    arquivo:"documentos/edital002.pdf"
},

{
    numero:"003/2026",
    titulo:"Segurança da Informação",
    categoria:"Segurança",
    status:"Encerrado",
    publicacao:"01/06/2026",
    encerramento:"30/06/2026",
    arquivo:"documentos/edital003.pdf"
}

];


/* ==========================================
   PESQUISAR EDITAIS
========================================== */

function filtrarEditais(){

const texto=document
.getElementById("buscar")
.value
.toLowerCase();

const categoria=document
.getElementById("categoria")
.value;

const status=document
.getElementById("status")
.value;

const cards=document.querySelectorAll(".edital-card");

let encontrou=false;

cards.forEach(function(card){

const conteudo=card.innerText.toLowerCase();

const categoriaCard=card.innerText;

let mostrar=true;

if(texto!="" && !conteudo.includes(texto)){

mostrar=false;

}

if(categoria!="" && !categoriaCard.includes(categoria)){

mostrar=false;

}

if(status!="" && !categoriaCard.includes(status)){

mostrar=false;

}

if(mostrar){

card.style.display="block";

encontrou=true;

}else{

card.style.display="none";

}

});

if(!encontrou){

alert("Nenhum edital encontrado.");

}

}


/* ==========================================
   VISUALIZAR EDITAL
========================================== */

function visualizar(numero){

const edital=editais.find(function(item){

return item.numero===numero;

});

if(edital){

alert(

"Edital: "+edital.numero+

"\n\nTítulo: "+edital.titulo+

"\n\nCategoria: "+edital.categoria+

"\n\nStatus: "+edital.status+

"\n\nPublicado em: "+edital.publicacao+

"\n\nEncerramento: "+edital.encerramento

);

}

}


/* ==========================================
   BAIXAR PDF
========================================== */

function baixar(numero){

const edital=editais.find(function(item){

return item.numero===numero;

});

if(edital){

window.open(edital.arquivo,"_blank");

}

}


/* ==========================================
   ORDENAR POR STATUS
========================================== */

function ordenarStatus(){

const lista=document.querySelector(".lista-editais");

const cards=Array.from(lista.children);

cards.sort(function(a,b){

return a.innerText.localeCompare(b.innerText);

});

cards.forEach(function(card){

lista.appendChild(card);

});

}


/* ==========================================
   ORDENAR POR DATA
========================================== */

function ordenarData(){

alert("Função disponível para integração futura com banco de dados.");

}


/* ==========================================
   ATALHO ENTER
========================================== */

document.getElementById("buscar")
.addEventListener("keyup",function(event){

if(event.key==="Enter"){

filtrarEditais();

}

});


/* ==========================================
   MENSAGEM DE BOAS-VINDAS
========================================== */

window.onload=function(){

console.log("Portal de Editais carregado com sucesso.");

};