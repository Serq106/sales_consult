(function ($) {



    $(document).ready(function () {

        $('.mobile-menu').click(function () {

            $(this).toggleClass('active');

            $('.head-menu').slideToggle();

        })

    })


    $(document).ready(function(){

        var show = true;
        var countbox = "#counts";
        $(window).on("scroll load resize", function(){

            if(!show) return false;

            var w_top = $(window).scrollTop();
            var e_top = $(countbox).offset().top;

            var w_height = $(window).height();
            var d_height = $(document).height();

            var e_height = $(countbox).outerHeight();

            if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
                $(".spincrement").spincrement({
                    thousandSeparator: "",
                    duration: 1200
                });

                show = false;
            }
        });
    });


    var callback = function () {

        $('#callback').css({"visibility": "visible"});

        $('.modal-wrapper').addClass('open');

        $('.modal-block').css({"visibility": "visible"});

        var service = $(this).siblings('.item-name').text();

        $('#callback input[name="service"]').val(service);

    }

    var closeModal = function () {

        $('.modal-wrapper').removeClass('open');
        $('.modal-wrappers').removeClass('open');
        $("img").removeClass('hidde');
        window.setTimeout(function () {

            $('.modal-block').show().css({"visibility": "hidden"});

        }, 500);

    }

    var showThank = function () {

        window.setTimeout(function () {

            $('#thank').show().css({"visibility": "visible"});

            $('.modal-wrapper').addClass('open');


        }, 1500);

        window.setTimeout(function () {

            $('#thank').show().css({"visibility": "hidden"});

            $('.modal-wrapper').removeClass('open ');
            $('.modal-wrappers').removeClass('open');
            $("img").removeClass('hidde');


        }, 6000);


    }
    $(document).on('click', ".callback", callback);

    $(document).on('click', function (event) {

        if ($('.modal-wrapper').hasClass('open')) {

            var item = $(event.target);

            if (item.closest('.modal-wrapper').length != 0 && item.closest('.modal-block').length == 0) {

                closeModal()

            }
        }
        if ($('.modal-wrappers').hasClass('open')) {

            var item = $(event.target);

            if (item.closest('.modal-wrappers').length != 0 && item.closest('.modal-block').length == 0) {

                closeModal()
                $("img").removeClass('hidde');

            }
        }

    })
    $(window).on('load', function () {
        var $preloader = $('#p_prldr'),
            $svg_anm   = $preloader.find('.svg_anm');
        $svg_anm.fadeOut();
        $preloader.delay(500).fadeOut('slow');
    });
    $(function(){
        $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });
    });
    $(document).ready(function(){

        // Находим блок карусели
        var carousel = $("#carousel");

        // Запускаем плагин карусели
        carousel.owlCarousel({
            //singleItem: true, // Показывать только 1 блок на всю ширину

            // Количество отображающихся блоков в зависимости от устройства (ширины экрана)
            // Количество блоков на больших экранах
            items: 5,
            // 5 блоков на компьютерах (экран от 1400px до 901px)
            itemsDesktop : [1400,6],
            // 3 блока на маленьких компьютерах (экран от 900px до 601px)
            itemsDesktopSmall : [980,3],
            // 2 элемента на планшетах (экран от 600 до 480 пикселей)
            itemsTablet: [600,2],
            // Настройки для телефона отключены, в этом случае будут
            // использованы настройки планшета
            itemsMobile : false ,

            // Точки под каруселью
            pagination: true
        });

        // Назад
        // При клике на "Назад"
        $('#js-prev').click(function () {

            // Запускаем перемотку влево
            carousel.trigger('owl.prev');

            return false;
        });

        // Вперед
        // При клике на "Вперед"
        $('#js-next').click(function () {

            // Запускаем перемотку вправо
            carousel.trigger('owl.next');

            return false;
        });

        var slid = $("#slid");

        // Запускаем плагин карусели
        slid.owlCarousel({
            //singleItem: true, // Показывать только 1 блок на всю ширину

            // Количество отображающихся блоков в зависимости от устройства (ширины экрана)
            // Количество блоков на больших экранах
            items: 1,
            // 5 блоков на компьютерах (экран от 1400px до 901px)
            itemsDesktop : [1400,1],
            // 3 блока на маленьких компьютерах (экран от 900px до 601px)
            itemsDesktopSmall : [980,1],
            // 2 элемента на планшетах (экран от 600 до 480 пикселей)
            itemsTablet: [600,1],
            // Настройки для телефона отключены, в этом случае будут
            // использованы настройки планшета
            itemsMobile : false ,

            // Точки под каруселью
            pagination: true
        });

        // Назад
        // При клике на "Назад"
        $('.js-prev').click(function () {

            // Запускаем перемотку влево
            slid.trigger('owl.prev');

            return false;
        });

        // Вперед
        // При клике на "Вперед"
        $('.js-next').click(function () {

            // Запускаем перемотку вправо
            slid.trigger('owl.next');

            return false;
        });
    });


    $(".menu-item-1")
        .mouseover(function() {
            $('.hed-menu-usl').addClass('active');
        })
        .mouseout(function(){
            $('.menu-item-1').css('border-bottom', '2px solid #00adeb')
        });
    $('.close').on("click", function () {
        $('.hed-menu-usl').removeClass('active');
        $('.menu-item-1').removeAttr('style');
    })


})(jQuery)