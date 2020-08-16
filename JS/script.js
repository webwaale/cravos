$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    // autoplay: true,
    // autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      700: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
});
