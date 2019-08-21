$(document).ready(function() {
  $("form#leapYear").submit(function(event) {
    event.preventDefault();

    var inputYear = parseInt($("#year").val());
    var outputYear = leapYear(year); //(year) is a submit listener

    var leapYear = function(year) {
      // inputYear === /4 && inputYear ==! /100 && inputYear === /400
      return false;
    };

    $("#result").text(outputYear);
  });
});
