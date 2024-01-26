var button = document.getElementById("pause");

button.onclick = function () {
  changeText();
  // if (document.getElementById("likes").style.display == "none") {
  //   document.getElementById("likes").style.display = "block";
  //   document.getElementById("pause").innerHTML = "Generate Random Number";
 
  // } else {
  //   document.getElementById("likes").style.display = "none";
  //   document.getElementById("pause").innerHTML = "Generate again";

  // }
};
// Generate a random number between 1 and 100
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }



function changeText() {
    // Get the element by its id
    var element = document.getElementById("randomText");

    // Check if the element exists
    if (element) {
      // Change the text content
    var  text=getRandomNumber();
      element.textContent = `Your lucky number is ${text}`;
    } else {
      console.error("Element not found");
    }
  }