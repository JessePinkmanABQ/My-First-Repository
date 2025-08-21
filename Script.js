function sendMessage() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  document.getElementById("status").innerText = 
    `✅ Thank you ${name}! I will reach out to you at ${email}.`;

  // Prevent page reload
  return false;
}
