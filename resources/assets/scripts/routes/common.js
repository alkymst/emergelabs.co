export default {
  init() {
    // JavaScript to be fired on all pages

    // Dropdown menu
    if ($(window).width() <= 1200) {
      var $menu = $('#menu'),
          $menuTrigger = $('.menu-item-has-children .menu-toggle');

      $menuTrigger.on('click', function(e) {
        e.preventDefault();
        $('.nav-primary a').removeClass('active');
        $('.nav-primary .sub-menu').removeClass('active');
        $(this).closest('li').toggleClass('active').next('ul').toggleClass('active');
      });
    }
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
