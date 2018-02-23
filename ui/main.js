console.log('Loaded!');

var element=document.getElementById("main-text");
element.innerHTML=" NEw value";


var img=document.getElementById("img");
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
    img.style.marginLeft='100px';
};
