let options = document.getElementById('options');

let guardar=(id)=>{
  localStorage.setItem("resto",id);
}

fetch('js/resto.json')
.then(response => {
     return response.json()
    })
.then(data => {
      data.forEach(e => {
        document.getElementById('resultados').innerHTML +=
        /*html*/`<article class="resto">
          <a href="restaurante.html" class="resto"></a>
          <div class="puntu_resto">${'<span class="icons">euro_symbol</span>'.repeat(3-e.value.cost)}</div>
          <div class="imagen-resto"><img src="${e.img.src}" alt=""></div>
          <h3><a id="${e.id}" href="restaurante.html" onclick="guardar(id)"> ${e.name}</a></h3>
          <br>
          <p>${e.ubic}<br>
            ${e.time}
          </p>
          <br>
          <div class="estrellas-icon">${'<span class="icons selected">star</span>'.repeat(e.value.stars)}</div>
      </article>` 
      });
    })

