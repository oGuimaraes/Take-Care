// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Sign up function
function checkForm(){

  // vars
  var nameInput = document.getElementById("nameInput").value;
  var emailInput = document.getElementById("emailInput").value;
  var celInput = document.getElementById("celInput").value;
  var passInput = document.getElementById("passInput").value;
  var passInput2 = document.getElementById("passInput2").value;

  // these vars are only for cheking purpose
  var isNameOk = false;
  var isEmailOk = false;
  var isCelOk = false;
  var isPass1Ok = false;
  var isPass2Ok = false;
  var isPassOk = false;

  // Form validation (email and passwords weakness are handled by FirestoreAuth bellow)
  if (nameInput == ""){
    console.log('nome não pode estar em branco');
  }else{
    isNameOk = true;
  }

  if (emailInput == ""){
    console.log('email não pode estar em branco');
  }else{
    isEmailOk = true;
  }

  if (celInput == ""){
    console.log('celular não pode estar em branco');
  }else{
    isCelOk = true;
  }

  if (passInput == ""){
    console.log('A senha1 não pode estar em branco');
  }else{
    isPass1Ok = true;
  }

  if (passInput2 == ""){
    console.log('A senha2 não pode estar em branco')
  }else{
    isPass2Ok = true;
  }

  if (passInput != passInput2){
    console.log('As senhas não coincidem.');
  }else{
    isPassOk = true;
  }
  // end of form validation

  // Checking if everything is okay
  if (isNameOk == true && isEmailOk == true && isCelOk == true && isPass1Ok == true && isPass2Ok == true && isPassOk == true){
    // Stop the listener - Prevent the user to automaticaly logged without creating the doc database. #4400
    authListener();

    cadastrar(nameInput, celInput, emailInput, passInput);
  }else{
    console.log("Erro: Confira o formulário acima.");
  }
  
}

// SignUp Function
function cadastrar(nameInput, celInput, emailInput, passInput){
  // Create the user on FirebaseAuth section
  firebase.auth().createUserWithEmailAndPassword(emailInput, passInput).then(function(){
    // Created successfuly
    createUserOnDb(nameInput, emailInput, celInput);

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log("Error: " + errorMessage);
    console.log("ErrorCode: " + errorCode);
  });
}
// End of SignUp Function

// This Function creates a user on firestore users collection
function createUserOnDb(nameInput, emailInput, celInput){
  // Add the user info at the "users" collection with a random doc id
  db.collection("users").add({
      name: nameInput,
      email: emailInput,
      telefone: celInput,
      role: "doador"
    })
    .then(function(docRef) {
      console.log("Documento escrito com a ID: ", docRef.id);

      console.log("Adicionado com sucesso ao DB!");

      // Set the listener back #4400
      authListener = firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            document.location = "index.html";
    
          } else {
            // No user is signed in.
          }
        });
        
    })
    .catch(function(error) {
      console.error("Erro ao tentar add o documento: ", error);
    
      // Set the listener back #4400
      authListener = firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          document.location = "index.html";
  
        } else {
          // No user is signed in.
        }
      });
    });
}
// End of firestore users collection creation section

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
// End of login function

// Logout function
function Logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}
// End of logout function