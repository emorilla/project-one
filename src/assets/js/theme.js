// Navbar Shrink
$(document).ready(function () {

  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $('.navbar').addClass('navbar-shrink');
    } else {
      $('.navbar').removeClass('navbar-shrink');
    }
  })

  // Active link switching 
  $(window).scroll(function () {
    const scrollbarLocation = $(this).scrollTop();

    $('.page-scroll').each(function () {
      const sectionOffset = $(this.hash).offset().top - 80

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });

  // Smooth Scrolling
  $('.page-scroll').click(function (e) {

    const linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - 57
    }, 1000, 'easeInOutExpo');

    e.preventDefault();

    $('.navbar-collapse').collapse('hide');
  })

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