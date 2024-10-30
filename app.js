const firebaseConfig = {
    apiKey: "AIzaSyA5yYGgKel5Z2-Tvo65yxDNoiiiHAUJhCE",
    authDomain: "great-food-33c66.firebaseapp.com",
    projectId: "great-food-33c66",
    storageBucket: "great-food-33c66.appspot.com",
    messagingSenderId: "938255059293",
    appId: "1:938255059293:web:655722ee71fb231fe000b4"
  }; 
  

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firestore =firebase.firestore()

//Variable to access database collection
const db = firestore.collection("checkout")

//get Submit Form

let submitButton = document.getElementById('submit')

//create Event Listener to allow form submission
submitButton.addEventListener("click", (e) => {
    //prevent default form submission 
    e.preventDefault();

    let message = document.getElementById('message-e669').value;
    let paymentmethod = document.getElementById('select-c683').value;
    

    db.doc().set({
        message:message,
        paymentmethod:paymentmethod
    }).then( () =>{
        console.log("Data saved")
    }).catch((error) => {
        console.log(error)
    })


    alert ("Your Payment is Made")
});