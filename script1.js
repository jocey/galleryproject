// essentially the w3s gallery script
function expand(imgs) {
    var expandImg = document.getElementById("expandedPhoto");
    var imgText = document.getElementById("caption");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

// remove any photo and caption currently displayed
// and replace it with text ??
function showAbout() {
    var expandImg = document.getElementById("expandedPhoto");
    expandImg.parentElement.style.display = "none";
    
/*    var txt = document.getElementById("aboutText");
    document.getElementById("caption")innerHTML= "txt";*/
}
