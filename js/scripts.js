// business logic
var leapYear = function(inputYear) {
  if ((inputYear % 4 === 0) && (inputYear % 100 ==! 0) || (inputYear % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};


// user interface logic
$(document).ready(function() {
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var inputYear = parseInt($("input#year").val());
    var result  = leapYear(inputYear);

    $(".year").text(year);

    if(!result) {
      $(".not").text("not")
    } else {
      $(".not").text("")
    }

      $("#result").text(result);
  });
});
