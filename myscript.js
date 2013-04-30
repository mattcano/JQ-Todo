$(document).ready(function(){

  $("#add_btn").on("click", function (){
    
    var entry = $("#input-box").val();
    var newTD = $("<li><input type='checkbox'>" + entry + "</input><button class='delete_btn'>Delete</button></li>");
    newTD.appendTo($("#todos"));
    $("#input-box").val("");
    
    $(".delete_btn").on("click", function(){
      var myTD = $(this);
      myTD.parent().remove();
    });  

    $("input:checkbox").click( function(){
      var checkbox = $(this);
      var myTD = checkbox.parent();
      if (checkbox.is(":checked")) {
        myTD.css("color", "red");
        myTD.appendTo($("#completed"));
        myTD.css("text-decoration", "line-through");
      } else {
        myTD.css("color", "black");
        myTD.appendTo($("#todos"));
        myTD.css("text-decoration", "none");
      }
    });
  
  });


});  
