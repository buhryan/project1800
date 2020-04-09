//The setTimeout time for loading the page
const DELAY = 2500;

//one greater than the maximum number of events that will be displayed
const MAX_EVENTS = 7;

let eventList = [];

//Gets events, orders them by time published, and pushes their doc id to an array
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

//iterates through the array and displays the 6 most recent events on the home page
setTimeout(function () {
    let x = 0;
    for (let i = eventList.length - 1; i > eventList.length - MAX_EVENTS; i--) {
        db.collection("events")
            .doc("" + eventList[i])
            .get()
            .then(function (doc) {
                //Displays the event on screen
                if (doc.exists) {
                    document.getElementById("title" + x).innerHTML = doc.data().Name;
                    document.getElementById("desc" + x).innerHTML = doc.data().Description;
                    document.getElementById("event" + x).href = "event.html";
                    document.getElementById("event-time" + x).innerHTML = doc.data().Date + " @ " + doc.data().Time;
                    let elementValue = doc.id;
                    document.getElementById("event" + x).onclick = function clickHandler() {
                        localStorage.setItem("event", elementValue);
                    }
                }
            x++;
            //handles errors if the document doesn't exist
            }).catch(function (error) {
                console.log("Error getting document:", error);
            })
    }
}, DELAY);

getEvent();
