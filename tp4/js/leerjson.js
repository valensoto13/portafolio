let options = document.getElementById('options');

let guardar = (id) => {
    localStorage.setItem("viaje", id);
};


fetch('js/viajes.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(e => {
            document.querySelector('.contenedor').innerHTML +=
        /*html*/`
            <article class="lugar">
                <img src="${e.imagen}" alt="">
            </article>`
        });
    })


