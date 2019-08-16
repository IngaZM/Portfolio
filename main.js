// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCL-gVCYrXb9Yu8Rbv6ZhtPOKfnBHD-uE4",
    authDomain: "ingamnukwaportfolio.firebaseapp.com",
    databaseURL: "https://ingamnukwaportfolio.firebaseio.com",
    projectId: "ingamnukwaportfolio",
    storageBucket: "",
    messagingSenderId: "276392278030",
    appId: "1:276392278030:web:751a95271da9f43e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
//Reference messages collection
var messagesRef = firebase.database().ref("messages")


// Listen for form submit 
		document.getElementById('IngasForm').addEventListener('submit', submitForm);


// submit form 
		function submitForm(e){
			e.preventDefault();
			
	
//Get values

	 	var fname = getInputVal('fname');
         var lname = getInputVal('lname');
         var country = getInputVal('country');
         var subject = getInputVal('subject');

// Save message 	
 		saveMessage(fname, lname, country, subject)

  
 		// Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);


 // Clear form
  document.getElementById('IngasForm').reset();
}


//Function to get form values
		function getInputVal(id){
			return document.getElementById(id).value;

	}



// Save message to firebase
		function saveMessage(fname, lname, country, subject){
			var newMessageRef = messagesRef.push();
			newMessageRef.set({
				fname: fname,
                lname: lname,
                country: country,
				subject:subject,

			});
         }
         
         function recaptcha_callback() {
             var submitbutton = document.querySelector("#submit");
             submitbutton.removeAttribute("disabled");
             submitbutton.getElementsByClassName.cursor = "pointer";


         }

        // Recaptcha function

        ducument.getElementById("submit").disabled = true
        function recaptcha_callback(){
            document.getElementById("submit").disabled = false
        }
         