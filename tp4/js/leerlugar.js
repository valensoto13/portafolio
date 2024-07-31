let options = document.getElementById('options');

let guardar = (id) => {
    localStorage.setItem("plato", id);
};

fetch('js/resto.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {

        let restoId = localStorage.getItem("resto");
        console.log('Resto ID:', restoId);  // Verifica el valor recuperado del localStorage

        data.forEach(e => {
            if (e.id == restoId) {
                document.querySelector("#resto-name").innerHTML = e.lugar;
                options.innerHTML = '';  // Limpia el contenido existente
                e.menu.forEach(m => {
                    options.innerHTML += `
                    <img src="${m.imagen}" alt="">
                    <h3 id="${m.id}">${m.lugar}</h3>
                    <h4>Overview</h4>
                    <br><br><br>
                    <div class="icons_resto">
                        <div class="iconos">
                            <div class="icon">
                                <div class="lado">
                                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                                    <h2>${m.ranking}</h2>
                                </div>
                                <h5>Rating</h5>
                            </div>
                            <div class="icon">
                                <div class="lado">
                                    <i class="fa-solid fa-cloud" style="color: #74C0FC;"></i>
                                    <h2>${m.grados}°C</h2>
                                </div>
                                <h5>Duration</h5>
                            </div>
                            <div class="icon">
                                <div class="lado">
                                    <i class="fa-regular fa-clock"></i>
                                    <h2>${m.duracion} hrs</h2>
                                </div>
                                <h5>Duration</h5>
                            </div>
                        </div>
                    </div>
                    <div class="descri">
                        <p>${m.descripcion}</p>
                    </div>`;
                });
            }
        });
    })
