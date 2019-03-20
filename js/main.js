// // In this file we will create events and form validations.
$(document).ready(function(){

  // Border animation for Nav items

  $('.navbar-nav li a').addClass('border-animation');


});


// Sticky Navigation

$(window).scroll(function(){

  if($(document).scrollTop() > 450){

    $('nav').addClass('fixed-top').addClass('sticky');

  }else{
    $('nav').removeClass('fixe-top').removeClass('sticky');
  }


});


// Navigation link

$('.nav-item #home').on('click', function(){

  $('html, body').animate({ scrollTop :0}, 1000);

});

$('.nav-item #landingspot').on('click', function () {

  $('html, body').animate({ scrollTop : 865 }, 1000);
}
);

$('.nav-item #weapons').on('click', function () {

  $('html, body').animate({ scrollTop : 1720 }, 1000);
}
);

$('.nav-item #legends').on('click', function () {

  $('html, body').animate({ scrollTop : 2890 }, 1000);
}
);
