let scroll = function () {
  let $nav = $('#cxo-intro-nav'),
    $nav_a = $('#cxo-intro-nav>section>div a,#cxo-intro-nav i'),
    $toc = $('.toc-wrapper'),
    tocTop = $toc.css('top'),
    introHeight = $('#cxo-intro').height(),
    $progressBar = $('.read-progress'),
    $go_up = $('#go-up'),
    $nav_drop = $('.intro-nav-drop')
  // 滚动
  let previousHeight = 0,
    continueScroll = 0

  function isScrollingUpOrDown(currTop) {
    continueScroll = currTop - previousHeight
    previousHeight = currTop
    if (continueScroll > 10) {
      // 向下滑动
      continueScroll = 0
      return 1
    } else if (continueScroll < -20) {
      // 向上滑动
      continueScroll = 0
      return -1
    } else {
      return 0
    }
  }

  // 滚动超过intro
  let crossingState = -1
  let isHigherThanIntro = true
  function isCrossingIntro(currTop) {
    // 向下滑动超过intro
    if (currTop > introHeight) {
      if (crossingState !== 1) {
        crossingState = 1
        isHigherThanIntro = false
        return 1
      }
    } else {
      // 向上滑动超过intro
      if (crossingState !== -1) {
        crossingState = -1
        isHigherThanIntro = true
        return -1
      }
    }
    return 0
  }

  // 判断是否为post-page
  let isPostPage = false
  let articleHeight,
    articleTop
  if ($('#post').length) {
    isPostPage = true
    articleTop = introHeight
    articleHeight = $('.article-entry').outerHeight()
  }

  function updateProgress(scrollTop, beginY, contentHeight) {
    let windowHeight = $(window).height()
    let readPercent
    if (scrollTop < introHeight) {
      readPercent = 0
    } else {
      readPercent = (scrollTop - beginY) / (contentHeight - windowHeight) * 100
    }
    readPercent = readPercent >= 100 ? 100 : readPercent
    $progressBar[0].style.width = `${readPercent}%`
  }

  function findHeadPosition(scrollTop) {
    if (isPostPage) {
      let list = $('#post').find('h1,h2,h3,h4,h5,h6'),
        currentId = ''
      list.each(function () {
        let head = $(this)
        if (head.offset().top < scrollTop) {
          currentId = '#' + head.attr('id')
        }
      })
      let currentToc = $('.toc-link.active')
      if (currentId && currentToc.attr('href') !== currentId) {
        $('.toc-link').removeClass('active')
        let _this = $('.toc-link[href="' + currentId + '"]')
        _this.addClass('active')
        _this.parents('.toc-child').siblings('.toc-link').addClass('active')
      }
    }
  }

  let navHeight = $nav.outerHeight()
  function updateScroll(scrollTop) {
    let upDownState = isScrollingUpOrDown(scrollTop),
      crossingState = isCrossingIntro(scrollTop)
    if (upDownState === 1) {
      $nav.css('top', -navHeight + 'px')
      $nav_drop.addClass('no-visible')
      // $nav.removeClass('banner-show')
    } else if (upDownState === -1) {
      $nav.css('top', 0)
      $nav_drop.removeClass('no-visible')
    }
    if (scrollTop === 0) {
      $nav_a.removeClass('main-color')
      $nav.css('top', 0)
      $nav.removeClass('nav-style-two')
      $go_up.addClass('close')
    } else {
      $nav.addClass('nav-style-two')
      $nav_a.addClass('main-color')
      $go_up.removeClass('close')
    }
    // 如果不是post - page 以下忽略
    if (isPostPage) {
      if (crossingState === 1) {
        $toc.css('position', 'fixed')
        $toc.css('top', '0')
      } else if (crossingState === -1) {
        $toc.css('position', 'absolute')
        $toc.css('top', tocTop)
      }
      // 进度条君的长度
      updateProgress(scrollTop, articleTop, articleHeight)
      findHeadPosition(scrollTop)
    }
    // previousHeight = scrollTop
    // tickingScroll = false
  }

  function onScroll() {
    let scrollTop = $(document).scrollTop()
    updateScroll(scrollTop)
  }

  $(document).on('scroll', onScroll)
}

export default scroll