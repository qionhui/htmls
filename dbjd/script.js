window.onload = function () {
    var imgTop = document.getElementsByClassName("img")[0];
    var l = 0;
    setInterval(function aaa() {
        l-=100;
        if(l <= -800)l = 0;
        imgTop.style.left = l+"%";
    },2000);
}