$(document).ready(function() {
  $('#basket,#account').hover(function() {
    $('#currency').css('width', '100px');
  }, function() {
    // on mouseout, reset the background colour
    $('#currency').css('width', '');
  });
});
