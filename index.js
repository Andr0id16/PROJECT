// var head=document.querySelector("head");
// head.innerHTML+=`<link rel="apple-touch-icon" href="/apple-touch-icon.png">
// <link rel="icon" favicon-32x32.png">
// <link rel="icon"  href="/favicon-16x16.png">
// <link rel="manifest" href="/site.webmanifest">`;
// head.innerHTML+='<link rel="shortcut icon" href="favicon.ico"/>';
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









