$(document).ready(function () {
      $('#google-maps-canvas').addClass('scrolloff');
      $('.google-maps').on('click', function () {
          $('#google-maps-canvas').removeClass('scrolloff');
      });
      $("#google-maps-canvas").mouseleave(function () {
          $('#google-maps-canvas').addClass('scrolloff');
      });
});
