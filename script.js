var i;
var aboutPanel = document.getElementsByClassName("about-us-panel-button");
var servicePanel = document.getElementsByClassName("service-panel-button");
var homeButton = document.getElementsByClassName("home-panel-button")
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
var image = document.getElementById("logo")

for (i = 0; i < servicePanel.length; i++) {
  servicePanel[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.height){
      content.style.height = null;
      content.style.opacity = 0;
    } else {
      content.style.height = content.scrollHeight + "px";
      content.style.opacity = 100;
    }
  });
}


for (i = 0; i < homeButton.length; i++) {
  homeButton[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.height){
      content.style.height = null;
      content.style.opacity = 0;
    } else {
      content.style.height = content.scrollHeight + "px";
      content.style.opacity = 100;
    }
  });
}



for (i = 0; i < aboutPanel.length; i++) {
  aboutPanel[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.height){
      content.style.height = null;
      content.style.opacity = 0;
    } else {
      content.style.height = content.scrollHeight + "px";
      content.style.opacity = 100;
    }
  });
}

/* EARLY TESTING STAGE

if (prefersDarkScheme.matches) {
  image.src="images/ValleyTechLogoInverted.png"
} else {
  image.src="images/ValleyTechLogo.png"
}

*/