/* owl.carousel */
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop:true,
  autoHeight:true,
  items:1,
  margin:10,
  nav:false,
  responsive : {
      0:{
        // nav:true
    },
    600:{
        // nav:true
    },
    992:{
        nav:true
    }
  }
});

///////////////////////////////////////

// mobile navigation

document.querySelector('#gamburger').onclick = function() {
  document.querySelector('.navigation-mobile-block').style.display = 'block';
};

document.querySelector('#close').onclick = function() {
  document.querySelector('.navigation-mobile-block').style.display = 'none';
};