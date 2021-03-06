//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  }
};
$("document").ready(function () {
  app.init();
  $('#hide-province').click(function(){
    $('#province .content').slideToggle();
    $('.close-arrow, .open-arrow').toggle();
  });
  $('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('toggle');
    $('.navbar-brand').toggleClass('hide');
    $('.navbar-brand .logo-mobile').toggleClass('hide');
  });
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 100){
        $('.fixed-top').removeClass('sticky');
    } else{
        $('.fixed-top').addClass('sticky');
    }
});
});
