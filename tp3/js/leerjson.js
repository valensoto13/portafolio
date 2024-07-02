// let resto = document.querySelector(".resultados")

// fetch('js/restaurantes.json')
// .then(response => {
//      return response.json()
//     })
// .then(data => {
//       for (let i=0; i < 7; i++){
//         let puntu = ""
//         let rango = ""

//           // if(data[i].puntuacion === "4"){
//           //   puntu = "star star star star"
//           // }
//           // else if (data[i].puntuacion === "3"){
//           //   puntu = "star star star"
//           // }
//           // else if (data[i].puntuacion === "2"){
//           //   puntu = "star star"
//           // }
//           // else if (data[i].puntuacion === "1"){
//           //   puntu = "star"
//           // }

//           // if(data[i].rango === "4"){
//           //   rango = "euro euro euro euro"
//           // }
//           // else if (data[i].rango === "3"){
//           //   rango = "euro euro euro"
//           // }
//           // else if (data[i].rango === "2"){
//           //   rango = "euro euro"
//           // }
//           // else if (data[i].rango === "1"){
//           //   rango = "euro"
//           // }
       
//         document.querySelector('.resultados').innerHTML +=
//         /*html*/`` 
       
//     }
// })

let guardar=(id)=>{
  localStorage.setItem("restaurante",id);
}

fetch('js/restaurantes.json')

.then(response => {
  
  return response.json()
})

.then(data => {
  data.forEach(e=>{
    document.getElementById('resultados').innerHTML +=/html/`
      <article class="resto">
          <a href="restaurante.html" class="resto"></a>
          <div class="puntu_resto">${e[i].rango}</div>
          <div class="imagen-resto">
            <img src="${e[i].avatar.src}" alt="">
          </div>
          <h3><a id="${e.id}" href="restaurante.html" onClick="guardar(id)"> ${e[i].name}</a></h3>
          <br>
          <p>${e[i].category}<br>
            ${e[i].horario}
          </p>
          <br>
          <div class="estrellas-icon">${e[i].puntuacion}</div>
      </article>`
    })
  })

{/* <a id="${e.id}" href="./menu.html" class="restaurantes flex" onClick="guardar(id)">
<div class="img center">
  <img src="${e.img.src}" alt="${e.img.alt}" />
  <div class="distancia">${e.dist}</div>
</div>
<div class="descripcion">
<div class="nombre">${e.name}</div>
<div class="datos">
  <div>${e.ubic}</div>
  <div>${e.time}</div>
</div>
<div class="valoracion flex">
  <div class="estrellas flex">
    ${'<span class="icons selected">star</span>'.repeat(e.value.stars)}
    ${'<span class="icons">star</span>'.repeat(5-e.value.stars)}
    <div class="n-resenias">(${e.value.coments})</div>
  </div>
  <div class="costo">
    ${'<span class="icons selected">euro_symbol</span>'.repeat(e.value.cost)}
    ${'<span class="icons">euro_symbol</span>'.repeat(3-e.value.cost)}
  </div>
</div>
<div class="puntaje">${e.value.stars}</div>
</div>
</a> */}