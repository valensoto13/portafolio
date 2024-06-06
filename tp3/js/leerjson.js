let resto = document.querySelector(".resultados")

fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
.then(data => {
      for (let i=0; i < 7; i++){
       
        document.querySelector('.resultados').innerHTML +=
        /*html*/`<article class="resto">
            <a href="restaurante.html" class="resto"></a>
            <div class="puntu_resto">${data[i].rango}</div>
            <div class="imagen-resto">
                <img src="${data[i].avatar.src}" alt="">
            </div>
            <h3><a href="restaurante.html"> ${data[i].name}</a></h3>
            <br>
            <p>${data[i].category}<br>
            ${data[i].horario}
            </p>
            <br>
            <button class="estrellas-icon">
             ${data[i].puntuacion}
            </button>
        </article>` 
       
    }
})
