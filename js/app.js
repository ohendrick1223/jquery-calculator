"use strict";
$(document).ready(function() {

    var answer = [];

    function screenIt(event) {
        var screenDiv = $("#screen");
        var input = $(event.target).text();
        var isOperator = $(event.target).hasClass("operator");
        var changeToStr = ''

        if (screenDiv.text() === "error") {
            return;
        }

        if (isOperator) {
            //console.log(input)
            switch (input) {
                case "C":
                    screenDiv.text("");
                    break;
                case "=":
                    changeToStr = (screenDiv.text());
                    screenDiv.text(eval(changeToStr));
                    break;
                case "+":
                    screenDiv.text(screenDiv.text() + input);
                    break;
                case "-":
                    screenDiv.text(screenDiv.text() + input);
                    break;
                case "x":
                    screenDiv.text(screenDiv.text() + "*");
                    break;
                case "÷":
                  screenDiv.text(screenDiv.text() + "/");
                    break;
                default:
                    screenDiv.text(screenDiv.text() + input);
                    break;
            }
        } else {
            screenDiv.text(screenDiv.text() + input);
        }
    }

    $("span").on("click", screenIt);

});
