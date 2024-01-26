var image = document.getElementById("likes");
var button = document.getElementById("pause");

    button.onclick = function() {
        if (this.value == 'pause') {
            image.style.display='none'
        } else {
            image.style.display='block'
        }
    
}