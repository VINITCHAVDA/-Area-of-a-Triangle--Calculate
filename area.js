function area() {
  var base = document.getElementById("base").value;
  var hight = document.getElementById("hight").value;
  var btn = (base * hight) / 2;
  document.getElementById("p1").innerHTML = "the area of the triangle :" + btn;
}
