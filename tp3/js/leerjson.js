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

// let guardar=(id)=>{
//   localStorage.setItem("restaurante",id);
// }

// fetch('js/restaurantes.json')

// .then(response => {
  
//   return response.json()
// })

// .then(data => {
//   data.forEach(e=>{
//     document.getElementById('restoList').innerHTML +=/html/`
//     <a id="${e.id}" href="./menu.html" class="restaurantes flex" onClick="guardar(id)">
//       <div class="img center">
//         <img src="${e.img.src}" alt="${e.img.alt}" />
//         <div class="distancia">${e.dist}</div>
//       </div>
//       <div class="descripcion">
//       <div class="nombre">${e.name}</div>
//       <div class="datos">
//         <div>${e.ubic}</div>
//         <div>${e.time}</div>
//       </div>
//       <div class="valoracion flex">
//         <div class="estrellas flex">
//           ${'<span class="icons selected">star</span>'.repeat(e.value.stars)}
//           ${'<span class="icons">star</span>'.repeat(5-e.value.stars)}
//           <div class="n-resenias">(${e.value.coments})</div>
//         </div>
//         <div class="costo">
//           ${'<span class="icons selected">euro_symbol</span>'.repeat(e.value.cost)}
//           ${'<span class="icons">euro_symbol</span>'.repeat(3-e.value.cost)}
//         </div>
//       </div>
//       <div class="puntaje">${e.value.stars}</div>
//       </div>
//     </a>`
//     })
//   })

let restaurante = document.querySelector(".restaurantes")

fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
    .then((data) => {
      data.forEach(element => {
        restaurante.appendChild=""
    
      });
        // almaceno en la variable restaurante el valor de i del FOR
        let resto = data[i];

        let cartaRestaurante = document.createElement("div");
        cartaRestaurante.classList.add("restaurante");

        // almaceno en la variable cartaRestaurante.id el valor de i del restaurante.truck_id
        cartaRestaurante.id = resto.truck_id;

        cartaRestaurante.innerHTML = /*html*/`
              <h3>${resto[i].name}</h3>
              <h4>${resto[i].category}</h4>
              <div class="euro">
                <div class="plata">
                    <i class="fa-solid fa-euro-sign" style="color: #4bec99;"></i>
                </div>
                <div class="plata">
                    <i class="fa-solid fa-euro-sign" style="color: #4bec99;"></i>
                </div>
                <div class="plata">${resto[i].rango}</i>
                </div>
              </div>
              <div class="puntu_resto">${resto[i].puntuacion}</div>
              <div class="precio_resto"></div>
              <br><br><br>
              <div class="icons_resto">
                <div class="iconos">
                    <div class="icon">
                        <i class="fa-regular fa-clock"></i>
                        <h3>${resto[i].horario}</h3>
                    </div>
                    <div class="icon">
                        <i class="fa-solid fa-location-dot"></i>
                        <h3>1.5 KM</h3>
                    </div>
                    <div class="icon">
                        <i class="fa-solid fa-bell-concierge"></i>
                        <h3>DELIVERY</h3>
                    </div>
                </div>
              </div>
              <div class="descri">
                <p>${resto[i].bio}</p>
              </div>` 

              cartaRestaurante.addEventListener("click", function () {
                let idRestauranteSeleccionado = resto.truck_id;
                //almaceno en CACHÉ la variable indiceCache el valor de idRestauranteSeleccionado
                localStorage.setItem("indiceCache", idRestauranteSeleccionado);
                console.log(idRestauranteSeleccionado);
              });
        
              resto.appendChild(cartaRestaurante);
            }
          );
        
        // obtengo desde la caché el valor almacenado en indiceCache
        console.log("con localstorage " + localStorage.getItem("indiceCache"));
        let k = localStorage.getItem("indiceCache");        
    