document
  .getElementById("startButton")
  .addEventListener("click", startAdventure);

function startAdventure() {
  // Prompt user for a choice of actions
  const noiseAction = prompt(
    `You heard a strange noise outside. What do you do? \n (Enter the number of your choice) \n 1. Look out the window \n 2. Stay in bed`
  );

  if (noiseAction === "1") {
    lookOutWindow();
  } else if (noiseAction === "2") {
    stayInBed();
  } else {
    alert("Invalid choice! Please enter '1' or '2'.");
    startAdventure(); // Restart if input is invalid
  }
}

function lookOutWindow() {
  // Alert user for a yes/no choice
  const lookedOutside = confirm(
    `You walk to the window. Do you continue to look outside?`
  );

  if (lookedOutside) {
    document.getElementById("story").innerHTML +=
      " You peek out the window and see a shadowy figure approaching your front door. Did you remember to lock it?";
    const locked = confirm("Do you check if the door is locked?");

    if (locked) {
      document.getElementById("story").innerHTML +=
        " You check and the door is locked. You feel a bit safer.";
    } else {
      document.getElementById("story").innerHTML +=
        " You realize the door is unlocked! Panic sets in as you wonder what to do next.";
    }
  } else {
    document.getElementById("story").innerHTML +=
      " You decide not to look outside and walk away from the window. Your heart races as you try to calm down.";
  }
}

function stayInBed() {
  const confirmStay = confirm(
    `You pull the covers over your head. Do you want to get up and check the noise?`
  );

  if (confirmStay) {
    document.getElementById("story").innerHTML +=
      " You muster your courage and get out of bed. You slowly walk towards the door.";
    const openDoor = confirm("Do you open the door?");

    if (openDoor) {
      document.getElementById("story").innerHTML +=
        " You open the door and step into the hallway, feeling a rush of adrenaline.";
    } else {
      document.getElementById("story").innerHTML +=
        " You decide it's best to stay in bed. The noise continues but you try to ignore it.";
    }
  } else {
    document.getElementById("story").innerHTML +=
      " You remain under the covers, trying to convince yourself it's nothing.";
  }
}
