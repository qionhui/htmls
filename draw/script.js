window.onload = function () {
    var css = document.getElementById("css");
    var textUl = document.getElementsByTagName("ul")[0];

    function play(num) {
        var width = 600 / num;
        var cssW  = "ul li,ul li div{width: "+width+"px;}";
        var cssDiv = "";
        var Zhtml = "";
        var z = 1;
        for (var i = 0;i < num;i++){
            if(i>num / 2){
                Zhtml += "ul li:nth-child("+(i+1)+") div{z-index: "+ (z++) +"}";
            }
            cssDiv += "ul li:nth-child("+(i+1)+") div{background-position:"+ (-width*i) +"px;" +
                "background-size: auto  400px" +
                "}";
            textUl.innerHTML += "<li><div></div><div></div> <div></div><div></div></li>";

        }
        css.innerHTML += cssW + cssDiv;
    }

    function start(){
        var r = 0;
        setInterval(function () {
            var ll = document.getElementsByTagName("li");
            r+=90;
            for(var i = 0;i < 300;i++){
                if(ll[i].style){
                    // ll[i].style.transform = "rotateX("+r+"deg)";
                    dh(i,r,i*5);
                }
            }

        },3000);
    }
    function dh(i,r,time){
        setTimeout(function () {
            document.getElementsByTagName("li")[i].style.transform = "rotateX("+r+"deg)";
        },time);
    }
    play(300);
    start();




}
