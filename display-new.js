let goods = [];
function loadXML(url) {
    return fetch(url)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            goods = Array.from(data.querySelectorAll('good')).map(goods => {
                return {
                    name: goods.querySelector('name').textContent,
                    price: goods.querySelector('price').textContent,
                    img: goods.querySelector('img').textContent,
                };
            });
            return goods;
        });
}
function addItemsToDOM(goods) {
    const goodsList = document.querySelector('.goods');
    goods.forEach(good => {
        const goodDiv = document.createElement('div');
        goodDiv.className = 'good-div';
        goodDiv.innerHTML = `
            <p>${good.name}</p>
            <img src="${good.img}">
            <p> ${good.price}</p>
            <button>В корзину</button>
        `;
        goodDiv.onclick = function () {
            loadItemDetails(WAY, good.name);
        };
        goodsList.appendChild(goodDiv);
    });
}
function loadItemDetails(xmlPath, itemName) {
    const params = new URLSearchParams(window.location.search);
    const pathURL = "data.xml";
    window.location.href = `tovar.html?itemName=${itemName}&path=${pathURL}`;

}

document.addEventListener('DOMContentLoaded', function () {

    loadXML("data.xml").then(() => {
        addItemsToDOM(goods);
    })
        .catch(error => console.error('Error fetching XML:', error));
})