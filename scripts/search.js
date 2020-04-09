//The setTimeout time for loading the page
const DELAY = 2500;

//one greater than the maximum number of events that will be displayed
const MAX_EVENTS = 13;

//an array to store database document names
let eventList = [];


//puts event document names in an array ordered by timestamp
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

//Dynamically gets the events and links in the search.HTML file
getEvent();
setTimeout(function () {
    let x = 0;
    for (let i = eventList.length - 1; i > eventList.length - MAX_EVENTS; i--) {
        db.collection("events")
            .doc("" + eventList[i])
            .get()
            .then(function (doc) {
                //Sets the innerHTML and id values of elements to event specific information
                if (doc.exists) {
                    document.getElementById("title" + x).innerHTML = doc.data().Name;
                    document.getElementById("desc" + x).innerHTML = doc.data().Description;
                    document.getElementById("tag" + x).id = "" + doc.data().Tag;
                    document.getElementById("event" + x).href = "event.html";
                    document.getElementById("event-time" + x).innerHTML = doc.data().Date + "@" + doc.data().Time;
                    let elementValue = doc.id;
                    document.getElementById("event" + x).onclick = function clickHandler() {
                        console.log(elementValue);
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

/*filters by events with the "Game" tag - Only removes the first item of each type.
  We were unable to get full functionality for filtering by tags.*/
function gameTag() {
    document.getElementById("games").addEventListener("click", function (e) {
        e.preventDefault();
        resetTags();
        console.log("clicked");
        document.getElementById("Games").style = "display:block";
        document.getElementById("Study").style = "display:none";
        document.getElementById("Food and Beverage").style = "display:none";
        document.getElementById("Intramurals").style = "display:none";

    })
}

/*filters by events with the "Study" tag - Only removes the first item of each type.
  We were unable to get full functionality for filtering by tags.*/
function studyTag() {
    document.getElementById("study").addEventListener("click", function (e) {
        e.preventDefault();
        resetTags();
        console.log("clicked");
        document.getElementById("Study").style = "display:block";
        document.getElementById("Games").style = "display:none";
        document.getElementById("Food and Beverage").style = "display:none";
        document.getElementById("Intramurals").style = "display:none";

    })
}

/*filters by events with the "Food and Beverage" tag - Only removes the first item of each type.
  We were unable to get full functionality for filtering by tags.*/
function fbTag() {
    document.getElementById("fb").addEventListener("click", function (e) {
        e.preventDefault();

        resetTags();
        console.log("clicked");
        document.getElementById("Food and Beverage").style = "display:block";
        document.getElementById("Study").style = "display:none";
        document.getElementById("Games").style = "display:none";
        document.getElementById("Intramurals").style = "display:none";
    })
}

/*filters by events with the "Intramural" tag - Only removes the first item of each type.
  We were unable to get full functionality for filtering by tags.*/
function intramuralTag() {
    document.getElementById("intramurals").addEventListener("click", function (e) {
        e.preventDefault();

        console.log("clicked");
        document.getElementById("Intramurals").style = "display:block";
        document.getElementById("Study").style = "display:none";
        document.getElementById("Food and Beverage").style = "display:none";
        document.getElementById("Games").style = "display:none";
    })
}

//Makes all tags visible
function resetTags() {
    document.getElementById("reset").addEventListener("click", function (e) {
        e.preventDefault();

        console.log("clicked");
        document.getElementById("Study").style = "display:block";
        document.getElementById("Food and Beverage").style = "display:block";
        document.getElementById("Games").style = "display:block";
        document.getElementById("Intramurals").style = "display:block";

    })
}

//Driver function to call all necessary functions on page load
function pageLoad() {
    gameTag();
    intramuralTag();
    fbTag();
    studyTag();
    resetTags();
}

pageLoad();
