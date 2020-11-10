   // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB-_FyZaremhQBSAaPUouDCFdRA75lY9SE",
    authDomain: "king-b8067.firebaseapp.com",
    databaseURL: "https://king-b8067.firebaseio.com",
    projectId: "king-b8067",
    storageBucket: "king-b8067.appspot.com",
    messagingSenderId: "419411173358",
    appId: "1:419411173358:web:89b4d3d7dea2bebd0e78ff",
    measurementId: "G-R2WJ102RJB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let login=document.getElementById("login");

  login.addEventListener("click",()=>{
    let email=document.getElementById("exampleInputEmail1").value;
    let password=document.getElementById("exampleInputPassword1").value;
    document.getElementById("spinner").className="spinner-border text-primary";
    if(password.length<6)
      alert("Password length should be at least 6")
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
       console.log("Logged in successfully")
       alert("You have logged in successfully!")
       document.getElementById("spinner").className="";
       localStorage.setItem("status","true")
       window.location.href = "index.html";
    }).catch(function(error) {
      // Handle Errors here.
      var errorMessage = error.message;
      console.log(errorMessage)
      // ...
    });
  })

  
