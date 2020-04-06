eventList = []

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
    console.log("hi")
    for (let i = eventList.length - 1; i > 0; i--) {
        db.collection("events")
        .doc("" + eventList[i])
        .get()
        .then(function (doc) {
            if (doc.exists) {
                memberList = doc.data().Members;
                console.log(firebase.auth().currentUser.displayName)

                for (j = 0; j < memberList.length; j++) {
                    console.log(memberList[j])

                    if ("" + firebase.auth().currentUser.displayName == "" + memberList[j]) {
                
                console.log(doc.data().Name)
                document.getElementById("event" + x).style = "display:block"
                document.getElementById("title" + x).innerHTML = doc.data().Name;
                document.getElementById("desc" + x).innerHTML = doc.data().Description;
                console.log(doc.data().Tag);                
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
                    

        }).catch(function (error) {
            console.log("Error getting document:", error);
        })

    }}, 2000);
