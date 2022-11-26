// Your code here
<!DOCTYPE html>
<html lang="en">
<head>
  const dodger = document.getElementById("dodger");
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Rock Dodger! (Beta)</title>
  <link rel="stylesheet" type="text/css" href="index.css">
</head>
dodger.style.backgroundColor = "#000000";
<body>
  dodger.style.backgroundColor = "#FF69B4";
  <div id="game">
    dodger.style.bottom = "100px";
    <div id="dodger" style="bottom: 0px; left: 180px;"></div>
  </div>
  dodger.style.bottom = "0px";
  <script type="text/javascript" src="index.js"></script>
</body>
dodger.style.left = "0px";
</html>
document.addEventListener("keydown", function (event) {
  console.log(event);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
