window.onscroll = () => {
    sticknav();
};

var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

function sticknav() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}