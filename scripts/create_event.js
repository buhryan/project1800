function writeEventInfo() {
    document.getElementById("eventForm").addEventListener("submit", function(e) {

        e.preventDefault();
        let eventName = document.getElementById("inputEventName").value;
        let eventDescrip = document.getElementById("inputEventDescription").value;
        let eventDate = document.getElementById("inputEventDate").value;
        let eventTime = document.getElementById("inputEventTime").value;
    
        console.log(eventName);
        console.log(eventDescrip);
        console.log(eventDate);
        console.log(eventTime);
    
        db.collection("events").add({
                Description: eventName,
                Name: eventDescrip,
                Date: eventDate,
                Time: eventTime
            })
    })
}

writeEventInfo();