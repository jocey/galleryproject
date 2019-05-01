// display gallery images
function expand(imgs) {
    // reset the .display properties
    document.getElementById("expandedPhoto").style.display="initial";
    document.getElementById("caption").style.display="block";
    document.getElementById("about").style.display="none";
       
    // image changing script
    var expandImg = document.getElementById("expandedPhoto");
    var imgText = document.getElementById("caption");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
    imgText.parentElement.style.display = "block";
}


// remove any photo and caption currently displayed
// and replace it with the aboutText
function showAbout() {
    document.getElementById("expandedPhoto").style.display="none";
    document.getElementById("caption").style.display="none";
    document.getElementById("about").style.display="block";
}


// if aspect ratio is desktoppy:
// image can toggle between height settings -
// "88vh" (88% of viewport height)
// "auto" (fills width of .main)

function togglezoom() {

    if (window.matchMedia("(max-aspect-ratio: 5/4)").matches) 
    {
        return;
    } 
    else if (document.getElementById("expandedPhoto").style.height === "88vh")
    {
        document.getElementById("expandedPhoto").style.height = "auto";
        document.getElementById("expandedPhoto").style.width = "90%";
        document.getElementById("expandedPhoto").style.cursor = "zoom-out";
    }
    else 
    {
        document.getElementById("expandedPhoto").style.height = "88vh";
        document.getElementById("expandedPhoto").style.width = "auto";
        document.getElementById("expandedPhoto").style.cursor = "zoom-in";
    }

}