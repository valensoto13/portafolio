let options = document.getElementById('options');
let guardarPlato=(id)=>{
    localStorage.setItem("plato",id);
}

fetch('js/resto.json')
.then(response => response.json())
.then(data => {
    data.forEach(e => {
        if(e.id==localStorage.getItem("resto")){
            document.querySelector('#resto-name').innerText=e.name;
        }
    });
    data.forEach(e => {
        if(e.id==localStorage.getItem("resto")){
            e.menu.forEach(m=>{
                options.innerHTML +=/*html*/`
                <a id=${m.id} href="./saucer.html onclick="guardarPlato(id)">
                <div class=card-img>
                    <div class="card-price">${m.price}</div>
                </div>
                <div class="card-info">
                    <h3 class="card-name">${m.name}</h3>
                    <h3 class="card-desc">${m.desc}</h3>
                </div>
                </a>`
            })
        }
    });
})
