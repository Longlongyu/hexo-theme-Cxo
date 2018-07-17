
function init() {
  if (!sessionStorage.getItem('profile') || (sessionStorage.getItem('profile') && sessionStorage.getItem('profile') === 'true')) {
    $('#cxo-profile').removeClass('profile-close')
  }

  if ($(document).scrollTop() !== 0) {
    $('#go-up').removeClass('chose')
  }
  // profile收起
  function profileClose(e) {
    let $parent = $(this).parents('#cxo-profile')
    if ($parent && !$parent.hasClass('profile-close')) {
      $parent.addClass('profile-close')
      sessionStorage.setItem('profile', 'false')
    } else if ($parent && $parent.hasClass('profile-close')) {
      $parent.removeClass('profile-close')
      sessionStorage.setItem('profile', 'true')
    }
  }
  // go-up收起
  function goUpClose() {
    $('html, body').animate({ scrollTop: 0 }, '500')
  }
  $('.profile-avatar>i').on('click', profileClose)
  $('#go-up').on('click', goUpClose)
}

export default init