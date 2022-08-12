// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAsWuhpbsc1HU8TvsFsyJ15SzGgeZBC5zg",
    authDomain: "project100-5f624.firebaseapp.com",
    projectId: "project100-5f624",
    storageBucket: "project100-5f624.appspot.com",
    messagingSenderId: "918860193977",
    appId: "1:918860193977:web:a16197f952e44f8bc6bb68"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



