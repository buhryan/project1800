// // function getQuote() {
// //     db.collection("events")
// //         .orderBy("timestamp", "desc")
// //         .limit(6)
// //         .get()
// //         .then( function(snap) {
// //             snap.forEach (function (doc) {
// //                 console.log(doc.data().name)
// //                 //display on DOM
// //                 //attach "id" listener
// //                 // so it is clickable
// //                 //call handler
// //             })
// //         })
// //     }

//     // function getQuote() {
//     //     db.collection("events")
//     //         .doc("SpHHaPISBFUJzULgVZfO")
//     //         .onSnapshot(
//     //             function (snap) {
//     //                 console.log(snap.data());
//     //      })
//     // }
  
//     // function getQuote() {
//     //     db.collection("events")
//     //     .orderBy("Name")
//     //     .get()
//     //     .then(function (snap) {
//     //         snap.forEach (function(doc) {
//     //             console.log(snap.data());

//     //         })
//     //      })
//     // }

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



// getQuote();

let eventList = [];

function getEvent() {
    db.collection("events")
        .orderBy("timestamp")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                console.log(doc.id);
                eventList.push(doc.id)
            })
        }).then(console.log(eventList))}


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

                document.getElementById("event" + x).href = "event.html";
                document.getElementById("event-time" + x).innerHTML = doc.data().Date + "@" + doc.data().Time;
                let elementValue = doc.id;
                document.getElementById("event" + x).onclick = function clickHandler() {
                    console.log(elementValue);
                    localStorage.setItem("event", elementValue);
                }
            }           x++;
     

        }).catch(function (error) {
            console.log("Error getting document:", error);
        })
}}, 3000);

function handleTags() {
    document.getElementById().add
}