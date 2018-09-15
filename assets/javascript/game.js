var targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
$("#randomNumber").text(targetNumber);

var counter = 0;
$("#userNumber").text(counter);

var wins = 0;
$("#wins").text("Wins: " + wins);

var losses = 0;
$("#losses").text("Losses: " + losses);

var messageText = [];
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var image1 = document.getElementsByClassName("crystal1")
var image2 = document.getElementsByClassName("crystal2")
var image3 = document.getElementsByClassName("crystal3")
var image4 = document.getElementsByClassName("crystal4")


var crystalValue1 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
crystalValue1 = parseInt(crystalValue1);
console.log(crystalValue1);

var crystalValue2 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
crystalValue2 = parseInt(crystalValue2);
console.log(crystalValue2);

var crystalValue3 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
crystalValue3 = parseInt(crystalValue3);
console.log(crystalValue3);

var crystalValue4 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
crystalValue4 = parseInt(crystalValue4);
console.log(crystalValue4);



$(image1).on("click", function () {
    counter += crystalValue1;
    $("#userNumber").text(counter);

    if (counter === targetNumber) {
        messageText = "You Win!";
        $("#message").text(messageText);
        wins++;
        $("#wins").text("Wins: " + wins);
        reset();

    }

    else if (counter > targetNumber) {
        messageText = "You Lose!";
        $("#message").text(messageText);
        losses++;
        $("#losses").text("Losses: " + losses);
        reset();

    }

})

$(image2).on("click", function () {
    counter += crystalValue2;
    $("#userNumber").text(counter);

    if (counter === targetNumber) {
        messageText = "You Win!";
        $("#message").text(messageText);
        wins++;
        $("#wins").text("Wins: " + wins);
        reset();

    }

    else if (counter > targetNumber) {
        messageText = "You Lose!";
        $("#message").text(messageText);
        losses++;
        $("#losses").text("Losses: " + losses);
        reset();

    }

})

$(image3).on("click", function () {
    counter += crystalValue3;
    $("#userNumber").text(counter);

    if (counter === targetNumber) {
        messageText = "You Win!";
        $("#message").text(messageText);
        wins++;
        $("#wins").text("Wins: " + wins);
        reset();
    }

    else if (counter > targetNumber) {
        messageText = "You Lose!";
        $("#message").text(messageText);
        losses++;
        $("#losses").text("Losses: " + losses);
        reset();

    }

})

$(image4).on("click", function () {
    counter += crystalValue4;
    $("#userNumber").text(counter);

    if (counter === targetNumber) {
        messageText = "You Win!";
        $("#message").text(messageText);
        wins++;
        $("#wins").text("Wins: " + wins);
        reset()

    }

    else if (counter > targetNumber) {
        messageText = "You Lose!";
        $("#message").text(messageText);
        losses++;
        $("#losses").text("Losses: " + losses);
        reset();

    }

})

function reset() {

    counter = 0;
    $("#userNumber").text(counter);

    targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#randomNumber").text(targetNumber);

    crystalValue1 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    crystalValue1 = parseInt(crystalValue1);
    console.log(crystalValue1);

    crystalValue2 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    crystalValue2 = parseInt(crystalValue2);
    console.log(crystalValue2);

    crystalValue3 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    crystalValue3 = parseInt(crystalValue3);
    console.log(crystalValue3);

    crystalValue4 = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    crystalValue4 = parseInt(crystalValue4);
    console.log(crystalValue4);


}