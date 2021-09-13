//DOM document object model
//a webpage is a document it can be displayed in the browser or as the hrml source 
//document is the object and it ahs the tags,etc as its properties
//scripting langauge such as js can be used to modify these DOM properties

//window
//doc
//html
    //head
        //meta
    //body
        //SCRIPT
//getElementById()//only name of id # not required first such id
//getElementByClassName()//only name of class //first such class
//getElementByTagName()//only tag 
//querySelector() //requires # for id , . for class
//querySelectorAll()//all the tags with the given selector

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



