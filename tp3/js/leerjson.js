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

let restaurante = document.querySelector(".resturante")

fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
    .then(data => {
      for (let i=0; i < 1; i++){
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

       
          document.querySelector('.restaurante').innerHTML +=
            /*html*/`
              <h3>${data[i].name}</h3>
              <h4>${data[i].category}</h4>
              <div class="euro">
                <div class="plata">
                    <i class="fa-solid fa-euro-sign" style="color: #4bec99;"></i>
                </div>
                <div class="plata">
                    <i class="fa-solid fa-euro-sign" style="color: #4bec99;"></i>
                </div>
                <div class="plata">${data[i].rango}</i>
                </div>
              </div>
              <div class="puntu_resto">${data[i].puntuacion}</div>
              <div class="precio_resto"></div>
              <br><br><br>
              <div class="icons_resto">
                <div class="iconos">
                    <div class="icon">
                        <i class="fa-regular fa-clock"></i>
                        <h3>${data[i].horario}</h3>
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
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. A numquam quam porro
                    labore neque incidunt quis. Consectetur
                    eveniet veniam nemo? Vero labore maxime
                    ipsum aperiam, corporis eum magnam
                    explicabo exercitationem?
                </p>
              </div>` 

          }
        })

           
     

//   .then((data) => {
//     data.forEach(element => {
//       resto.appendChild=""
     
//     });
//       // almaceno en la variable restaurante el valor de i del FOR
//       let restaurante = data[i];

//       let cartaRestaurante = document.createElement("div");
//       cartaRestaurante.classList.add("resto");
//       // almaceno en la variable cartaRestaurante.id el valor de i del restaurante.truck_id
//       cartaRestaurante.id = restaurante.truck_id;
//       cartaRestaurante.innerHTML = /*html*/ `
//         <div class="imagen_resto"><img src=${restaurante.avatar.src} alt=""></div>
//         <div class="desc_resto">
//           <h3>${restaurante.name}</h3>
//           <h5 class="gris_txt">
//             <p>${restaurante.direccion}</p>
//             <p>${restaurante.horario}s</p>
//           </h5>
//           <div class="precio_val">
//             <div class="valoracion verde_txt">
//               <i class="iconos">${restaurante.puntuacion}</i>
//               (72)
//             </div>
//             <div class="precio verde_txt">
//               <i class="iconos">attach_money</i><i class="iconos">attach_money</i><i
//                   class="iconos gris_txt">attach_money</i>
//             </div>
//           </div>
//         </div>
//         <div class="puntuacion">${restaurante.puntuacion}</div>
//         <div class="distancia"> 3KM</div>
//       `;

//       cartaRestaurante.addEventListener("click", function () {
//         let idRestauranteSeleccionado = restaurante.truck_id;
//         //almaceno en CACHÉ la variable indiceCache el valor de idRestauranteSeleccionado
//         localStorage.setItem("indiceCache", idRestauranteSeleccionado);
//         console.log(idRestauranteSeleccionado);
//       });

//       resto.appendChild(cartaRestaurante);
//     }
//   });

// // obtengo desde la caché el valor almacenado en indiceCache
// console.log("con localstorage " + localStorage.getItem("indiceCache"));
// let k = localStorage.getItem("indiceCache");
