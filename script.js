
function drop() {
  document.getElementById('p1').style.bottom = "0px";
  document.getElementById('p1').style.transition = "bottom 0.15s";
  document.getElementById('p2').style.bottom = "0px";
  document.getElementById('p2').style.transition = "bottom 0.15s";
  document.getElementById('p3').style.bottom = "0px";
  document.getElementById('p3').style.transition = "bottom 0.15s";
  document.getElementById('i1').style.transform = "rotate(-45deg)";
  document.getElementById('i1').style.transition = "transform 0.15s"
  document.getElementById('i3').style.transform = "rotate(45deg)";
  document.getElementById('i3').style.transition = "transform 0.15s"
  document.getElementById('i2').style.display = "none";
  document.getElementById('i2').style.transition = "display 0.15s";
  document.getElementById('mask2').style.display = "block";

}

function up() {
  document.getElementById('p1').style.bottom = "69px";
  document.getElementById('p1').style.transition = "bottom 0.15s";
  document.getElementById('p2').style.bottom = "138px";
  document.getElementById('p2').style.transition = "bottom 0.15s";
  document.getElementById('p3').style.bottom = "207px";
  document.getElementById('p3').style.transition = "bottom 0.15s";
  document.getElementById('i1').style.transform = "rotate(0deg)";
  document.getElementById('i1').style.transition = "transform 0.15s"
  document.getElementById('i3').style.transform = "rotate(0deg)";
  document.getElementById('i3').style.transition = "transform 0.15s"
  document.getElementById('i2').style.display = "block";
  document.getElementById('i2').style.transition = "display 0.15s";
  document.getElementById('mask2').style.display = "none";
}