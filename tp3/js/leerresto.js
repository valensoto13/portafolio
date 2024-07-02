let resto = document.querySelector(".restaurantes")

fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
    .then((data) => {
      data.forEach(element => {
        resto.appendChild=""
    
      });
        // almaceno en la variable restaurante el valor de i del FOR
        let restaurante = data[i];

        let cartaRestaurante = document.createElement("div");
        cartaRestaurante.classList.add("resto");

        // almaceno en la variable cartaRestaurante.id el valor de i del restaurante.truck_id
        cartaRestaurante.id = restaurante.truck_id;

        cartaRestaurante.innerHTML = /*html*/`
              <h3>${restaurante[i].name}</h3>
              <h4>${restaurante[i].category}</h4>
              <div class="euro">
                <div class="plata">
                    <i class="fa-solid fa-euro-sign" style="color: #4bec99;"></i>
                </div>
                <div class="plata">
                    <i class="fa-solid fa-euro-sign" style="color: #4bec99;"></i>
                </div>
                <div class="plata">${restaurante[i].rango}</i>
                </div>
              </div>
              <div class="puntu_resto">${restaurante[i].puntuacion}</div>
              <div class="precio_resto"></div>
              <br><br><br>
              <div class="icons_resto">
                <div class="iconos">
                    <div class="icon">
                        <i class="fa-regular fa-clock"></i>
                        <h3>${restaurante[i].horario}</h3>
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
                <p>${restaurante[i].bio}</p>
              </div>` 

              cartaRestaurante.addEventListener("click", function () {
                let idRestauranteSeleccionado = restaurante.truck_id;
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
    