$(document).ready(function() {
  $('.card-slider').slick({
    dots: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      }
    ]
  });
});
