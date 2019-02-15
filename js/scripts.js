function Submit () {
  var triangleTracker1 = document.getElementById('triangleTracker1').innerHTML;
  var triangleTracker2 = document.getElementById('triangleTracker2').innerHTML;
  var triangleTracker3 = document.getElementById('triangleTracker3').innerHTML;
  if (triangleTracker1 === triangleTracker2 === triangleTracker3) {
    alert ("Equilateral triangle");
  }
