// business logic
var leapYear = function(year) {
  if (year % 100 === 0){
    return false;
  } else if (year % 4 === 0) {
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
    var result  = leapYear(year);
      $("#result").text(result);
  });
});
