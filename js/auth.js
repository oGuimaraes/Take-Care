// Login function
function Login(){
    //Getting email and password value
    var email = document.getElementById("email_value").value;
    var password = document.getElementById("pass_value").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error: " + errorMessage);
        // -------------
      });
}

// Logout function
function Logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}