var currentImage = 0;
var numberImages = 4;

var changeImage = function(n) {
    $('.slider-screen').eq(currentImage).addClass('hidden');
    $('.dot').eq(currentImage).removeClass('dot-selected');
    currentImage = n;
    $('.slider-screen').eq(currentImage).removeClass('hidden');
    $('.dot').eq(currentImage).addClass('dot-selected');
};

var valueArrow = function(side) {
    if (side == 'left') {
        if (currentImage === 0) {
            n = numberImages - 1;
        } else {
            n = currentImage - 1;
        }

    } else {
        n = (currentImage + 1) % numberImages;
    }

    return n;
};

var clickArrow = function(side) {
    n = valueArrow(side);
    changeImage(n);
};

var startAutomaticSlider = function() {
    automaticSlider = setInterval(function() {clickArrow('right');}, 5000);
};

var resetCounterAutomaticSlider = function() {
    clearInterval(automaticSlider);
    startAutomaticSlider();
};

var hoverArrowIn = function(side) {
    n = valueArrow(side);
    classToAdd = "slider-screen-".concat(n);

    if (side == "left") {
        $("#mini-image-left").addClass(classToAdd);
    } else {
        $("#mini-image-right").addClass(classToAdd);
    }
};

var hoverArrowOut = function(side) {
    n = valueArrow(side);
    classToRemove = "slider-screen-".concat(n);

    if (side == "left") {
        $("#mini-image-left").removeClass(classToRemove);
    } else {
        $("#mini-image-right").removeClass(classToRemove);
    }
};


$( function() {

    changeImage(currentImage);

    startAutomaticSlider();

    $('#dots').on('click','div', function() {
        changeImage($(this).index());
        resetCounterAutomaticSlider();
    });

    $('#slider-left-arrow').on('mouseenter', function() {
        hoverArrowIn('left');
    });

    $('#slider-right-arrow').on('mouseenter', function() {
        hoverArrowIn('right');
    });

    $('#slider-left-arrow').on('mouseleave', function() {
        hoverArrowOut('left');
    });

    $('#slider-right-arrow').on('mouseleave', function() {
        hoverArrowOut('right');
    });

    $('#slider-left-arrow').on('click', function(event) {
        hoverArrowOut('left');
        clickArrow('left');
        hoverArrowIn('left');
        resetCounterAutomaticSlider();
    });

    $('#slider-right-arrow').on('click', function(event) {
        hoverArrowOut('right');
        clickArrow('right');
        hoverArrowIn('right');
        resetCounterAutomaticSlider();
    });


});
