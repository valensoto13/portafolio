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
         <div class="puntu_resto">${data[i].puntuacion}</div>
         <div class="imagen-resto">
             ${data[i].avatar.src}
         </div>
         <h3><a href="restaurante.html"> ${data[i].category}</a></h3>
         <br>
         <p>Asian, Chinese<br>
         9:00-11:00
         </p>
         <br>
         <button class="estrellas-icon">
             ${data[i].rango}
             </button>
     </article>` 
       
    }
})
