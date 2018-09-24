$(document).ready(function () {
  // Navbar Shrink
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
        $('.navbar').addClass('navbar-shrink');
      } else {
        $('.navbar').removeClass('navbar-shrink');
      }
    })
  });

  // Init ScrollMagic
  const controller = new ScrollMagic.Controller();

  // Parallax Scene
  const slideParallaxScene = new ScrollMagic.Scene({
      triggerElement: '#home-parallax',
      triggerHook: 1,
      duration: '200%'
    })
    .setTween(TweenMax.from('.bg-parallax', 1, {
      y: '-60%',
      ease: Power0.easeNone
    }))
    .addTo(controller);
});