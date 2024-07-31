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
                options.innerHTML += `
                <h3 id="${m.id}">${m.name}</h3>
                <h4>${m.ubic}</h4>
                <div class="euro">
                    <div class="plata">
                        <i class="fa-solid fa-euro-sign" style="color: #4bec99;"></i>
                    </div>
                    <div class="plata">
                        <i class="fa-solid fa-euro-sign" style="color: #4bec99;"></i>
                    </div>
                    <div class="plata">${'<span class="icons">euro_symbol</span>'.repeat(3-e.value.cost)}</div>
                </div>
                <div class="puntu_resto">${'<span class="icons selected">star</span>'.repeat(e.value.stars)}</div>
                <div class="precio_resto"></div>
                <br><br><br>
                <div class="icons_resto">
                    <div class="iconos">
                        <div class="icon">
                            <i class="fa-regular fa-clock"></i>
                            <h3>${m.time}</h3>
                        </div>
                        <div class="icon">
                            <i class="fa-solid fa-location-dot"></i>
                            <h3>${m.dist}/h3>
                        </div>
                        <div class="icon">
                            <i class="fa-solid fa-bell-concierge"></i>
                            <h3>DELIVERY</h3>
                        </div>
                    </div>
                </div>
                <div class="descri"><p>${m.bio}</p></div>`;
            })
        }
    })
})

