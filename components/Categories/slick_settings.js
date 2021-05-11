export default {
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  dots: false,
  infinite: false,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
};