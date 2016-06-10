// =================BackEnd===================
var pongerator = function(number) {
  var pongNum = [];
  for (index = 0; index <= number; index ++) {
    // debugger;
    if (number % 15 === 0) {
      pongNum.push("pingpong");
      break;
    }

    else if (number % 5 === 0) {
      pongNum.push("pong");
      break;
      }

    else if (number % 3 === 0) {
      pongNum.push("ping");
      break;
      }

    else {
      pongNum.push(index);
      // break;
      }
  }
  return pongNum;
};


// =================FrontEnd==================
$(document).ready(function() {
  $('#pongform').submit(function(event) {
    event.preventDefault();

    var number = parseInt($('#numbers').val());
    pongResults = pongerator(number);

    pongResults.forEach(function(pongResult) {
    $('#results').append("<li>" + pongResult + "</li>");
    });
    // $('#results').show();
  });
});
