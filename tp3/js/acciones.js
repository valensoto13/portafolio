console.log("conectado")

//capturo solo un nodo con ID
let listaProductos = document.getElementById("productos")
//console.log(listaProductos.innerText) text solo muestra el texto de las listas
//inner solo muestra el elmento 
//innerHTML muestra las listas de adentro de el ul productos
console.log(listaProductos.innerHTML)// muestra lo que está adentro de productos

//captura npdps, seletores ID o selectores clase = un solo elemento
let listaProductos2 = document.querySelector(".contenedor")
console.log(listaProductos2.innerHTML)

//capturo clases y las convierte a un array. Hace lo mismo que getElementsByClassName
let contenedor = document.querySelectorAll(".contenedor")
// querySelector("") me muestra todo lo que estpa adentro de contenedor 
// querySelector("")se declara como esta en la hoja de estilos
// si es una clase lleva punto adelante del nombre
// si es un id va # adelante de productos
setTimeout(()=> {
    alert(contenedor[0].innerHTML)//me aparece lo que estoy capturando por el alerta
}   ,1000);


//capturo clases y las convierte a un array. Hace lo mismo que querySelector
let conteiner = document.getElementsByClassName("contenedor")
// getElementsByClassName("contenedor") busca por el nombre de la clase
console.log(conteiner[0].innerHTML)


//-------------crear ELEMENTOS-------------


// let lista2 = document.getElementById("nuevaLista")//capturamos
//crea un nuevo elemento
let nuevaLista = document.createElement("ul")// tiene que ser etiqueta. Esta creada pero no incorporada en el elemnto

document.body.appendChild(nuevaLista);//adjuntar la etiqueta al final del archivo

let listaElemento1 = document.createElement("li");//crea un elemnto li adentro del elemento ul
listaElemento1.textContent = "Primer Item lista";// le asigna un texto a ese elemento
nuevaLista.appendChild(listaElemento1)

let listaElemento2 = document.createElement("li");
listaElemento2.textContent = "Segundo Item lista";
nuevaLista.appendChild(listaElemento2)


//---------------capturo

let futer = document.querySelector("footer")
//console.log(futer.innerText)

//futer.innerText = "ALGO"//muestra solo lo de adentro de la etiqueta
//futer.innerHTML = "<i>ALGO</i>" //muestra la etiqueta

let resta = document.getElementById("restar")
let cont = document.getElementById("contador")
let suma = document.getElementById("sumar")

let counter = 1

cont.innerText = counter

function aumentar(){

    counter = counter + 1
    cont.innerText = counter
}


function disminuir(){

    counter = counter - 1
    cont.innerText = counter
}

console.log(counter)