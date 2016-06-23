$(document).ready(start);

function start()  {
  $(".readmore").click(doReadMore);
  $(".readless").click(doReadLess);
  $(".learnmore").click(doLearnMore);
  $("a").click(overrideLinks);
}

function doReadMore() {
  $("#show-this-on-click").slideDown("slow");
  $(".readmore").hide();
  $(".readless").show();
}

function doReadLess() {
  $("#show-this-on-click").slideUp("slow");
  $(".readmore").show();
  $(".readless").hide();
}

function doLearnMore()  {
  $("#learnmoretext").slideDown("slow");
  $(".learnmore").hide();
}

function overrideLinks(e) {
  e.preventDefault();
}
