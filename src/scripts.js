 // When the user scrolls down 50px from the top of the document, resize the header's font size
 window.onscroll = function() { scrollFunction() };

 function scrollFunction() {
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 30) {
         document.getElementById("header").style.backgroundColor = "#241C15";
         document.getElementById("header").style.color = "#f6f6f4";
     } else {
         document.getElementById("header").style.color = "#241C15";
         document.getElementById("header").style.backgroundColor = "#f6f6f4";
     }
 }