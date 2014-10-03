
$(document).ready(function() {

  $('#up-menu .more').click(function() {
    $('body').toggleClass('open-up-menu');
    $('#up-menu ul').slideToggle('fast');
  });

});