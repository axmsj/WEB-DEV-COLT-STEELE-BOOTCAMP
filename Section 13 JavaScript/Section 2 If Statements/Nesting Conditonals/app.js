const password = prompt('Please Enter a new password');
// Password must be 6+ characters.
if (password.length >= 6) {
  // Password cannot include spaces
  if (password.indexOf(' ') === -1) {
    console.log('Valid Password!');
  } else {
    // Password cannot include spaces
    console.log('Password cannot contain spaces!');
  }
} else {
  console.log('Password TOO SHORT! Needs to be 6 characters are longer');
}
