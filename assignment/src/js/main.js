const menu = document.querySelector("#menu");
const list = document.querySelector('#list');
let dem = 1;

menu.addEventListener ("click", function() {
    if (dem%2 == 0) {
        list.style = 'display: none';
    } else {
        list.style = 'display: block';
    }
    dem++;
})
    