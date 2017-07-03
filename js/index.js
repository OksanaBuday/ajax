loaded.innerHTML = (new Date ()).toLocaleTimeString();

document.getElementById('btn-get').addEventListener();

function getData(){
    var xrc = new XMLHttpRequest();
    xrc.onreadystatechange = function(){
    if (xrc.readyState === 4 && xrc.status === 200){
        var data = JSON.parse(xrc.responseText);
        document.getElementById('client-name').innerHTML
        document.getElementById('client-addres').innerHTML
    }
}
xrc.open ('GET', 'client-data.json', true);
xrc.send();
}