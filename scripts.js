function rollDice() {
  var numDice = document.getElementById("num-dice").value;
  var diceContainer = document.getElementById("dice-container");
  diceContainer.innerHTML = "";
  for (var i = 0; i < numDice; i++) {
    var roll = Math.floor(Math.random() * 6) + 1;
    var diceImg = document.createElement("img");
    diceImg.src = "images/dice-" + roll + ".png";
    diceContainer.appendChild(diceImg);
  }
}
