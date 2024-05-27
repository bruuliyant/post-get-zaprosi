let ody = document.querySelector('.wrapper');
let left = document.querySelector('.left')
let right = document.querySelector('.right')
let pokaz = document.querySelector('.pokaz')
let fof = 0

console.log('arbuz');

axios.get('https://raw.githubusercontent.com/bruuliyant/json/main/server.json')
    .then(function (response) {
        let data = response.data.tovar;
        console.log(data);
        get_elem(data)

    })
    .catch(function (error) {
        console.log(error);
    });



let get_elem = (arr) => {
    for (let item of arr) {
        let texta = document.createElement('div')
        let div = document.createElement('div')
        let title = document.createElement('p');
        let img = document.createElement('img');
        let price = document.createElement('p');
        let skidka = document.createElement('p');

        div.classList.add('div')
        img.classList.add('img')
        title.classList.add('tittle')
        skidka.classList.add('skidka')
        price.classList.add('price')
        texta.classList.add('texta')

        skidka.textContent = item.skidka;
        price.textContent = item.price;
        img.src = item.img;
        title.textContent = item.tittle;

        ody.append(div)
        div.append(img);
        div.append(title);
        div.append(texta)
        texta.append(price);
        texta.append(skidka);
    }
}

left.addEventListener('click', function () {
    fof = fof - 345
    if (fof < 0) {
        fof = 3795
    }
    ody.style.left = -fof + 'px'
})

right.addEventListener('click', function () {
    fof = fof + 345
    if (fof > 3795) {
        fof = 0
    }
    ody.style.left = -fof + 'px'
})

pokaz.addEventListener('click', (event) => {
    event.preventDefault()
    left.classList.toggle('a')
    right.classList.toggle('a')
    ody.classList.toggle('b')
})