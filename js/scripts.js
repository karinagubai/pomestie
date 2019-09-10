// show-hide main-nav on small devices

$('.open-nav').on('click', function(){
  $('.main-nav').css("display", "block");
});
$('.main-nav').on('click', 'a', function(){
  if($(window).width() < 992) {
    $('.main-nav').hide();
  }
});
$('.close-nav').on('click', function(){
  $('.main-nav').hide();
});

$(window).on('scroll', function(){
  if ($(window).scrollTop() > 50) {
          $('.main-header').addClass('sticky');
      } else {
          $('.main-header').removeClass('sticky');
      }
});

$(window).resize(function(){
  if ($(window).width() > 991) {
        $('.main-nav').css("display", "block");
    } else {
        $('.main-nav').hide();
    }
});

// carousel

$('.right').on('click', function(){
  $('.project:first').insertAfter('.project:last');
});
$('.left').on('click', function(){
  $('.project:last').insertBefore('.project:first');
});

// inputmask

$(document).ready(function(){
  $('input[type="tel"]').inputmask("+7 (999) 999 99 99");
});
