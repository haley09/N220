let ticketNum = 3;
let ticketCost = 14;
let ttCost = ticketNum * ticketCost;
document.getElementById("ticketNum").innerHTML = "Tickets: " + ticketNum;
document.getElementById("ticketCost").innerHTML = "Cost: $" + ticketCost;
document.getElementById("ttCost").innerHTML = "Total: $" + ttCost;

let bank = 235.87;
let jacket = 70;
let addsweater = 55;
let shirt = 35;
let pants = 75;
let sandals = 30;
let shoes = 60;
document.getElementById("bank").innerHTML = bank - shirt - pants - shoes;
let addJacket = jacket;
document.getElementById("addJacket").innerHTML = bank == addJacket;

let pizza = 4;
let slicePerPizza = 8;
let slicePerStudent = 2.5;
document.getElementById("stuPizza").innerHTML = slicePerPizza * pizza / slicePerStudent;
document.getElementById('profPizza').innerHTML = slicePerPizza * pizza - 12 * slicePerStudent;

let adult = 12;
let child = 6;
let drink = 1.50;
document.getElementById("Monty").innerHTML = 2 * adult + child + 3 * drink;

let week1 = 202.45;
let week2 = 134.97;
let week3 = 256.63;
let week4 = 178.22;
document.getElementById("tips").innerHTML = (week1 + week2 + week3 + week4) / 4 ;