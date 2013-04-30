$(document).ready(function(){

  $("#add_btn").on("click", function (){
    var entry = $("#input-box").val();
    var delete_btn = $("<button>Delete</button>");
    var newTD = $("<li>" + entry + "</li>");
    newTD.appendTo($("#todos"));
  });


});  
