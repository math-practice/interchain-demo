$("#open").click(function(){
  $(this).hide();
  $("#close").show();
  $("#target").slideDown('fast');
});
$("#close").click(function(){
  $("#target").hide();
  $("#close").hide();
  $("#open").show();
});
$("nav .block a").hover(function(){
    $(this).parent().addClass('hover');
  }, function() {
    $(this).parent().removeClass('hover');
  })