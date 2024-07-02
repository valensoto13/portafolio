let options = document.getElementById('options');

let guardar = (id) => {
    localStorage.setItem("res", id);
};

fetch('js/resto.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        let restoId = localStorage.getItem("resto");

        if (!restoId) {
            throw new Error('No resto ID found in localStorage');
        }

        let foundResto = data.find(e => e.id == restoId);

        if (!foundResto) {
            throw new Error('Resto with ID ' + restoId + ' not found in JSON');
        }

        document.querySelector('#resto-name').innerHTML = foundResto.name;

        foundResto.menu.forEach(m => {
            options.innerHTML += /*html*/`
                <article class="resto">
                    <div class="imagen-resto">
                        <img src="${m.image}">
                    </div>
                    <h3>${m.plato}</h3>
                    <p>${m.description}</p>
                    <a href="plato.html">Leer más</a>
                    <div class="puntu_resto">$${m.price}</div>
                </article><br>`;
        });
    })
    .catch(error => {
        console.error('Error fetching or processing data:', error);
    });


// let plato = document.querySelector(".resultados")

// fetch('js/platos_peruanos.json')
// .then((response) => {
//      return response.json()
//     })
// .then((plato) => {
//       for (let i=0; i < plato.length; i++){
//         platos.innerHTML +=
//         /*html*/`<article class="resto">
//                         <div class="imagen-resto">
//                             <img src="${plato[i].image}">
//                         </div>
//                         <h3>${plato[i].plato}</h3>
//                         <p>${plato[i].description}</p>
//                         <a href="plato.html">Leer más</a>
//                         <div class="puntu_resto">$${plato[i].price}</div>
//                     </article><br>`;
       
//     }
// })
console.log("LocalStorage" + localStorage.getItem("variablelocal"));

let suma = 4444

//Guardar
localStorage.setItem("variablelocal", suma);

//Conseguir elemento
localStorage.getItem("variablelocal");

console.log("normal" + suma)
console.log("LocalStorage" + localStorage.getItem("variablelocal"));