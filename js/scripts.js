// =================BackEnd===================

var pongerator = function(number) {
  var pongNum = [];
  var mulThree;
  var mulFive;
  var mulFifteen;
};

  for (i = 0; i; i++) {
    if (number % 15 === 0) {
      pongNum.push("pingpong");
    };
  };

    else if (number % 5 === 0) {
        pongNum.push("pong");
      };
    };

    else if (number % 3 === 0) {
        pongNum.push("ping");
      };
    };



// =================FrontEnd==================
$(function() {
  $('#pongform').submit(function(event) {
    event.preventDefault();
    var number = parseInt($('#numbers').val());

    var results = pongerator(number);
    $('#results').text(results);
