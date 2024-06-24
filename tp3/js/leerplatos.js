// CXOMILLA INVERTIDA

let platos = document.querySelector(".resultados")

fetch('js/platos_argentinos.json')
.then((response) => {
     return response.json()
    })
.then((plato) => {
      for (let i=0; i < plato.length; i++){
        platos.innerHTML +=
        /*html*/`<article class="resto">
                        <div class="imagen-resto">
                            <img src="${plato[i].image}">
                        </div>
                        <h3>${plato[i].plato}</h3>
                        <p>${plato[i].description}</p>
                        <a href="plato.html">Leer más</a>
                        <div class="puntu_resto">$${plato[i].price}</div>
                    </article><br>`;
       
    }
})

let plato = document.querySelector(".resultados")

fetch('js/platos_peruanos.json')
.then((response) => {
     return response.json()
    })
.then((plato) => {
      for (let i=0; i < plato.length; i++){
        platos.innerHTML +=
        /*html*/`<article class="resto">
                        <div class="imagen-resto">
                            <img src="${plato[i].image}">
                        </div>
                        <h3>${plato[i].plato}</h3>
                        <p>${plato[i].description}</p>
                        <a href="plato.html">Leer más</a>
                        <div class="puntu_resto">$${plato[i].price}</div>
                    </article><br>`;
       
    }
})
console.log("LocalStorage" + localStorage.getItem("variablelocal"));

let suma = 4444

//Guardar
localStorage.setItem("variablelocal", suma);

//Conseguir elemento
localStorage.getItem("variablelocal");

console.log("normal" + suma)
console.log("LocalStorage" + localStorage.getItem("variablelocal"));