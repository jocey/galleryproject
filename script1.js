// essentially the w3s gallery script
function expand(imgs) {
    // reset the .display properties
    document.getElementById("expandedPhoto").style.display="initial"
    document.getElementById("caption").style.display="block"
    
    // image changing script
    var expandImg = document.getElementById("expandedPhoto");
    var imgText = document.getElementById("caption");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
    imgText.parentElement.style.display = "block";
    document.getElementById("aboutText").style.display="none"
    
}

// remove any photo and caption currently displayed
// and replace it with the aboutText
function showAbout() {
    document.getElementById("expandedPhoto").style.display="none"
    document.getElementById("caption").style.display="none"
    document.getElementById("aboutText").style.display="block"
}
