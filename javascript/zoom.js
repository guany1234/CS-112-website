$(document).ready(function() {
  $("#in").click(function() {
    var currentWidth = $('#building').width();
    var currentHeight = $('#building').height();
    var newWidth = currentWidth * 1.2; // Increase width by 20%
    var newHeight = currentHeight * 1.2; // Increase height by 20%
    $('#building').width(newWidth);
    $('#building').height(newHeight);
  });

  $("#out").click(function() {
    var currentWidth = $('#building').width();
    var currentHeight = $('#building').height();
    var newWidth = currentWidth * 0.8; // Decrease width by 20%
    var newHeight = currentHeight * 0.8; // Decrease height by 20%
    $('#building').width(newWidth);
    $('#building').height(newHeight);
  });
});