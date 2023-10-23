
$(document).ready(function() {
    let lefteyeballArr = $('.lefteyeball');
    let righteyeballArr = $('.righteyeball');

    // Movement ranges
    let lefteyeballXStart = -30;
    let lefteyeballXRange = 60;
    let lefteyeballYStart = -30;
    let lefteyeballYRange = 60;
    
    let righteyeballXStart = -30;
    let righteyeballXRange = 60;
    let righteyeballYStart = -30;
    let righteyeballYRange = 60;

    // Mouse position range
    let mouseXStartPoint = 30;
    let mouseXEndPoint = $(window).width() - 30;
    let mouseYStartPoint = 30;
    let mouseYEndPoint = $(window).height() - 30;

    function moveEyeball(eyeballArr, xStart, xRange, yStart, yRange) {
        $(document).on('mousemove', function(event) {
            // Calculate the fraction of X and Y positions
            const fracX = (event.clientX - mouseXStartPoint) / (mouseXEndPoint - mouseXStartPoint);
            const fracY = (event.clientY - mouseYStartPoint) / (mouseYEndPoint - mouseYStartPoint);
    
            // Calculate the new position of the eyeball along the X and Y axes
            const eyeballXCurrentPosition = xStart + fracX * xRange;
            const eyeballYCurrentPosition = yStart + fracY * yRange;
    
            // Apply the transformation to the eyeballs
            eyeballArr.css({
                'transform': `translate(${eyeballXCurrentPosition}px, ${eyeballYCurrentPosition}px)`
            });
        });
    }

    moveEyeball(lefteyeballArr, lefteyeballXStart, lefteyeballXRange, lefteyeballYStart, lefteyeballYRange);
    moveEyeball(righteyeballArr, righteyeballXStart, righteyeballXRange, righteyeballYStart, righteyeballYRange);
});

