$(".multiple-items").slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,


});

// On swipe event
$('.your-element').on('swipe', function (event, slick, direction) {
    console.log(direction);
    // left
});

// On edge hit
$('.your-element').on('edge', function (event, slick, direction) {
    console.log('edge was hit')
});

// On before slide change
$('.your-element').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log(nextSlide);
});



