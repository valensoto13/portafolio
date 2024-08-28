// document.addEventListener('DOMContentLoaded', function() {
//     const id = localStorage.getItem('selectedPlaceId');

//     if (id) {
//         fetch('js/viajes.json')
//             .then(response => response.json())
//             .then(data => {
//                 const item = data.find(m => m.id === id);
//                 if (item) {
//                     document.querySelector('.resultados').innerHTML = `
                    
//                     `;
//                 } else {
//                     document.querySelector('.resultados').innerHTML = 'No se encontró el lugar.';
//                 }
//             })
//             .catch(error => console.error('Error fetching the JSON:', error));
//     } else {
//         document.querySelector('.resultados').innerHTML = 'No se ha seleccionado ningún lugar.';
//     }
// });


// document.addEventListener('DOMContentLoaded', function() {
//     fetch('js/alojamiento.json')
//         .then(response => response.json())
//         .then(data => {
//             const container = document.getElementById('alo');
//             container.innerHTML = ''; // Limpia el contenedor antes de agregar los datos

//             data.forEach(e => {
//                 const article = document.createElement('article');
//                 article.classList.add('resto');
                
//                 article.innerHTML = `

//                 <div class="imagen-resto">
//                     <img src="${e.alojamientos.imagen}">
//                 </div>
//                 <h3 id="${e.alojamientos.id}">${e.alojamientos.nombre}</h3>
//                 <h4>${e.alojamientos.lugar}</h4>
//                 <div class="iconos">
//                     <div class="icon">
//                         <div class="lado">
//                             <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
//                             <h2 class="ranking">${e.alojamientos.ranking}</h2>
//                          </div>
//                         <h5>Ranking</h5>
//                     </div>
//                     <div class="icon">
//                         <div class="lado">
//                             <i class="fa-solid fa-location-dot"></i>
//                             <h2 class="distancia">${e.alojamientos.distancia}</h2>
//                         </div>
//                         <h5>Distancia</h5>
//                     </div>
//                 </div>
//                 <div class="precio">$${e.alojamientos.precio}</div>
//                 <button class="btn">Ver</button>`;
                
//                 container.appendChild(article);
//             });

//             // Añadir el manejador de eventos para los enlaces después de cargarlos
//             document.querySelectorAll('a[data-id]').forEach(link => {
//                 link.addEventListener('click', function() {
//                     const id = this.getAttribute('data-id');
//                     localStorage.setItem('selectedPlaceId', id);
//                 });
//             });
//         })
//         .catch(error => console.error('Error fetching the JSON:', error));
// });


document.addEventListener('DOMContentLoaded', function() {
    let alojamientosData = [];

    fetch('js/alojamiento.json')
        .then(response => response.json())
        .then(data => {
            alojamientosData = data;
            mostrarAlojamientos(alojamientosData);
        })
        .catch(error => console.error('Error fetching the JSON:', error));

    function mostrarAlojamientos(alojamientos) {
        const container = document.getElementById('alo');
        container.innerHTML = '';

        alojamientos.forEach(e => {
            const alojamiento = e.alojamientos || e; // Maneja diferentes estructuras de JSON
            const article = document.createElement('article');
            article.classList.add('resto');

            article.innerHTML = `
                <div class="imagen-resto">
                    <img src="${alojamiento.imagen}" alt="${alojamiento.nombre}">
                </div>
                <h3 id="${alojamiento.id}">${alojamiento.nombre}</h3>
                <h4>${alojamiento.lugar}</h4>
                <div class="iconos">
                    <div class="icon">
                        <div class="lado">
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            <h2 class="ranking">${alojamiento.ranking}</h2>
                        </div>
                        <h5>Ranking</h5>
                    </div>
                    <div class="icon">
                        <div class="lado">
                            <i class="fa-solid fa-location-dot"></i>
                            <h2 class="distancia">${alojamiento.distancia}</h2>
                        </div>
                        <h5>Distancia</h5>
                    </div>
                </div>
                <div class="precio">$${alojamiento.precio}</div>
                <button class="btn" href="aloja.html">Ver</button>`;
            
            container.appendChild(article);
        });
    }

    const searchInput = document.querySelector('.buscador input[type="search"]');
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const filteredAlojamientos = alojamientosData.filter(e => {
            const alojamiento = e.alojamientos || e;
            return (
                alojamiento.nombre.toLowerCase().includes(query) ||
                alojamiento.lugar.toLowerCase().includes(query)
            );
        });
        mostrarAlojamientos(filteredAlojamientos);
    });
});
