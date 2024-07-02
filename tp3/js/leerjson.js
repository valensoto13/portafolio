let resto = document.querySelector(".resultados")

fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
.then(data => {
      for (let i=0; i < 7; i++){
        let puntu = ""
        let rango = ""

          if(data[i].puntuacion === "4"){
            puntu = "star star star star"
          }
          else if (data[i].puntuacion === "3"){
            puntu = "star star star"
          }
          else if (data[i].puntuacion === "2"){
            puntu = "star star"
          }
          else if (data[i].puntuacion === "1"){
            puntu = "star"
          }

          if(data[i].rango === "4"){
            rango = "euro euro euro euro"
          }
          else if (data[i].rango === "3"){
            rango = "euro euro euro"
          }
          else if (data[i].rango === "2"){
            rango = "euro euro"
          }
          else if (data[i].rango === "1"){
            rango = "euro"
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
            <div class="estrellas-icon">
             ${data[i].puntuacion}
            </div>
        </article>` 
       
    }
})