var purchase = document.getElementById("purchase");
//gak bisa select 2 class gt tau kenapa
var btn = document.getElementsByClassName("popup")[0];
var btn1 = document.getElementsByClassName("popup")[1];
var span = document.getElementsByClassName("close")[0];

// ketika user menekan button 
btn.onclick = function() {
  purchase.style.display = "block";
}

btn1.onclick = function() {
  purchase.style.display = "block";
}

// silang
span.onclick = function() {
  purchase.style.display = "none";
}

// ketika menekan diluar popup
window.onclick = function(event) {
  if (event.target == purchase) {
    purchase.style.display = "none";
  }
}