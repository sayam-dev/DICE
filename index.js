var randomNumber1 = Math.floor(Math.random() * 6) + 1;//1-6

//select random images using concatenations dice1.png - dice6.png
var randomDiceImage = "dice" + randomNumber1 + ".png"

//now going to use the string above to change the src of our image

//next part changing the attribute value of the src because it's static at the moment, we're going to change the string.


//in order to do so
//we have to tap in the src attribute of the image element because it also contains the name of the folder, therefore we have to add it by concatenations.

 var randomImageSource = "images/" + randomDiceImage;// images/dice1.png - images/dice6.png.

 //now we change the src attribute of the image element.

 //we select the element first

 var image1 = document.querySelectorAll("img")[0]

//now we can set it's attribute

image1.setAttribute("src", randomImageSource);




//now the 2nd image element - which has been coded down

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);








//title change depends on result using if/else statement


//if player 1 wins
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins!"
} else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "draw :)"
}


