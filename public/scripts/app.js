
$(document).ready(function () {

  $("#tweet-container").on("mouseenter", "article", (event) => {
    $(event.currentTarget).find("header").css("opacity", "1");
  }).on("mouseleave", "article", (event) => {
    $(event.currentTarget).find("header").css("opacity", ".5");
  });

  function createHeader (tweetObj) {
    const $header = $("<header>");
    const $avatar = $("<img>").attr("src", tweetObj.user.avatars.small);
    const $userName = $("<span>").text(tweetObj.user.name);
    const $handle = $("<span>").text(tweetObj.user.handle);
    $userName.addClass("full-name");
    $handle.addClass("id-name");
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
    const $flag = $("<i>");
    const $retweet = $("<i>");
    const $heart = $("<i>");
    let $icons = $("<span>");
    let $dates = $("<span>").text(dateCreated(tweetObj.created_at)).addClass("date");
    $flag.addClass("fa fa-flag").attr("aria-hidden", true);
    $retweet.addClass("fa fa-retweet").attr("aria-hidden", true);
    $heart.addClass("fa fa-heart").attr("aria-hidden", true);
    $icons.addClass("icons");
    $icons.append($flag, " ", $retweet, " ", $heart);
    $footer.append($dates, $icons);
    return $footer;
  }

  function createTweetElement (tweetObj) {
  const $tweet = $("<article>");
  const $header = createHeader(tweetData);
  const $content = createContent(tweetData);
  const $footer = createFooter(tweetData);
  $tweet.append($header,$content, $footer);
  return $tweet;
  }
var $tweet = createTweetElement(tweetData);
$('#tweet-container').append($tweet);
console.log($tweet); // to see what it looks like
});



var tweetData = {
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
}


// Test / driver code (temporary)