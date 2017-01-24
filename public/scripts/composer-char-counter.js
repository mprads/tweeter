$(document).ready(function () {
  $('.new-tweet textarea').on('keyup', function () {
    let characters = $(this).val().length;
    let remChara = 140 - characters;
    $(this).closest('form').find('.counter').text(remChara);
    if (remChara < 0) {
      $(this).closest('form').find('.counter').css('color', 'red');
    } else {
      $(this).closest('form').find('.counter').css('color', 'black');
    }
  });
});