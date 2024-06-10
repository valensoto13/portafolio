
let resta = document.getElementById("resta")
let cont = document.getElementById("cantidad")
let sumar = document.getElementById("sumar")

let counter = 1

cont.innerText = counter



function aumentar(){
    if (counter < 3){
        console.log("sumando")
        counter = counter + 1
        cont.innerText = counter
    }
    
}

function resTa(){
    
    if (counter > 1)
    {
        console.log("restando")
         counter = counter - 1
    cont.innerText = counter
    }else{
        console.log("no puedo seguir restando")
        resta.style.color = "red"
        resta.style.cursor = "not-allowed"
    }


   
}