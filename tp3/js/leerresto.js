
let options = document.getElementById('options')

let guardar=(id)=>{
    localStorage.setItem("plato",id);
}

fetch('js/resto.json')
.then((response) => {
     return response.json()
    })
.then(data => {
    data.forEach(e => {
        if(e.id==localStorage.getItem("resto")){
            document.querySelector('#resto-name').innerHTML=e.name;
        }
    })
    data.forEach(e => {
        if (e.id==localStorage.getItem("resto")) {
            e.menu.forEach(m => {
                options.innerHTML +=/*html*/`
                <h3 id="${e.id}">${e[i].name}</h3>
                <h4>${e[i].category}</h4>
                <div class="euro">
                  <div class="plata">
                    <i class="fa-solid fa-euro-sign" style="color: #4bec99;"></i>
                  </div>
                  <div class="plata">
                    <i class="fa-solid fa-euro-sign" style="color: #4bec99;"></i>
                  </div>
                  <div class="plata">${e[i].rango}</i></div>
                </div>
                <div class="puntu_resto">${e[i].puntuacion}</div>
                <div class="precio_resto"></div>
                <br><br><br>
                <div class="icons_resto">
                  <div class="iconos">
                    <div class="icon">
                        <i class="fa-regular fa-clock"></i>
                        <h3>${e[i].horario}</h3>
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
                <div class="descri"><p>${e[i].bio}</p></div>`;
            });
        }
    });   
})



//   fetch('js/restaurantes.json')

//   .then(response => {
    
//     return response.json()
//   })

//   .then(data => {
//     data.forEach(e=>{
//       document.getElementById('restoList').innerHTML +=/html/`
        
//       <a id="${e.id}" href="./menu.html" class="restaurantes flex" onClick="guardar(id)">
//         <div class="img center">
//           <img src="${e.img.src}" alt="${e.img.alt}" />
//           <div class="distancia">${e.dist}</div>
//         </div>
//         <div class="descripcion">
//         <div class="nombre">${e.name}</div>
//         <div class="datos">
//           <div>${e.ubic}</div>
//           <div>${e.time}</div>
//         </div>
//         <div class="valoracion flex">
//           <div class="estrellas flex">
//             ${'<span class="icons selected">star</span>'.repeat(e.value.stars)}
//             ${'<span class="icons">star</span>'.repeat(5-e.value.stars)}
//             <div class="n-resenias">(${e.value.coments})</div>
//           </div>
//           <div class="costo">
//             ${'<span class="icons selected">euro_symbol</span>'.repeat(e.value.cost)}
//             ${'<span class="icons">euro_symbol</span>'.repeat(3-e.value.cost)}
//           </div>
//         </div>
//         <div class="puntaje">${e.value.stars}</div>
//         </div>
//       </a>`

//     })
//   })

// fetch('js/restaurantes.json')
// .then(response => {
//      return response.json()
//     })
//     .then((data) => {
//       data.forEach(element => {
//         resto.appendChild=""
    
//       });
//         // almaceno en la variable restaurante el valor de i del FOR
//         let restaurante = data[i];

//         let cartaRestaurante = document.createElement("div");
//         cartaRestaurante.classList.add("resto");

//         // almaceno en la variable cartaRestaurante.id el valor de i del restaurante.truck_id
//         cartaRestaurante.id = restaurante.truck_id;

//         cartaRestaurante.innerHTML = /*html*/`
              

//               cartaRestaurante.addEventListener("click", function () {
//                 let idRestauranteSeleccionado = restaurante.truck_id;
//                 //almaceno en CACHÉ la variable indiceCache el valor de idRestauranteSeleccionado
//                 localStorage.setItem("indiceCache", idRestauranteSeleccionado);
//                 console.log(idRestauranteSeleccionado);
//               });
        
//               resto.appendChild(cartaRestaurante);
//             }
//           );
        
//         // obtengo desde la caché el valor almacenado en indiceCache
//         console.log("con localstorage " + localStorage.getItem("indiceCache"));
//         let k = localStorage.getItem("indiceCache");        
    

