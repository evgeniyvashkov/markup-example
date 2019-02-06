$(document).ready(function () {
    //слайдер
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',

        slideToClickedSlide: true,
        slidesPerView: 3,
        spaceBetween: 50,
        loop: true,


        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 320px

            // when window width is <= 480px
            479: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is <= 640px
            767: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }

    });

    //добавляет класс на бургер меню для открытия списка
    $('.trigger').click(function () {
        $(this).toggleClass('showMenu');
    });

    //анимация счетчика

    //при скролле отслеживиет чтобы анимация началась как только счетчик показывается на экране
    var startAnimationCoordinates = $('.statistic').offset().top - window.innerHeight;

    //показывает что счетчик уже создна и анимирован
    var createdCount = false;

    //если счетчик находится на экране то создается и прокручивается
    if ($(window).scrollTop() >= startAnimationCoordinates) {
        creatCount();
    }

    //вешается событие по скролу
    $(window).scroll(function () {
        if (!createdCount && $(window).scrollTop() >= startAnimationCoordinates) {
            creatCount();
        }
    });

    function creatCount() {
        $('.chart').easyPieChart({
            size: 200,
            //cкорость анимации
            animate: 3000,
            //цвет границы
            barColor: '#fe9a3f',
            scaleColor: false,

            onStep: function (from, to, percent) {
                $(this.el).find('.statisticCount').text(Math.round(percent));
            }
        });

        console.log("upadeted!")

        createdCount = true;
    }

});
