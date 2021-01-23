$(function () {
  var select_panel = $("ul.tab li a.selected").attr("href");
  $("ul.panel li:not(" + select_panel + ")").hide();

  $("ul.tab li a").click(function () {
    $("ul.tab li a.selected").removeClass("selected");
    $(this).addClass("selected");
    $("ul.panel li").hide();
    $($(this).attr("href")).show();
    return false;
  });
});
