$(document).ready(() => {
  $(".new-tweet textarea").on("keyup", (event) => {

    let characters = $(event.currentTarget).val().length;
    let remChara = 140 - characters;

    $(event.currentTarget).closest("form").find(".counter").text(remChara);
    if (remChara < 0) {
      $(event.currentTarget).closest("form").find(".counter").css("color", "red");
    } else {
      $(event.currentTarget).closest("form").find(".counter").css("color", "black");
    }
  });
});
