function toggleCols(event) {
    if (event.target && event.target.className == 'toggle-column') {
        var next = event.target.nextElementSibling;
        if (next.style.display == "none") {
            next.style.display = "block";
        } else {
            next.style.display = "none";
        }
    }
}
document.addEventListener('click', toggleCols, true);

function toggleRows(event) {
    if (event.target && event.target.className == 'toggle-row') {
        var next = event.target.nextElementSibling;
        if (next.style.visibility == "hidden") {
            next.style.visibility = "visible";
        } else {
            next.style.visibility = "hidden";
        }
    }
}
document.addEventListener('click', toggleRows, true);

/* includer ############################################################################################# */

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      } 
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}; 

/* tabbar ########################################################################################## */
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    if (next.style.display == "none") {
            next.style.display = "block";
        } else {
            next.style.display = "none";
        }
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}; 



