$(() => {
  $("#tweet-container").on("tweetsActive", () =>{
    $(".fa.fa-heart").on("click", (event) => {
      if ($(event.currentTarget).hasClass("redHeart")) {
        $(event.currentTarget).removeClass("redHeart");
      } else {
        $(event.currentTarget).addClass("redHeart");
      }
    });
    $(".fa.fa-retweet").on("click", (event) => {
      if ($(event.currentTarget).hasClass("blueRetweet")) {
        $(event.currentTarget).removeClass("blueRetweet");
      } else {
        $(event.currentTarget).addClass("blueRetweet");
      }
    });
    $(".fa.fa-flag").on("click", (event) => {
      if ($(event.currentTarget).hasClass("orangeFlag")) {
        $(event.currentTarget).removeClass("orangeFlag");
      } else {
        $(event.currentTarget).addClass("orangeFlag");
      }
    });
  });


  $(".logo").click(() => {
    if ($(".gif").is(":hidden")) {
      $(".gif").show();
    }
    return false;
  });

  $(".gif").click(() => {
    $(".gif").css("display", "none");
  });

});

