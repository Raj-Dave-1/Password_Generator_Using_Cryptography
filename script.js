// 🚩 Dada Ki Jay Ho 🚩



var btn = document.getElementById("get-btn");
var plaintext_field = document.getElementById("plaintext");
var key_field = document.getElementById("key");
var passwordE = document.getElementById("password");

function generatePassword() {
  var ptext = plaintext_field.value;
  var ktext = key_field.value;

  var all_ascii_sum = 0;
  for (var i = 0; i < ktext.length; i++) {
    all_ascii_sum += (ktext.charCodeAt(i));
  }
  for (i = 0; i < ptext.length; i++) {
    all_ascii_sum += (ptext.charCodeAt(i));
  }

  var password = "";
  var ch = "";
  for (i = 0; i < ptext.length; i++) {
    ch = String.fromCharCode(
      (
        ((ptext.charCodeAt(i) + all_ascii_sum) % 52) + "A".charCodeAt(0))
    );
    password += ch;
  }
  console.log(password);

  passwordE.textContent = password;
}

btn.addEventListener("click", generatePassword);