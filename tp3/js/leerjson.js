let resto = document.querySelector(".resultados")

fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
.then(data => {
      for (let i=0; i < 7; i++){
        let puntu = ""
        let rango = ""
       
          for(let i=0; i < 10; i++){
          let pantu = " "
          let rango = data[i].rango
          if(data[i].puntuacion === 4){
            pantu = "star star star star"
          }
          else if (data[i].puntuacion === 4){
            pantu = "star star star star"
          }
          else if (data[i].puntuacion === 3){
            pantu = "star star star"
          }
          else if (data[i].puntuacion === 2){
            pantu = "star star"
          }
          else if (data[i].puntuacion === 1){
            pantu = "star"
          }
       
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
