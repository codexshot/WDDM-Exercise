var button = document.getElementById("pause");

button.onclick = function () {
  if (document.getElementById("likes").style.display == "none") {
    document.getElementById("likes").style.display = "block";
    document.getElementById("pause").innerHTML = "Generate Random Number";
  } else {
    document.getElementById("likes").style.display = "none";
    document.getElementById("pause").innerHTML = "Pause";
  }
};
