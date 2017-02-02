var liters = function(gallons){
  return gallons * 3.8;
}
var gallons = parseInt(prompt("how many gallons do you have?"));
alert("You have " + liters(gallons) + " in liters");
