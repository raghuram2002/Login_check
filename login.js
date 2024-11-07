var count = 2;

function validate() {
   var user = document.login.username.value;
   var password = document.login.password.value;
   var valid = false;
   var usernameArray = ["BABA2023"];
   var passwordArray = ["2027"];
   
   for (var i = 0; i < usernameArray.length; i++) {
       if (user == usernameArray[i] && password == passwordArray[i]) {
           valid = true;
           break;
       }
   }

   if (valid) {
       alert("Login was successful");
       window.location = "https://bitsvizag.com/";  // Updated URL with 'https://'
       return true;  // Changed to true for successful redirection
   } else {
       var again = "tries";
       if (count == 1) {
           again = "try";
       }
       if (count >= 1) {
           alert("Wrong password or username. You have " + count + " " + again + " left.");
           count--;
       }
   }
   return false;  // Prevents form submission on failure
}
