const p = document.getElementById("tt");
const bolas = document.querySelector(".bolas");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");

let inventario = [
    {nome:"Pão",
         img:"assets/itens/consumiveis/pao.png",
        categoria: "consumivel"},
    {nome:"Poção ciano",
        img:"assets/itens/consumiveis/pocao-ciano.png",
        categoria: "consumivel"},
    {nome:"Poção Violeta",
        img:"assets/itens/consumiveis/pocao-violeta.png",
        categoria: "consumivel"
    },
    {nome:"Poção Vermelha",
        img:"assets/itens/consumiveis/pocao-vermelhoRosa.png",
        categoria: "consumivel"
    },
    {nome:"Sopa de Perna de Rã",
        img:"assets/itens/consumiveis/sopa-pernaDeRa.png",
        categoria: "consumivel"
    },
    {nome:"Baú",
        img:"assets/itens/objetos/bau.png",
        categoria: "objeto"},
    {nome:"Slime",
        img:"assets/itens/mstr-npc/slime.png",
        categoria: "personagem"
    },
    {nome:"Mestre",
        img:"assets/itens/mstr-npc/icon-mestre.png",
        categoria: "personagem"
    },
]

let inventarioMestre = document.querySelector("#inventario-mestre")
let caixaSlots = document.querySelector("#caixa-slots")

let formularioAdicionar = document.querySelector("form#form-modif-invent");

let abertoForm = false;
function formAdicionar() {
    if (abertoForm == false) {
        formularioAdicionar.style.display=`block`;
        abertoForm = true;
    } else {
        formularioAdicionar.style.display=`none`;
        abertoForm = false;
    }
}

function abaTodos() {
    caixaSlots.innerHTML="";
    for (let i in inventario) {
        let slots = document.createElement('div');
        let detalhe = document.createElement('div')
        let item = document.createElement('div')
    
        slots.className = "slots-inventario";
        detalhe.className = "detalhe"
        item.className = "item"
    
        caixaSlots.appendChild(slots);
        slots.appendChild(detalhe)
        slots.appendChild(item);
        item.style.backgroundImage=`url(${inventario[i].img})`;
    }
}
abaTodos();

function abaConsumiveis() {
    const itensConsumiveis = inventario.filter(i => i.categoria === "consumivel");
    caixaSlots.innerHTML="";

    for (i = 0; i < itensConsumiveis.length; i++) {
        let slots = document.createElement('div');
        let detalhe = document.createElement('div')
        let item = document.createElement('div')

        slots.className = "slots-inventario";
        detalhe.className = "detalhe"
        item.className = "item"

        caixaSlots.appendChild(slots);
        slots.appendChild(detalhe)
        slots.appendChild(item);
        item.style.backgroundImage=`url(${itensConsumiveis[i].img})`;
    }
}

function abaObjetos() {
    const itensObjetos = inventario.filter(i => i.categoria === "objeto");
    caixaSlots.innerHTML="";
    for (i = 0; i < itensObjetos.length; i++) {
        let slots = document.createElement('div');
        let detalhe = document.createElement('div')
        let item = document.createElement('div')
    
        slots.className = "slots-inventario";
        detalhe.className = "detalhe"
        item.className = "item"
    
        caixaSlots.appendChild(slots);
        slots.appendChild(detalhe)
        slots.appendChild(item);
        item.style.backgroundImage=`url(${itensObjetos[i].img})`;
    }
}

function abaPersonagens() {
    const itensPersonagens= inventario.filter(i => i.categoria==="personagem");
    caixaSlots.innerHTML="";

    for (i = 0; i < itensPersonagens.length; i++) {
        let slots = document.createElement('div');
        let detalhe = document.createElement('div')
        let item = document.createElement('div')
    
        slots.className = "slots-inventario";
        detalhe.className = "detalhe"
        item.className = "item"
    
        caixaSlots.appendChild(slots);
        slots.appendChild(detalhe)
        slots.appendChild(item);
        item.style.backgroundImage=`url(${itensPersonagens[i].img})`;
    }
}

let aberto = false;
function abrirInventario() {
    let btnInventario = window.document.querySelector('button#btn-inventario');
    if (aberto == false){
        btnInventario.style.backgroundImage="url(assets/icons-texturas/icon-inventario-mestre-aberto.png)"
        inventarioMestre.style.transform=`translateX(0%)`;
        aberto = true;
    } else {
        btnInventario.style.backgroundImage="url(assets/icons-texturas/icon-inventario-mestre-fechado.png)"
        inventarioMestre.style.transform=`translateX(-100%)`;
        aberto = false;
    }
}

let abertoNotas = false;
function abrirNotas() {
    let btnNotas = window.document.querySelector("button#btn-notas")
    let abaNotas = window.document.querySelector("div#aba-notas")
    if (abertoNotas == false) {
        btnNotas.style.backgroundImage=`url(assets/icons-texturas/icon-livroabt.png)`
        btnNotas.style.width="80px"
        btnNotas.style.backgroundSize="contain"
        btnNotas.style.transform="TranslateX(-350px)"
        abaNotas.style.transform="TranslateX(0%)"
        abertoNotas = true;
    } else {
        btnNotas.style.backgroundImage=`url(assets/icons-texturas/icon-livrofcd.png)`
        btnNotas.style.width="40px"
        btnNotas.style.backgroundSize="cover"
        btnNotas.style.transform="TranslateX(-0px)"
        abaNotas.style.transform="TranslateX(100%)"
        abertoNotas = false;
    }
}

function limparBolas() {
    let c = 1;
    while (c < 8) {
        let b = document.getElementById("b" + c)
        b.style.display="none"
        c++
    }
}

function rolarDados() {
    limparBolas()
    let dado = Math.floor(Math.random() * 6) + 1
    p.innerText=dado;
    
    switch(dado) {
        case 1:
            b5.style.display="block"
            break
        case 2:
            b2.style.display="block";
            b6.style.display="block";
            break
        case 3:
            b2.style.display="block";
            b5.style.display="block";
            b6.style.display="block";
            break
        case 4:
            b1.style.display="block";
            b2.style.display="block";
            b6.style.display="block";
            b7.style.display="block";
            break
        case 5:
            b1.style.display="block";
            b2.style.display="block";
            b5.style.display="block";
            b6.style.display="block";
            b7.style.display="block";
            break
        case 6:
            b1.style.display="block";
            b2.style.display="block";
            b3.style.display="block";
            b4.style.display="block";
            b6.style.display="block";
            b7.style.display="block";
            break
    }
}