let count = 1;
document.getElementById("radio1")

setInterval( function(){
    nextImage();
}, 5000)


function nextImage(){
    count++;
    if(count>4){
    count = 1;
}

document.getElementById("radio"+count).checked = true;

}