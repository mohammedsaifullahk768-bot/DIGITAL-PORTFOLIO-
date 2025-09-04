// Handle form submission

document.getElementById("userForm").addEventListener("submit", function(event) {

  event.preventDefault(); // prevent page refresh

  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let message = document.getElementById("message").value;

  alert("Thank you " + name + "! Your details have been submitted.\nEmail: " + email + "\nMessage: " + message);

  // clear form

  document.getElementById("userForm").reset();

});