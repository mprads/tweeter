
$(document).ready(() => {

  $("#tweet-container").on("mouseenter", "article", (event) => {
    $(event.currentTarget).find("header").css("opacity", "1");
  }).on("mouseleave", "article", (event) => {
    $(event.currentTarget).find("header").css("opacity", ".5");
  });

  function createHeader (tweetObj) {
    const $header = $("<header>");
    const $avatar = $("<img>").attr("src", tweetObj.user.avatars.small);
    const $userName = $("<span>").text(tweetObj.user.name).addClass("full-name");
    const $handle = $("<span>").text(tweetObj.user.handle).addClass("id-name");
    $header.append($userName, $avatar, $handle);
    return $header;
  }

  function createContent (tweetObj) {
    const $content = $("<p>").text(tweetObj.content.text);
    return $content;
  }

 function dateCreated (ms){
  const miliSecs = Date.now() - ms;
  if (miliSecs >= 86400000) {
    days = (miliSecs / 86400000);
    return (Math.floor(days) + " days ago");
  }
  if (miliSecs >= 3600000) {
    hours = (miliSecs / 3600000);
    return (Math.floor(hours) + " hours ago");
  }
  if (miliSecs >= 60000) {
    minutes = (miliSecs / 60000);
    return (Math.floor(minutes) + " minutes ago");
  } else {
    seconds = (miliSecs / 1000) ;
    return (Math.floor(seconds)+ " seconds ago");
  }
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
      $("#tweet-container").append(createTweetElement(tweet));
    });
  }
  renderTweets(data);
});



var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];