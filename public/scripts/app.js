/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
  $("#tweet-container").on("mouseenter", "article", (event) => {
    $(event.currentTarget).find("header").css("opacity", "1");
  }).on("mouseleave", "article", (event) => {
    $(event.currentTarget).find("header").css("opacity", ".5");
  });
});