let randomCard = document.getElementById('random-card')

const getRndInteger = () => {
    let num = Math.floor(Math.random() * (825 - 0)) + 0;
    return num;
};

const getData = (url) => {
    let response = fetch(url)
        .then(res => res.json())
        .then(data => printData(data))
        .catch(err => console.log(err));
    
    return response;
}

const printData = (data) => {
    image = data.image
    let html = `
        <div class="card" style="width: auto">
            <div class="position-absolute close-btn" id="close-btn">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <img src='${image}' class="card-img-top" alt="imagen">
            <div class="cards-body">
                <p class="cards-title">Tu personaje random es <span class="text-infor">${data.name}</span></p>
                <hr/>
                <p><i class="fa-solid fa-person person-icon"></i> : ${data.species}</p>
                <p><i class="fa-solid fa-earth-americas"></i> : ${data.location.name}</p>
                <p><i class="fa-solid fa-heart-circle-exclamation"></i> : ${data.status}</p>
                <p><i class="fa-regular fa-calendar-days"></i> : ${data.created}</p>
            </div>
        </div>
    `
    document.querySelector('.bg-overlay').style.display="block"
    randomCard.style.display = "flex";
    randomCard.innerHTML += html
    btnCloseFunc();
}

const btnModal = () => {
    let btn = document.getElementById('btnModal');
    btn.addEventListener('click', () => {
        let random_id = getRndInteger();
        let API = `https://rickandmortyapi.com/api/character/${random_id}`;

        if (randomCard.innerHTML.length > 0) {
            randomCard.innerHTML = "";
        }
        getData(API);
    })
}

const btnCloseFunc = () => {
    let btnClose = document.getElementById('close-btn');
    btnClose.addEventListener('click', () => {
        console.log("hola")
        randomCard.style.display="none";
        document.querySelector('.bg-overlay').style.display="none"
    })
}

btnModal();