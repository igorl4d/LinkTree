function toggle(){
    document.querySelector("#body").classList.remove('grad1');
    document.querySelector("#body").classList.add('night');
    document.querySelector('#checkbox').setAttribute('onclick','toggle2()');


}

function toggle2(){
    document.querySelector("#body").classList.remove('night');
    document.querySelector("#body").classList.add('grad1');
    document.querySelector('#checkbox').setAttribute('onclick','toggle()')


}