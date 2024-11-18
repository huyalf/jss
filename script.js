function upDate(previewPic) {
    
    console.log("Mouseover event triggered!");

    
    console.log("Source:", previewPic.src);
    console.log("Alt text:", previewPic.alt);

    
    const imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;

    
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
}

function undo() {
    
    console.log("Mouseout event triggered!");

    
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";

    
    imageDiv.innerHTML = "Hover over an image below to display here.";
}