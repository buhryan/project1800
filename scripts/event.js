let docReference = localStorage.getItem("event");
let joinButton = document.getElementById("joinButton");
let memberList = document.getElementById("event-memberList");
let maxMembers;
let memberArr;

// Sets HTML elements to the linked event
function getEvent() {

  console.log(localStorage.getItem("event"));

  console.log(db.collection("events")
    .doc(docReference.toString())
    .get()
    .then(function (doc) {
      if (doc.exists) {
        document.getElementById("event-name").innerHTML = doc.data().Name;
        document.getElementById("event-time").innerHTML = doc.data().Date + "@" + doc.data().Time;
        document.getElementById("event-location").innerHTML = doc.data().Location;
        document.getElementById("event-description").innerHTML = doc.data().Description;
        document.getElementById("event-tag").innerHTML = doc.data().Tag;
        document.getElementById("event-banner").style.backgroundImage = "url('images/" + doc.data().Picture + "')";
        maxMembers = doc.data().MembersMax;
        memberArr = doc.data().Members;
        document.getElementById("member-title").innerHTML = "Members " + memberArr.length + "/" + maxMembers;
        for (let i = 0; i < memberArr.length; i++) {
          let member = document.createElement("li");
          member.textContent = memberArr[i];
          memberList.appendChild(member);
        }

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);


    }))
}

// Adds user to event
function joinEvent() {
  let user = firebase.auth().currentUser.displayName;
  let document = db.collection("events").doc(docReference.toString());

  if (!memberArr.includes(user) &&
    memberArr.length < maxMembers) {
    document.update({
      Members: firebase.firestore.FieldValue.arrayUnion(user)
    });
    while (memberList.firstChild) {
      memberList.removeChild(memberList.firstChild);
    }
    getEvent();
    joinConfirmation();
  } else {
    alreadyJoinedAlert();
    console.log("already joined");
    joinButton.disabled = true;
  }
}

function joinConfirmation() {
  window.alert('Succesfully joined the event!');
}

function alreadyJoinedAlert() {
    window.alert('Already joined the event!');
}

getEvent();
joinButton.onclick = joinEvent;
