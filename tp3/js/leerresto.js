let options = document.getElementById('options');

let guardar = (id) => {
    localStorage.setItem("plato", id);
};

fetch('js/resto.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let restoId = localStorage.getItem("resto");
        
        if (!restoId) {
            console.error("No hay un 'resto' en localStorage");
            return;
        }

        let resto = data.find(e => e.id == restoId);

        if (resto) {
            document.querySelector("#resto-name").innerHTML = resto.name;
            options.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevo contenido

            resto.menu.forEach(m => {
                options.innerHTML += `
                <h3 id="${m.id}">${m.name}</h3>
                <h4>${m.ubic}</h4>
                <div class="euro">
                    <div class="plata">
                        <i class="fa-solid fa-euro-sign" style="color: #4bec99;"></i>
                    </div>
                    <div class="plata">
                        <i class="fa-solid fa-euro-sign" style="color: #4bec99;"></i>
                    </div>
                    <div class="plata">${'<span class="icons">euro_symbol</span>'.repeat(3 - m.cost)}</div>
                </div>
                <div class="puntu_resto">${'<span class="icons selected">star</span>'.repeat(resto.stars)}</div>
                <div class="precio_resto"></div>
                <br><br><br>
                <div class="icons_resto">
                    <div class="iconos">
                        <div class="icon">
                            <i class="fa-regular fa-clock"></i>
                            <h3>${m.time}</h3>
                        </div>
                        <div class="icon">
                            <i class="fa-solid fa-location-dot"></i>
                            <h3>${m.dist}</h3>
                        </div>
                        <div class="icon">
                            <i class="fa-solid fa-bell-concierge"></i>
                            <h3>DELIVERY</h3>
                        </div>
                    </div>
                </div>
                <div class="descri"><p>${m.bio}</p></div>`;
            });
        } else {
            console.error("No se encontró el restaurante con id: " + restoId);
        }
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
