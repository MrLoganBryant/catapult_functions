let button = document.querySelector(".password-check");

// 1 - Write your function here
// Write a function to test if the password is correct
// The function should take in the text of the password
// as an input, and return true if the password is correct
function passwordcheck(password){
    //valid return password = "chicken"
    if (password === "chicken"){
        return true
    } 
    return false //default case

}

button.addEventListener("click", function() {

    let password = document.querySelector(".password-input").value;

    // 2 - Call your function here, store the result in a variable
    // and use the variable to determine which message to display
    if (passwordcheck(password)) {
        document.querySelector(".yes").style = "display:block";
        document.querySelector(".denied").style = "display:none";
    } else {
        document.querySelector(".denied").style = "display:block";
        document.querySelector(".yes").style = "display:none";
    }

});

