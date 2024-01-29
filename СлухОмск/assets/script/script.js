window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
};

$("#owl-demo-1").owlCarousel({
  loop:true,
  nav: true,
  margin:10,
  responsiveClass:true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  autoWidth: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoHeight:true,
  dots: true,
  dotsEach: true,
  responsive:{
      0:{
        items:1,
        nav:true
      },
      575:{
          items:2,
          nav:true
      },
      991:{
          items:4,
          nav:true
      }
  }
});

$("#owl-demo-2").owlCarousel({
  loop:true,
  nav: true,
  margin:10,
  responsiveClass:true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  autoWidth: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoHeight:true,
  dots: true,
  dotsEach: true,
  responsive:{
    0:{
      items:1,
      nav:true
    },
    575:{
        items:2,
        nav:true
    },
    991:{
        items:3,
        nav:true
    }
  }
});

$("#owl-demo-3").owlCarousel({
  loop:true,
  nav: true,
  margin:10,
  responsiveClass:true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  autoWidth: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoHeight:true,
  dots: true,
  dotsEach: true,
  responsive:{
    0:{
      items:1,
      nav:true
    },
    575:{
        items:2,
        nav:true
    },
    991:{
        items:3,
        nav:true
    }
  }
});
