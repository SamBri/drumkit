numberOfDrums = document.querySelectorAll(".drum").length;


//for clicks
for(var i = 0; i < numberOfDrums; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  //  this.style.color = "white";
var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
}
   );

}

//for keypress
document.addEventListener("keypress", function(event)
{
   //console.log(event);

   makeSound(event.key);

   buttonAnimation(event.key);

}
);


function makeSound(key)
{
  // var choseKey = "."+ key; //change keypress color to white
  // document.querySelector(choseKey).style.color = "white";

  switch (key) {
    case "w":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:
    console.log(buttonInnerHTML);

  }

  //change color to red after keypress
  //document.querySelector(choseKey).style.color = "#DA0463";

  }

  function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);


    //change button color using classList
    activeButton.classList.add("pressed");

    //delay for 100ms then release color effect
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);

    //change button color using setAttribute()
    /*
    var getClass = activeButton.getAttribute("class");
    getClass = getClass + " " + "pressed";

    activeButton = activeButton.setAttribute("class", getClass);
    */

  }
