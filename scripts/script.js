// function getQuote() {
//     db.collection("events")
//         .orderBy("timestamp", "desc")
//         .limit(6)
//         .get()
//         .then( function(snap) {
//             snap.forEach (function (doc) {
//                 console.log(doc.data().name)
//                 //display on DOM
//                 //attach "id" listener
//                 // so it is clickable
//                 //call handler
//             })
//         })
//     }

    // function getQuote() {
    //     db.collection("events")
    //         .doc("SpHHaPISBFUJzULgVZfO")
    //         .onSnapshot(
    //             function (snap) {
    //                 console.log(snap.data());
    //      })
    // }
  
    // function getQuote() {
    //     db.collection("events")
    //     .orderBy("Name")
    //     .get()
    //     .then(function (snap) {
    //         snap.forEach (function(doc) {
    //             console.log(snap.data());

    //         })
    //      })
    // }

function getQuote() {
    let x = 0
    db.collection("events")
        .orderBy("timestamp")
        .limit(6)
        .get()
        .then( function(snap) {
            snap.forEach(function (doc) {
                console.log(doc.data().Name)
                document.getElementById("event" + x).href = "event.html";
                document.getElementById("event" + x).innerHTML = doc.data().Name;
                let elementValue = doc.id;
                document.getElementById("event" + x).onclick = function clickHandler() {
                    console.log(elementValue);
                    localStorage.setItem("event", elementValue);
                }
                x++
            })
        })
}



getQuote();
