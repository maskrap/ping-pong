// =================BackEnd===================

var pongerator = function(number) {
  var pongNum = [];
  // var mulThree;
  // var mulFive;
  // var mulFifteen;
};

  for (index = 0; index <= pongNum.length; index++) {
    if (number % 15 === 0) {
      pongNum.push("pingpong");
    };

    else if (number % 5 === 0) {
        pongNum.push("pong");
      };

    else if (number % 3 === 0) {
        pongNum.push("ping");
      };

    else {
      pongNum.push(index);
      }
  };



// =================FrontEnd==================
$(function() {
  $('#pongform').submit(function(event) {
    event.preventDefault();
    var number = parseInt($('#numbers').val());
    pongNum = pongerator(number);

    var results = pongerator(number);
    $('#results').append("<li>" + pongNum[index] + "</li>");
