let goods = [];
let WAY = "";
function loadXML(url) {
    return fetch(url)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            goods = Array.from(data.querySelectorAll('good')).map(goods => {
                return {
                    name: goods.querySelector('name').textContent,
                    price: goods.querySelector('price').textContent,
                    image: goods.querySelector('image').textContent,
                    about:goods.querySelector('about').textContent,
                };
            });
            return goods;
        });
}
function addItemsToDOM(items, nameURL) {
    const itemDetailsContainer = document.querySelector('.information'); // Выберите контейнер для деталей товара
    items.forEach(item => {
        if (nameURL === item.name){
            console.log('Exists');
            // Обновление содержимого контейнера деталей товара
            itemDetailsContainer.querySelector('#price').textContent = item.price;
            itemDetailsContainer.querySelector('#name').textContent = item.name;
            itemDetailsContainer.querySelector('#about').textContent = item.about;
            itemDetailsContainer.querySelector('#image').src = item.image;
            document.title = item.name;
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const nameURL = decodeURIComponent(params.get('itemName'));
    const secURL = decodeURIComponent(params.get('path'));
    WAY = "data/"+secURL+".xml";
    let category = document.getElementById('category-name');
    let currentItem = document.getElementById('name');
    currentItem.textContent;
    loadXML(WAY)
    .then(loadedItems => addItemsToDOM(loadedItems, nameURL)) // Исправленный вызов функции
    .catch(error => console.error('Ошибка при загрузке XML:', error));
});