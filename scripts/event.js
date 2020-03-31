console.log(localStorage.getItem("event"));

let docReference = localStorage.getItem("event");
console.log(db.collection("events")
    .doc(docReference.toString())
    .get()
    .then(function(doc) {
        if (doc.exists) {
            document.getElementById("event-name").innerHTML = doc.data().Name;
            document.getElementById("event-time").innerHTML = doc.data().Date + "@" + doc.data().Time;
            document.getElementById("event-location").innerHTML = doc.data().Name; //Get a location and update this
            document.getElementById("event-description").innerHTML = doc.data().Description;

        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);


}))
    

