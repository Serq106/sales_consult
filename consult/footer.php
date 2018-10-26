<footer class="footer" id="contacts">
    <div class="container-wrapper">
        <div class="wrapper">
            <div class="title">
                <div class="wrapper">
                    <div class="item1">Свяжитесь со мной</div>
                    <div class="item2">Здесь располагается некий поясняющий текст, который кратко поясняет информацию, представленную в данном блоке</div>
                    <div class="item3"><input type="text" placeholder="Напишите Ваш электронный адрес"><a href="#" class="btn">Отправить</a></div>
                </div>
                </div>
            <div class="contact">
                <div class="phone"><a href="tel:+79153595858">+7 (915) 3595858</a></div>
                <a href="#"><div class="Twitter"><img src="inc/img/tw.png">Twitter</div></a>
                <a href="#"><div class="Facebook"><img src="inc/img/fb.png">Facebook</div></a>
                <a href="#"><div class="YouTube"><img src="inc/img/yt.png">YouTube</div></a>
            </div>
            <div class="menu">
                <div class="menu-item">Услуги</div>
                <div class="menu-item">О нас</div>
                <div class="menu-item">Кейсы</div>
                <div class="menu-item">Тренинги</div>
                <div class="menu-item">Блог</div>
                <div class="menu-item">Контакты</div>
            </div>
        </div>
    </div>
</footer>

<div class="copyring">
    <div class="copyring" id="copyring">
        <div class="container-wrapper" id="cw">
            <a href="#" target="_blank">
                <div class="text">© 2018 SalesUp Consult.Все права защищены</div>
                <div class="img">Разработка:<img src="inc/img/copyring.png"></div>

            </a>
        </div>
    </div>
</div>

<script type="text/javascript" src="inc/js/template.min.js"></script>
<script>
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



</script>
<script type="text/javascript">
    $(function(){
        $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });
    });
</script>
</body>
</html>
