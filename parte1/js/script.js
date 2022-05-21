$(document).ready(function(){
    bannerHome();
});

function bannerHome(){
    $('.banner-box').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        dots: false,
        adaptiveHeight: true
    });
};