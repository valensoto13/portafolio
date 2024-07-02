
let options = document.getElementById('options')

let guardar=(id)=>{
    localStorage.setItem("res",id);
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
        }
    });   
})

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