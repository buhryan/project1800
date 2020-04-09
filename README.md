## project1800
* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
This browser based web application hosts events for users to join and create.
First the user must login.  Then they can view the newest events, join any events, search for events by tags, and see a list of the events that they have joined.
Users must login to use the site, some features may be viewable without logging in the future. (in construction).

This small project demonstrates:
* read and write to firestore, a non-sql database
* use of firebase authentication and creation of a users collection in firestore
* customized user experience after login/signup
* tracking of a data point provided by the user
* display of a user's history of events
* use of navbar in bootstrap
* use of card in bootstrap
* use of various html input types 

	
## Technologies
Technologies that were used for this project:
* Firebase Hosting
* Firebase Firestore Database
* HTML, CSS
* JavaScript
* Bootstrap 
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── 404.html                 # File for error
├── Profile.html             # page shows events the user has joined
├── README.md 
├── create_event.html        # page allows users to create an event
├── event.html               # page for each event create, reads from firebase
├── login.html               # landing HTML file, login HTML file, contains logic for user authentication this is what users see when you come to url. Users must be logged in the use the site
├── main.html                # after logged in, you can view the newest events here              
└── search.html              # page shows event sorted by their tags

It has the following subfolders:
├── .git                     # Folder for git repo
├── images                   # Folder for images
├── scripts                  # Folder for scripts (separate script for each page)
    /firebase_api_chris.js   # where the firebase api is located
├── styles                   # Folder for styles


