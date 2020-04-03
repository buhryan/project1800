// function getQuote() {
//     let x = 0
//     db.collection("events")
//         .orderBy("timestamp")
//         .limit(6)
//         .get()
//         .then( function(snap) {
//             snap.forEach(function (doc) {
//                 console.log(doc.data().Name)
//                 document.getElementById("title" + x).innerHTML = doc.data().Name;
//                 document.getElementById("desc" + x).innerHTML = doc.data().Description;

//                 document.getElementById("event" + x).href = "event.html";
//                 document.getElementById("event-time" + x).innerHTML = doc.data().Date + "@" + doc.data().Time;
//                 let elementValue = doc.id;
//                 document.getElementById("event" + x).onclick = function clickHandler() {
//                     console.log(elementValue);
//                     localStorage.setItem("event", elementValue);
//                 }
//                 x++
//             })
//         })
// }

let eventList = [];

function getEvent() {
    db.collection("events")
        .orderBy("timestamp")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                console.log(doc.id)
                eventList.push(doc.id)
            })
        }).then(console.log(eventList))}

function displayEvent() {

}

getEvent();
setTimeout(function () {
    let x = 0;
    for (let i = eventList.length - 1; i > eventList.length -7; i--) {
    db.collection("events")
        .doc("" + eventList[i])
        .get()
        .then(function (doc) {
            if (doc.exists) {
                console.log(doc.data().Name)
                document.getElementById("title" + x).innerHTML = doc.data().Name;
                document.getElementById("desc" + x).innerHTML = doc.data().Description;
                console.log(doc.data().Tag);                
                document.getElementById("tag" + x).id = "" + doc.data().Tag;


                document.getElementById("event" + x).href = "event.html";
                document.getElementById("event-time" + x).innerHTML = doc.data().Date + "@" + doc.data().Time;
                let elementValue = doc.id;
                document.getElementById("event" + x).onclick = function clickHandler() {
                    console.log(elementValue);
                    localStorage.setItem("event", elementValue);
                
                }
                
            }                  x++;
                    

        }).catch(function (error) {
            console.log("Error getting document:", error);
        })

    }}, 2000);

function gameTag(){
    document.getElementById("games").addEventListener("click", function(e) {
        e.preventDefault();

        console.log("clicked");
        document.getElementById("Study").style = "display:none";
        document.getElementById("Food and Beverage").style = "display:none";
        document.getElementById("Intramurals").style = "display:none";
    })
}

function studyTag() {
    document.getElementById("study").addEventListener("click", function(e) {
        e.preventDefault();

        console.log("clicked");
        document.getElementById("Games").style = "display:none";
        document.getElementById("Food and Beverage").style = "display:none";
        document.getElementById("Intramurals").style = "display:none";
    })
}

function fbTag() {
    document.getElementById("fb").addEventListener("click", function(e) {
        e.preventDefault();

        console.log("clicked");
        document.getElementById("Study").style = "display:none";
        document.getElementById("Games").style = "display:none";
        document.getElementById("Intramurals").style = "display:none";
    })
}

function intramuralTag() {
    document.getElementById("intramurals").addEventListener("click", function(e) {
        e.preventDefault();

        console.log("clicked");
        document.getElementById("Study").style = "display:none";
        document.getElementById("Food and Beverage").style = "display:none";
        document.getElementById("Games").style = "display:none";
    })
}

function resetTags() {
    document.getElementById("reset").addEventListener("click", function(e) {
        e.preventDefault();

        console.log("clicked");
        document.getElementById("Study").style = "display:block";
        document.getElementById("Food and Beverage").style = "display:block";
        document.getElementById("Games").style = "display:block";
        document.getElementById("Intramurals").style = "display:block";

    })
}


gameTag();
intramuralTag();
fbTag();
studyTag();
resetTags();
