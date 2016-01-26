var currentImage = 0;
var numberImages = 4;

var changeImage = function(n) {
    $('.slider-screen').eq(currentImage).addClass('hidden');
    $('.dot').eq(currentImage).removeClass('dot-selected');
    currentImage = n;
    $('.slider-screen').eq(currentImage).removeClass('hidden');
    $('.dot').eq(currentImage).addClass('dot-selected');
};

var clickArrow = function(side) {
    if (side == 'left') {
        if (currentImage === 0) {
            n = numberImages - 1;
        } else {
            n = currentImage - 1;
        }

    } else {
        n = (currentImage + 1) % numberImages;
    }

    changeImage(n);
};

var startAutomaticSlider = function() {
     automaticSlider = setInterval(function() {clickArrow('right');}, 3000);
};

var resetCounterAutomaticSlider = function() {
    clearInterval(automaticSlider);
    startAutomaticSlider();
};


$( function() {

    changeImage(currentImage);

    startAutomaticSlider();

    $('#dots').on('click','div', function() {
        changeImage($(this).index());
        resetCounterAutomaticSlider();
    });

    $('#slider-left-arrow').on('click', function(event) {
        clickArrow('left');
        resetCounterAutomaticSlider();
    });

    $('#slider-right-arrow').on('click', function(event) {
        clickArrow('right');
        resetCounterAutomaticSlider();
    });


});
