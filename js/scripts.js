function triangleSides () {
var side1 = document.getElementById('side1').value;
var side2 = document.getElementById('side2').value;
var side3 = document.getElementById('side3').value;
var sides = [];
  sides.push(side1, side2, side3);
  parseInt(sides);
  if (side1 === side2 && side2 === side3 && side1 === side3) {
    alert ("Equilateral Triangle");
  } else if (side1 === side2 || side2 === side3 || side1 === side3){
    alert ("isosceles Triangle");
  } else if (side1 !== side2 && side2 !== side3 && side1 !== side3 && (side1 + side2 > side3 && side2 + side3 > side1) || side3 + side1 > side2) {
    alert ("Scalene Triangle");
  } else if (side1 !== side2 && side2 !== side3 && side1 !== side3 && (side1 + side2 <= side3 && side2 + side3 <= side1) || side3 + side1 <= side2) {
    alert ("Not a Triangle")
  }
}
