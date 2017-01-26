$(() => {
  $("#tweet-container").on("tweetsActive", () =>{
    $(".fa.fa-heart").on("click", (event) => {
      ($(event.currentTarget).toggleClass("redHeart"));
    });
    $(".fa.fa-retweet").on("click", (event) => {
      ($(event.currentTarget).toggleClass("blueRetweet"));
    });
    $(".fa.fa-flag").on("click", (event) => {
      ($(event.currentTarget).toggleClass("orangeFlag"))
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

