// Use jQuery to toggle the dropdown content
$(document).ready(function(){
  $('.dropbtn').click(function(){
      $('.dropdown-content').toggle();
  });

  // Close the dropdown when clicking outside of it
  $(document).click(function(event){
      if (!$(event.target).closest('.dropdown').length) {
          $('.dropdown-content').hide();
      }
  });
});

// Use jQuery to swipper
$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 60,
        centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});

$(document).ready(function(){
  var swiper = new Swiper('.swiper1', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-rev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
});