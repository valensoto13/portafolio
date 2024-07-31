let options = document.getElementById('options');

let guardar = (id) => {
    localStorage.setItem("viaje", id);
};

document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
  } );

fetch('js/viajes.json')
.then(response => {
     return response.json()
    })
.then(data => {
    data.forEach(e => {
        document.querySelector('.lugares').innerHTML +=
        /*html*/`            <img class="control prev" src="img/img1.png" alt="">
            <article class="lugar">
                <img src="${e.imagen}" alt="">
                </article>
            <img class="control next" src="img/img2.png" alt="">` 
    });
})


