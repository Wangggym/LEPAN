$(function () {
    lunbo();
    function lunbo() {
        var $ol = $('.banner ol li');
        var $ul = $('.banner ul li');
        var $prevBtn = $('#prevBtn');
        var $nextBtn = $('#nextBtn');
        var n = 1;
        var t = null;
        var timeOutTimer = null

        function fadeIng(n) {
            $ol.eq(n).addClass('ac').siblings().removeClass('ac');
            $ul.eq(n).fadeIn().siblings().fadeOut();
        }

        function move() {
            timeOutTimer = setTimeout(function () {
                t = setInterval(function () {
                    n++;
                    if (n == $ol.length) n = 1;
                    fadeIng(n);
                }, 3000);
            }, 500);
        };
        move();
//                $ol.on('click', function () {
//                    n = $(this).index();
//                    fadeIng(n);
//                    clearTimeout(timeOutTimer);
//                    clearInterval(t);
//                    move();
//                });
        $prevBtn.on('click', function () {
            n--;
            if (n == 0) n = $ol.length - 1;
            fadeIng(n);
            clearTimeout(timeOutTimer);
            clearInterval(t);
            move();
        });
        $nextBtn.on('click', function () {
            n++;
            if (n == $ol.length) n = 1;
            fadeIng(n);
            clearTimeout(timeOutTimer);
            clearInterval(t);
            move();
        })
    }
})