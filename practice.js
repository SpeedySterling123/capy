// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAwRhBGomhtAlTlwVXTyuTjJZgtN9Fv_o",
    authDomain: "practice94-f7889.firebaseapp.com",
    databaseURL: "https://practice94-f7889-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "practice94-f7889",
    storageBucket: "practice94-f7889.appspot.com",
    messagingSenderId: "822811305277",
    appId: "1:822811305277:web:a21b9135297c9a89fe1154"
  };
function adduser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}