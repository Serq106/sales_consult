(function ($) {



    $(document).ready(function () {



        /*var callback = function () {

            $('#callback').css({"visibility": "visible"});

            $('.modal-wrapper').addClass('open');

            $('.modal-block').css({"visibility": "visible"});

            var service = $(this).siblings('.item-name').text();

            $('#callback input[name="service"]').val(service);

        }

        var closeModal = function () {

            $('.modal-wrapper').removeClass('open');

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

            }, 6000);


        }

        var freeCons = function () {

            var $form = $(this);

            var dataForm = $form.serialize();

            $.ajax({

                type: "POST",

                url: "/wp-admin/admin-ajax.php?action=freeCons",

                data: dataForm,

                beforeSend: function (data) {

                    $form.find('button[type="submit"]').prop("disabled", true);

                },

                success: function (data) {

                    if (data.status == 'success') {

                        $form.trigger('reset');

                        closeModal();

                        showThank();

                    } else {

                        alert('Произошла ошибка обработки запроса');

                    }

                },

                error: function () {

                    alert('Произошла ошибка соединения');

                },

                complete: function (data) {

                    $form.find('button[type="submit"]').prop("disabled", false);

                },

            });

            return false;

        }


        $(document).on('click', '.callback,.item-callback', callback);*/



        /*$(document).on('click', '.close-modal', closeModal);

        $(document).on('click', function (event) {

            if ($('.modal-wrapper').hasClass('open')) {

                var item = $(event.target);

                if (item.closest('.modal-wrapper').length != 0 && item.closest('.modal-block').length == 0) {

                    closeModal()

                }

            }

        })*/


        $('.mobile-menu').click(function () {

            $(this).toggleClass('active');

            $('.head-menu').slideToggle();

        })

    })


    /*$(document).scroll(function () {

        if ($(this).scrollTop() > 1000) {

            $('.button-up').fadeIn();

        } else {

            $('.button-up').fadeOut();

        }

    });

    $('.button-up').on("click", function () {

        $('body,html').animate({

            scrollTop: 0

        }, 800);

        return false;

    });
	
	function optionsNone(){
        $('.ov').css('display', 'none');
        $('.tt').css('display', 'none');
        $('.sen').css('display', 'none');
        $('.mono').css('display', 'none');
        $('.dd').css('display', 'none');
        $('.bak').css('display', 'none');
    }
     $('.pipe').on('change', '', function (e) {
        var type = $('.pipe option:selected').attr('id');
        if(type == 'oval-cross-section'){
            optionsNone();
            $('.ov').css('display', 'block');
            $('.tt').css('display', 'block');
        } else if (type == 'mono'){
            optionsNone();
            $('.mono').css('display', 'block');
            $('.tt').css('display', 'block');
        } else if( type == 'sendvich'){
            optionsNone();
            $('.sen').css('display', 'block');
            $('.dd').css('display', 'block');
        } else if(type == 'bak'){
            optionsNone();
            $('.bak').css('display', 'block');
            $('.tt').css('display', 'block');
        }
    })
     $('.diameter, .pipe, .mark, .thickness').on('change', '', function (e) {	
         $.ajax({	
            url: "/wp-admin/admin-ajax.php?action=reload_product",	
            type: 'POST',	
            data: {	
                pipe: $('.pipe option:selected').attr('id'),	
                diameter: $('.diameter option:selected').attr('id'),	
                mark: $('.mark option:selected').attr('id'),	
                thickness: $('.thickness option:selected').attr('id'),	
            },	
             success: function( data ) {	
                $('.table table').remove();	
                $('.table').append(data);
                if($('.pipe option:selected').attr('id') == 'sendvich'){
                    $('.filtr-item.last').css("display", "none")
                } else {
                    $('.filtr-item.last').css("display", "block")
                }

            }	
        });	
     });	
     $(window).on('load', function () {	
        $.ajax({	
            url: "/wp-admin/admin-ajax.php?action=reload_product",	
            type: 'POST',	
            data: {	
                pipe: $('.pipe option:selected').attr('id'),	
                diameter: $('.diameter option:selected').attr('id'),	
                mark: $('.mark option:selected').attr('id'),	
                thickness: $('.thickness option:selected').attr('id'),	
            },	
             success: function( data ) {	
                $('.table table').remove();	
                $('.ov').css('display', 'block');	
                $('.tt').css('display', 'block');	
                $('.table').append(data);	
            }	
        });	
    });*/
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


})(jQuery)