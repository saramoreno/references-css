
$(document).ready(function() {

  $('#up-menu .more').click(function() {
  	$('#up-menu ul').slideToggle('medium');
    $('body').toggleClass('open-up-menu');
  });

});