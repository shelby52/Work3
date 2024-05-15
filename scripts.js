document.getElementById('menu-button').addEventListener('click',function(){
    document.getElementById('dropdown').classList.toggle('open');
})
document.getElementById('ham').addEventListener('click',function(){
    document.getElementById('dropdown').classList.toggle('open')
})
function catalog(path){
    window.location.href = `sphones.html?path=${path}`
}
function sphones(){
    window.location.href =  "sphones.html";
}
function tabs(){
    window.location.href = "tablets.html";
}
function watch(){
    window.location.href = "watch.html";
}
function ten(){
    window.location.href = "top.html";
}
function tovar(path){
    window.location.href =  `tovar.html?path=${path}`;
}