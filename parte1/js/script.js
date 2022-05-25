$(document).ready(function(){
    bannerHome();
    slickNavMobile();
    slickShelf();
});

function bannerHome(){
    $('.banner-box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        dots: false,
        adaptiveHeight: true
    });

    $('.banner-box-mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        dots: false,
        adaptiveHeight: true
    });
};

function slickNavMobile() {
    if (window.innerWidth < 1024) {
        $('.pics').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            dots: false,
            arrows: false,
            adaptiveHeight: true
        })
    }
};

function slickShelf() {
    if (window.innerWidth < 1024) {
        $('.shelf .products').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1500,
            dots: false,
            arrows: true,
            adaptiveHeight: true
        });

        $('.bar-benefits').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            dots: false,
            arrows: false,
            adaptiveHeight: true
        })
    }
}