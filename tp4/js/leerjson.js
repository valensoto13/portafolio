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
        /*html*/`` 
    });
})


