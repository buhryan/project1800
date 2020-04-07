// Writes the event information to the database
function writeEventInfo() {
    document.getElementById("eventForm").addEventListener("submit", function (e) {

        e.preventDefault();
        let eventName = document.getElementById("inputEventName").value;
        let eventDescrip = document.getElementById("inputEventDescription").value;
        let eventLocation = document.getElementById("inputEventLocation").value;
        let eventDate = document.getElementById("inputEventDate").value;
        let eventTime = document.getElementById("inputEventTime").value;
        let eventMembersMax = document.getElementById("inputMemberMax").value;
        let eventTag = document.getElementById("tags").value;
        let user = firebase.auth().currentUser.displayName;
        let memberList = [user];

        db.collection("events").add({
            Name: eventName,
            Description: eventDescrip,
            Location: eventLocation,
            Members: memberList,
            Date: eventDate,
            Time: eventTime,
            MembersMax: eventMembersMax,
            Tag: eventTag,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    })

    eventConfirmation();

    clearForms();
}

// Confirms that the event has been created
function eventConfirmation() {
    $('form').on('submit', function () {
        alert('Event Created');
    });
}

// Clears the inputs in the forms
function clearForms() {
    document.getElementById("eventForm").reset();
}

writeEventInfo();
