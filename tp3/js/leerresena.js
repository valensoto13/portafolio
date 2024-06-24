// CXOMILLA INVERTIDA

let platos = document.querySelector(".resultados")

fetch('js/resena_argentino.json')
.then((response) => {
     return response.json()
    })
.then((plato) => {
      for (let i=0; i < plato.length; i++){
        platos.innerHTML +=
        /*html*/`<article class="resto">
                        <div class="imagen-resto">
                            <img src="${plato[i].img}">
                        </div>
                        <h2>${plato[i].nombre}</h2>
                        <h4>${plato[i].plato}</h4>
                        <p>${plato[i].descripcion}</p>
                        <div class="puntu_resto"> ${plato[i].calificacion} <i class="fa-solid fa-star"></i></div>
                    </article><br>`;
       
    }
})
