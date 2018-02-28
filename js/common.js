$(function () {
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
    function setHeaderAcTive() {
        var titleType = {
            'index': 1,
            'product': 2,
            'case': 3,
            "serve": 4,
            'news': 5,
            'humanity': 6,
            'joinUs': 7
        };
        for (var key in titleType) {
            if (window.location.pathname.indexOf(key) !== -1) {
                var $li = $('header div ul li');
                $li.eq(titleType[key]-1).addClass('active').siblings().removeClass('active');
            }
        }
    }
    lunbo();
    setHeaderAcTive();
})