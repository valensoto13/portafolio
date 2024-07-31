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
        document.querySelector('.lugares').innerHTML +=
        /*html*/`<article class="lugar">
                <div class="imagen">
                    <img src="${e.imagen}" alt="">
                </div>
            <h3><a id=${e.id} href="lugares.html" onclick=guardar(id)>${e.lugar}</a></h3>
            <h4>$${e.precio}</h4>
        </article>` 
    });
})
