function myFunction() {
  var x,
    borderRadius,
    sum = 0;
  let a = document.getElementById("a").value;
  let aCount=a.toString().length;
  if (aCount== 5) {
    while (a) {
      x = a % 10;
      sum += x;
      a = Math.floor(a / 10);
    }
    borderRadius = Math.floor(sum / 5);
    document.getElementById("create").style.width = sum + "px";
    document.getElementById("create").style.height = sum + "px";
    document.getElementById("create").style.borderRadius = borderRadius + "px";
  } else {
    alert("Please enter a 5-digit number");
  }
}
