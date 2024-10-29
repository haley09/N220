// Reference Variable
const friendName = document.getElementById("friendName");
const friendList = document.getElementById("friendList");

//Variable to track my friends
const myFriend = [];

//Function for adding friend
function addFriend() {
  //get the name the user typed in
  const nameValue = friendName.value;

  //add friend to myFriends list
  myFriend.push(nameValue);

  //add name to the friend list
  friendList.innerHTML += `<li>
  ${nameValue} <button onclick="removeFriend('${nameValue}')">X</button>
  </li>`;

  //Clear the name the user typed
  friendName.value = "";
}

function removeFriend(friendName) {
  //use variable to track index of friend to remove
  let friendIndex;

  //loop through current friends to find the friendName
  for (let i = 0; i < myFriend.length; i++) {
    if (myFriend[i] == friendName) {
      friendIndex = i;
    }
  }

  console.log(friendIndex);
}
