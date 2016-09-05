var attempt = 3;// Variable to count number of attemps.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if (username == "Formget" && password == "formget#123"){
    alert ("Login successfully");
    window.location = "success.html"; // Redirecting to other page.
    return false;
}
else {
    attempt --;// Decrimenting by one.
    alert("You have " +attempt+ " more try;");
    // Disabling fields after 3 attempts.
    if(attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
        }
    }
}


