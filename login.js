
// valid credentials

const validusername = "Walker";

const validpassword = "saka1nero2";

// getting form elements


document.getElementById("login-button").addEventListener("click",(e)=>{

  const username = document.getElementById("Username").value;
  const password = document.getElementById("Password").value;

  if (username === validusername && password === validpassword){
    document.getElementById("message").innerHTML ="Login successful!"
    document.getElementById("message").style.color = "white";
  }else{
    document.getElementById("message").innerHTML="Login failed!"
    document.getElementById("message").style.color = "red"
  }


});


// event listener for form submission

/*form.addEventListener("submit" ,(event)=>{

  // getting user input
  const username = document.getElementById("Username").value;

  const password = document.getElementById("Password").value;

  // check credentials

  if (username === validusername && password === validpassword){
    messageBox.style.color = "green";
    messageBox.textContent = "Login successful";
    alert("Login successful");

    // set local storage to indicate user is logged in
    localStorage.setItem("isLoggedIn", true);

  }else{
    messageBox.style.color ="red";
    messageBox.textContent = "Invalid username or password";
  }
});
*/
