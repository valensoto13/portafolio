// // let listaProductos = document.getElementById("productos")

// // console.log(listaProductos.innerHTML);

// let contenedor = document.querySelector(".contenedor")
// setTimeout(() => {
//     alert(contenedor[0].innerHTML)
// } ,1000);



// let conteiner = document.getElementsByClassName("contenedor")
// console.log(conteiner[0].innerHTML)


// // console.log(contenedor);


// crear lista 
let lista2 = document.getElementById("nuevaLista")

let nuevaLista = document.createElement("ul")

document.body.appendChild(nuevaLista)

let listaElemento1 = document.createElement("li");
listaElemento1.textContent = "Es gratis";
nuevaLista.appendChild(listaElemento1)

let listaElemento2 = document.createElement("li");
listaElemento2.textContent = "Es impresionante";
nuevaLista.appendChild(listaElemento2)


//..........

// let futer = Document.querySelector("footer")
// alert(futer.innerText)

// futer.innerText = "algo"
// futer.innerHTML = "<i>ALGO</i>"

 let futer = document.querySelector("footer")

let resta = document.getElementById("resta")
let cont = document.getElementById("contador")
let sumar = document.getElementById("sumar")

let counter = 1

cont.innerText = counter



function aumentarMorfi(){
    if (counter < 3  ){
        counter = counter + 1
        cont.innerText = counter
    }
    
}

function resTa(){
    
    if ( counter > 1)
    { 
    counter = counter - 1
    cont.innerText = counter
    }else{
        resta.style.color = "red"
        resta.style.cursor = "not-allowed"
    }


   
}


console.log(counter)