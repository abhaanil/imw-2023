window.onload = function() {
    const canvas = document.getElementById('drawCanvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = 'crumpled-01.jpg'; 

    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    let isDrawing = false;

    function draw(e) {
        if (!isDrawing) return;

        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    });

    canvas.addEventListener('mousemove', draw);

    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    canvas.addEventListener('mouseout', () => {
        isDrawing = false;
    });
};
