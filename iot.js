// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.

//     document.getElementById("user_div").style.display = "block";
//     document.getElementById("login_div").style.display = "none";


//     var user = firebase.auth().currentUser;
//     if (user !=null) {

//     	var email_id= user.email;
//     	document.getElementById("user_para").innerHTML = "Bienvenue user" + email;
//     }
//   } else {
//     // No user is signed in.

//     document.getElementById("user_div").style.display = "none";
//     document.getElementById("login_div").style.display = "block";
//   }
// });

function Login() {

	var userEmail = document.getElementById("txtEmail").value;
	var userPass = document.getElementById("pwd").value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(res => {
		window.location.replace("file:///C:/Users/admin/Desktop/html-css/Menu.html");
		console.log(res);
	}).catch((error) => {
		console.log(error);
		// Handle Errors here.
		// var errorCode = error.code;
		// var errorMessage = error.message;


		// window.alert("Error :" + errorMessage);
		// ...
	});

}