$(document).ready(function(){

  $("#add_btn").on("click", function (){
    
    var entry = $("#input-box").val();
    var newTD = $("<li>" + entry + "<button class=\"delete_btn\">Delete</button></li>");
    newTD.appendTo($("#todos"));
    
    $(".delete_btn").on("click", function(){
      newTD.remove();
    });  

    newTD.on("click", function(){
      var myTD = $(this);
      myTD.css("color", "red");
      myTD.appendTo($("#completed"));
    });
  
  });


});  
