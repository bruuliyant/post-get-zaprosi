let body = document.querySelector('.wrapper');

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

        body.append(div)
        div.append(img);
        div.append(title);
        div.append(texta)
        texta.append(price);
        texta.append(skidka);
    }
}