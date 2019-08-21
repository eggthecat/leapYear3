// bl
var leapYear = function(year) {
  if (year %4===0 && year%400===0) {
    return true
  } else {
    return false;
  };
};

// uil
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var inputYear = parseInt($("input#year").val());
    console.log(inputYear);
    var result  = leapYear(year);
    console.log(result);
      $("#result").text(result);
  });
});
