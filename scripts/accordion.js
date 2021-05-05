var acc = document.getElementsByClassName("accordion");
var i;
var j;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var allAccordions = document.getElementsByClassName("accordion");
     for (j = 0; j < allAccordions.length; j++) {
       allAccordions[j].classList.remove("active");
       allAccordions[j].nextElementSibling.style.maxHeight = null;
      }
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
