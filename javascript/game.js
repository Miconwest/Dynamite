var images, die0neValue,dieTwoValue;
let images = ["dice 1.jpg","dice 2.jpg","dice 3.jpg","dice 4.jpg","dice 5.jpg"]
function roll() {
    let die0neValue = Math.floor(Math.random()*6)+1;
    let dieTwoValue = Math.floor(Math.random()*6)+1;
    
    document.querySelector("#die_1").setAttribute("src", images[die0neValue]);
    document.querySelector("#die_2").setAttribute("src", images[dieTwoValue]);
}