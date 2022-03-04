 $(function() {
        //scroll 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。
        $(window).scroll(function() {
                var scroHei = $(window).scrollTop();//滚动的高度
                if (scroHei > 500) {
                   $('.back-to-top').css('top','-200px');
                   // $('.back-to-top').fadeIn();
                } else {                                                
                    $('.back-to-top').css('top','-999px');
                    // $('.back-to-top').fadeOut();
                }
            })
            /*点击返回顶部*/
        $('.back-to-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 600);
        })
    })


