;(function ($) {
    $.fn.UItoTop = function(options) {
        var defaults = {
            text: '',
            min: 800,
            bottom: 77,
            inDelay:600,
            outDelay:400,
            containerID: 'toTop',
            containerHoverID: 'toTopHover',
            containerHoverHeight: 98,
            scrollSpeed: 1200,
            easingType: 'linear'
        }
        var settings = $.extend(defaults, options)
        var containerIDhash = '#' + settings.containerID
        var trans = 'transition' in document.body.style
        var parent = '<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>'
        var children = '<div id="toTopRope"></div>' +
            '<img id="' + settings.containerHoverID + '" src="//static.missevan.com/system/topscroll.png" />'

        $('body').append(parent)
        $(containerIDhash)
            .css('top', -$(containerIDhash).height() + 'px')
            .on('click.UItoTop', function () {
                $('html, body').animate({ scrollTop: 0 }, settings.scrollSpeed, settings.easingType)
                if ( trans ) {
                    $(containerIDhash).css('top', -$(containerIDhash).height() + 'px')
                } else {
                    $(containerIDhash).animate( { top: -$(containerIDhash).height() }, 1100, 'linear', function () {
                        if ($(window).scrollTop() === 0) {
                            $(containerIDhash).css('top', -$(containerIDhash).height() + 'px')
                        }
                    })
                }
                return false
            })
            .prepend(children)

        $(window).scroll(function() {
            var sd = $(window).scrollTop()
            if ( sd > settings.min ) {
                if ( trans ) {
                    $(containerIDhash).css('top', 0)
                } else {
                    $(containerIDhash).fadeIn(settings.inDelay)
                }
            } else {
                if ( trans ) {
                    $(containerIDhash).css('top', -$(containerIDhash).height() + 'px')
                }
                else {
                    $(containerIDhash).fadeOut(0)
                }
            }
        })
    }
})(jQuery);