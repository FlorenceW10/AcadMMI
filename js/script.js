var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

var btn1 = document.getElementsByClassName("projet")[0];
var btn2 = document.getElementsByClassName("projet")[1];
var btn3 = document.getElementsByClassName("projet")[2];

var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
    }

span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementsByClassName("projet")[3];
var span4 = document.getElementsByClassName("close")[3];

btn4.onclick = function() {
  modal4.style.display = "block";
}

span4.onclick = function() {
  modal4.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
      modal4.style.display = "none";
    }
}

var navLinks = document.querySelectorAll(".nav_projet a");
var projets = document.querySelectorAll(".projet");

navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        var category = this.textContent.toLowerCase().replace(' ', '-');

        projets.forEach(function(projet) {
            if (projet.classList.contains(category)) {
                projet.style.display = "block";
            } else {
                projet.style.display = "none";
            }
        });
    });
});