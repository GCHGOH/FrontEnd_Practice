 const firebaseConfig = {
    apiKey: "AIzaSyAApERNp5d3y7OXnNNdVrpD5PTJzv3Ik_s",
    authDomain: "bookingform-df638.firebaseapp.com",
    projectId: "bookingform-df638",
    storageBucket: "bookingform-df638.appspot.com",
    messagingSenderId: "899787200881",
    appId: "1:899787200881:web:27636029506e0f3c3fbed0"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firestore =firebase.firestore()

//Variable to access database collection
const db = firestore.collection("booking")

//get Submit Form

let submitButton = document.getElementById('submit')

//create Event Listener to allow form submission
submitButton.addEventListener("click", (e) => {
    //prevent default form submission 
    e.preventDefault();

    let name = document.getElementById('name-22ab').value;
    let email = document.getElementById('email-22ab').value;
    let date = document.getElementById('date-cbc9').value;
    let time = document.getElementById('select-2e58').value;

    db.doc().set({
        name:name,
        email:email,
        date:date,
        time:time
    }).then( () =>{
        console.log("Data saved")
    }).catch((error) => {
        console.log(error)
    })


    alert ("You have Successfully booked an appointment with us at" + document.getElementById('select-2e58').value )
});


