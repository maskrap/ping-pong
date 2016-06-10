// =================BackEnd===================
var pongerator = function(number) {
  var pongNum = [];

  for (index = 1; index <= number; index ++) {
    // debugger;
    if (index % 15 === 0) {
      pongNum.push("pingpong");
      // break;
    }

    else if (index % 5 === 0) {
      pongNum.push("pong");
      // break;
    }

    else if (index % 3 === 0) {
      pongNum.push("ping");
      // break;
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

    pongResults.forEach(function(pongResult) {
    $(".results").append("<li>" + pongResult + "</li>");
    });
    // $('.results').show();
  });
});
