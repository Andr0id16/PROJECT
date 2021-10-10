var headhtml=`<meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>WIKI</title>

    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="fontawesome-free-5.15.4-web/css/all.css">`;
window.onload=function(){
    var head = document.querySelector("head");
    head.innerHTML=headhtml;
};    
window.onscroll=()=>{sticknav();};
var nav=document.getElementById("nav");
var sticky = nav.offsetTop;
function sticknav()
{
    
    if(window.pageYOffset>=sticky)
    {
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
}









