var gif = document.getElementById('gif');
var peekabooButton = document.getElementById('peekabooButton');

function togglePeekaboo() {
    var jpeg = document.getElementById('jpeg');

    if (jpeg.style.visibility === 'visible') {
        jpeg.style.visibility = 'hidden';
        gif.style.visibility = 'visible';
        gif.play(); // Start playing the GIF
    } else {
        jpeg.style.visibility = 'visible';
        gif.style.visibility = 'hidden';
        gif.pause(); // Pause the GIF
        gif.currentTime = 0; // Reset the GIF to the beginning
    }
}
