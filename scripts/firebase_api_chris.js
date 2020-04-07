        //---------------------------------------------------------------------
        // Your web app's Firebase configuration (9 lines of code)
        // Replace the configuration with YOUR project's API information
        // copied from the firebase console (settings) of your project.
        //---------------------------------------------------------------------
        
        //comes from firebase console
        var firebaseConfig = {
            apiKey: "AIzaSyBUdDQ-UqrhPs-iiExjqCSOKEGheKgVXUM",
            authDomain: "project-6c754.firebaseapp.com",
            databaseURL: "https://project-6c754.firebaseio.com",
            projectId: "project-6c754",
            storageBucket: "project-6c754.appspot.com",
            messagingSenderId: "912096173518",
            appId: "1:912096173518:web:07606a836107f684a8df9f"
          };        
          //------------------------------------------------
          // Initialize Firebase and Firestore reference
          // Do not delete!
          //------------------------------------------------
          firebase.initializeApp(firebaseConfig);
          const db = firebase.firestore();
          