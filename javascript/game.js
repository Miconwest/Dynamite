var images, die0neValue,dieTwoValue;
let images = ["dice1.jpg","dice2.jpg","dice3.jpg","dice4.jpg","dice5.jpg"]
function roll() {
    let die0neValue = Math.floor(Math.random()*6)+1;
    let dieTwoValue = Math.floor(Math.random()*6)+1;
    
    document.querySelector("#die_1").setAttribute("src", images[die0neValue]);
    document.querySelector("#die_2").setAttribute("src", images[dieTwoValue]);
}

//    // Player name
//    var player1 = "Player 1";
//    var player2 = "Player 2";
 
 
//    // Function to roll the dice
//    function rollTheDice() {
//        setTimeout(function () {
//            var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//            var randomNumber2 = Math.floor(Math.random() * 6) + 1;
 
//            document.querySelector(".img1").setAttribute("src",
//                "dice" + randomNumber1 + ".jpg");
 
//            document.querySelector(".img2").setAttribute("src",
//                "dice" + randomNumber2 + ".jpg");
 
//            if (randomNumber1 === randomNumber2) {
//                document.querySelector("h1").innerHTML = "Draw!";
//            }
 
//            else if (randomNumber1 < randomNumber2) {
//                document.querySelector("h1").innerHTML
//                                = (player2 + " WINS!");
//            }
 
//            else {
//                document.querySelector("h1").innerHTML
//                                = (player1 + " WINS!");
//            }
//        }, 2500);
//    }
