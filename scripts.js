// Select the navbar and collapsed navbar elements
var navbar = document.getElementById('navbar');
      

// Define the scroll event handler
function handleScroll() {
  // Check the current scroll position
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // If the scroll position is greater than or equal to 300 pixels, show the navbar; otherwise, hide it
  if (scrollPosition >= 150 && scrollPosition <= 2000) {
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }
}
// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);


$(document).ready(function() {
    // Menandai tautan yang sedang aktif saat halaman dimuat
    var currentSection = window.location.hash;
    $('a[href="' + currentSection + '"]').addClass('active');
  
    // Menandai tautan yang sedang aktif saat halaman di-scroll
    $(window).scroll(function() {
      var currentPosition = $(this).scrollTop();
      $('section').each(function() {
        var top = $(this).offset().top - 50;
        var bottom = top + $(this).outerHeight();
        if (currentPosition >= top && currentPosition <= bottom) {
          var sectionId = $(this).attr('id');
          $('a').removeClass('active');
          $('a[href="#' + sectionId + '"]').addClass('active');
        }
      });
    });
  });