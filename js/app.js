//Variables

const logear=document.getElementById('ingresar');
const inputEmail=document.getElementById('correo');
const inputPassword=document.getElementById('password');
logear.addEventListener('click',ingresar);


function ingresar(e) { 
     e.preventDefault();
     
     const email=inputEmail.value;
     const password=inputPassword.value;
     firebase.auth().signInWithEmailAndPassword(email, password)
     .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
     });

    
}

firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
       location.href='../panel/admin.html';
       // ...
     } else {
          
     }
   });
/*ingresar usuario*/
