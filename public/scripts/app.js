
$(() => {

  $("#tweetContainer").on("mouseenter", "article", (event) => {
    $(event.currentTarget).find("header").css("opacity", "1");
    $(event.currentTarget).find(".icons").css("display", "inline");
  }).on("mouseleave", "article", (event) => {
    $(event.currentTarget).find("header").css("opacity", ".5");
    $(event.currentTarget).find(".icons").css("display", "none");
  });

  $("button").click(() => {
    if ($(".newTweet").is(":animated")) {
      return false;
    }
    $(".newTweet").slideToggle("slow", () => {
      $( ".newTweet textarea" ).focus();
    });
  });

  function createHeader (tweetObj) {
    const $header = $("<header>");
    const $avatar = $("<img>").attr("src", tweetObj.user.avatars.small);
    const $userName = $("<span>").text(tweetObj.user.name).addClass("fullName");
    const $handle = $("<span>").text(tweetObj.user.handle).addClass("idName");
    $header.append($userName, $avatar, $handle);
    return $header;
  }

  function createContent (tweetObj) {
    const $content = $("<p>").text(tweetObj.content.text);
    return $content;
  }

  function dateCreated (ms) {
    const miliSecs = Date.now() - ms;
    if (miliSecs >= 86400000) {
      days = (miliSecs / 86400000);
      if (Math.floor(days) === 1) {
        return (Math.floor(days) + " day ago");
      }
      return (Math.floor(days) + " days ago");
    }
    if (miliSecs >= 3600000) {
      hours = (miliSecs / 3600000);
      if (Math.floor(hours) === 1) {
        return (Math.floor(hours) + " hour ago");
      }
      return (Math.floor(hours) + " hours ago");
    }
    if (miliSecs >= 60000) {
      minutes = (miliSecs / 60000);
      if (Math.floor(minutes) === 1) {
        return (Math.floor(minutes) + " minute ago");
      }
      return (Math.floor(minutes) + " minutes ago");
    }
    seconds = (miliSecs / 1000) ;
    return (Math.floor(seconds) + " seconds ago");
  }

  function createFooter (tweetObj) {
    const $footer = $("<footer>");
    const $flag = $("<i>").addClass("fa fa-flag").attr("aria-hidden", true);
    const $retweet = $("<i>").addClass("fa fa-retweet").attr("aria-hidden", true);
    const $heart = $("<i>").addClass("fa fa-heart").attr("aria-hidden", true);
    let $icons = $("<span>").addClass("icons");
    let $dates = $("<span>").text(dateCreated(tweetObj.created_at)).addClass("date");
    $icons.append($flag, " ", $retweet, " ", $heart);
    $footer.append($dates, $icons);
    return $footer;
  }

  function createTweetElement (tweetObj) {
    const $tweet = $("<article>");
    const $header = createHeader(tweetObj);
    const $content = createContent(tweetObj);
    const $footer = createFooter(tweetObj);
    $tweet.append($header, $content, $footer);
    return $tweet;
  }

  function renderTweets(tweets) {
    tweets.forEach(tweet => {
      $("#tweetContainer").prepend(createTweetElement(tweet));
    });
  }

  function loadTweet () {
    $.ajax({
      method: "GET",
      url: "/tweets"
    }).then((respose) => {
      $("#tweetContainer").empty();
      renderTweets(respose)
      $("#tweetContainer").trigger("tweetsActive");
    });
  }

  $("form").on("submit", (event) => {
    event.preventDefault();
    if ($("textarea").val().length > 140) {
      sweetAlert("Calm Down", "Please only enter 140 characters", "error");
      return;
    }
    if (!$.trim($("textarea").val())) {
      sweetAlert("Hey You!", "No empty tweets","error");
      return;
    }

    const data = $(event.currentTarget).serialize();
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: data
    }).then(() => {
      $("textarea").val("");
      $(".counter").text("140");
      loadTweet();
    });
  });
  loadTweet();
});
