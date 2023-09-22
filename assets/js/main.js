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
  var swiper = new Swiper(".mySwiper2", {
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});