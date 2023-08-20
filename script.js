var about = document.getElementsByClassName("about-us-button");
var services = document.getElementsByClassName("services-button");
var contact = document.getElementsByClassName("contact-button");
var feedback = document.getElementsByClassName("feedback-button")
var i;

for (i = 0; i < about.length; i++) {
  about[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

for (i = 0; i < services.length; i++) {
  services[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

for (i = 0; i < contact.length; i++) {
  contact[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

for (i = 0; i < feedback.length; i++) {
  feedback[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

var servicePanel = document.getElementsByClassName("service-panel-button");

for (i = 0; i < servicePanel.length; i++) {
  servicePanel[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.height){
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight + "px";
    }
  });
}

var aboutPanel = document.getElementsByClassName("about-us-panel-button");

for (i = 0; i < aboutPanel.length; i++) {
  aboutPanel[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.height){
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight + "px";
    }
  });
}

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
var image = document.getElementById("logo")

if (prefersDarkScheme.matches) {
  image.src="images/ValleyTechLogoInverted.png"
} else {
  image.src="images/ValleyTechLogo.png"
}
