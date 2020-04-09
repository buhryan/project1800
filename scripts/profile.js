//The setTimeout time for loading the page
const DELAY = 2500;
eventList = []

//Orders the events by join date and puts their document ids in an array
function getEvent() {
    db.collection("events")
        .orderBy("timestamp")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                eventList.push(doc.id)
            })
        })
}

//displays the user's joined events on screen
setTimeout(function () {
    let x = 0;
    //checks events to see if the user has joined
    for (let i = eventList.length - 1; i > 0; i--) {
        db.collection("events")
            .doc("" + eventList[i])
            .get()
            .then(function (doc) {
                if (doc.exists) {
                    memberList = doc.data().Members;
                    for (j = 0; j < memberList.length; j++) {
                        //if the user has joined the event the card for that event is displayed
                        if ("" + firebase.auth().currentUser.displayName == "" + memberList[j]) {
                            document.getElementById("event" + x).style = "display:block"
                            document.getElementById("title" + x).innerHTML = doc.data().Name;
                            document.getElementById("desc" + x).innerHTML = doc.data().Description;
                            document.getElementById("tag" + x).id = "" + doc.data().Tag;
                            document.getElementById("event" + x).href = "event.html";
                            document.getElementById("event-time" + x).innerHTML = doc.data().Date + "@" + doc.data().Time;
                            let elementValue = doc.id;
                            document.getElementById("event" + x).onclick = function clickHandler() {
                                localStorage.setItem("event", elementValue);
                                console.log(elementValue);
                            }
                            x++;
                        }
                    }
                }
            //handles errors if the document doesn't exist
            }).catch(function (error) {
                console.log("Error getting document:", error);
            })
    }
}, DELAY);

getEvent();
