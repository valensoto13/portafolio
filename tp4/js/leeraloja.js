document.addEventListener('DOMContentLoaded', function() {
    const id = localStorage.getItem('selectedPlaceId');

    if (id) {
        fetch('js/alojamiento.json')
            .then(response => response.json())
            .then(data => {
                const item = data.find(m => m.id === id);
                if (item) {
                    document.querySelector('.alojamiento').innerHTML = `
                        <div class="imagen">
                            <img src="${item.alojamiento.imagen}" alt="">
                        </div>
                        <h3 id="${item.alojamientos.id}">${item.alojamientos.lugar}</h3>
                        <h4>Overview</h4>
                        <br><br><br>
                        <div class="icons_resto">
                            <div class="iconos">
                                <div class="icon">
                                    <div class="lado">
                                        <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                                        <h2>${item.alojamientos.ranking}</h2>
                                    </div>
                                    <h5>Rating</h5>
                                </div>
                                <div class="icon">
                                    <div class="lado">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <h2 class="distancia">${alojamientos.distancia}</h2>
                                    </div>
                                    <h5>Distancia</h5>
                                </div>
                            </div>
                        </div>
                        <div class="descri">
                            <p>${item.alojamientos.descripcion}</p>
                        </div>
                        <div class="final">
                        <br>
                            <p>Total price: </p>
                            <h1>$${item.alojamientos.precio}</h1>
                        </div>
                    `;
                } else {
                    document.querySelector('.alojamiento').innerHTML = 'No se encontró el lugar.';
                }
            })
            .catch(error => console.error('Error fetching the JSON:', error));
    } else {
        document.querySelector('.alojamiento').innerHTML = 'No se ha seleccionado ningún lugar.';
    }
});