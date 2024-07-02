let options = document.getElementById('options');

let guardar = (id) => {
    localStorage.setItem("plato", id);
};

fetch('js/resto.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(e => {
            if (e.id == localStorage.getItem("resto")) {
                document.querySelector("#resto-name").innerHTML = e.name;
            }
        })
        data.forEach(e => {
            if (e.id == localStorage.getItem("resto")) {
                e.menu.forEach(m => {
                    options.innerHTML += /*html*/`<article class="resto">
                        <div class="imagen-resto">
                            <img src="${m.img}">
                        </div>
                        <h2>${m.name}</h2>
                        <h4>${m.plato}</h4>
                        <p>${m.desc}</p>
                        <div class="puntu_resto">${'<span class="icons selected">star</span>'.repeat(e.value.stars)}</div>
                    </article><br>`;
                })
            }
        })
    })