let docReference = localStorage.getItem("event");
let joinButton = document.getElementById("joinButton");
let memberList = document.getElementById("event-memberList");
let maxMembers;
let memberArr;

/* Sets HTML elements to the linked event using a local Storage variable 
  which contains the docID of the event that will be loaded*/
function getEvent() {
  db.collection("events")
    .doc(docReference.toString())
    .get()
    .then(function (doc) {
      //Sets the innerHTML and styling of the page based on the event document from the DB
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
        //Writes the list of members to the page by iterating through an array of joined member names
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


    })
}

// Adds user to event by name on clicking the join event button
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
    window.alert('Succesfully joined the event!');
  //Stops the user from joining the event if it is full or if the user has joined the event
  } else if (memberArr.length == maxMembers) {
    window.alert("Event is full!");
  } else {
    window.alert('Already joined the event!');
  }
  joinButton.disabled = true;
}

getEvent();
joinButton.onclick = joinEvent;
