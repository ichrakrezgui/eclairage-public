(function () {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAwIPUzpWgX35efmBUFulRSsO22RfhtlmE",
    authDomain: "eclairage-public.firebaseapp.com",
    databaseURL: "https://eclairage-public.firebaseio.com",
    projectId: "eclairage-public",
    storageBucket: "eclairage-public.appspot.com",
    messagingSenderId: "419441725438"
  };
  firebase.initializeApp(config);

// Get elements
const txtEmail = document.getElementById('txtEmail');
const pwd = document.getElementById('pwd');
const choose = document.getElementById('choose');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');

//add login event
btnLogin.addEventListener('click',e => {
	const email = txtEmail.value ;
	const pass = pwd.value;
	const choice = choose.value;
	const auth = firebase.auth();

	//Sign in
	const promise = auth.SignInWithEmailAndPassword(email,pass);
	promise.catch (e => console.log(e.message));
});

// add SignUp event
btnSignUp.addEventListener('click',e => {
	//get email and pass
	const email = txtEmail.value;
	const pass = pwd.value;
	const auth = firebase.auth();
	//Sign In
const promise =auth.createUserWithEmailAndPassword(email,pass);
	promise
	.catch ( e => console.log(e.message));
});

//add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {

	if (firebaseUser) {
		console.log(firebaseUser);
	}else{
		console.log('not logged in');
	}

});

});

