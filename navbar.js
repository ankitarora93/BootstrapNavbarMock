$(document).ready(function() {
  $('.navbar-dropdown-icon').click(function() {
    var navbar = $('.navbar');
    navbar.toggleClass('responsive');

    // if(navbar.hasClass('responsive')) {
    //   navbar.slideUp(300).removeClass('responsive');
    // } else {
    //   navbar.slideDown(300).addClass('responsive');
    // }
  })
});
