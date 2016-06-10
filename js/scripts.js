// =================BackEnd===================
var pongerator = function(number) {
  var pongNum = [];
  for (index = 1; index <= number; index ++) {
    if (index % 15 === 0) {
      pongNum.push("pingpong");
    }
    else if (index % 5 === 0) {
      pongNum.push("pong");
    }
    else if (index % 3 === 0) {
      pongNum.push("ping");
    }
    else {
      pongNum.push(index);
    }
  }
  return pongNum
};

// =================FrontEnd==================
$(document).ready(function() {
  $('#pongform').submit(function(event) {
    event.preventDefault();
    var number = parseInt($('#numbers').val());
    pongResults = pongerator(number);
    $('.results li').remove();

    pongResults.forEach(function(pongResult) {
    $("ul.results").append("<li>" + pongResult + "</li>");
    });
    $('.results').show();

    if (number === 666) {
    $('#jesus').toggle();
    }
  });
});
