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
                        <section class="splide p-5" aria-label="Splide Basic HTML Example">
                            <div class="splide__track">
                                  <ul class="splide__list">
                                      <li class="splide__slide"><h2 class="text-center"><img src="${e.imagen}" alt="placeholden image"></h2></li>
                                  </ul>
                            </div>
                        </section>
                    </div>
                <h3><a id=${e.id} href="lugares.html" onclick=guardar(id)>${e.lugar}</a></h3>
                <h4>$${e.precio}</h4>
            </article>` 
    });
})

document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
  } );
