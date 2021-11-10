// 🚩 Dada Ki Jay Ho 🚩



var btn = document.getElementById("get-btn");
var plaintext_field = document.getElementById("plaintext");
var key_field = document.getElementById("key");
var passwordE = document.getElementById("password");

function generatePassword() {
  // get plaintext
  var ptext = plaintext_field.value;
  // get key
  var ktext = key_field.value;
  var klen = ktext.length;

  if (klen == 0 || ptext.length == 0) {
    password = "Invalid Plaintext or Key";
    passwordE.textContent = password;
    return;
  }
  // password to be generated
  var password = "";

  var sum_of_all_ptext_chars = 0;
  var sum_of_all_ktext_chars = 0;
  for (var i = 0; i < ptext.length; i++) {
    sum_of_all_ptext_chars += ptext.charCodeAt(i) * 2;
  }
  for (var ii = 0; ii < ktext.length; ii++) {
    sum_of_all_ktext_chars += ktext.charCodeAt(ii) * 4;
  }


  // ###### Password Generating Algorithm #########
  var feedback = 0;

  // make plaintext of size 16
  while (ptext.length < 16) {
    ptext = ptext + ptext.substring(0, 16 - ptext.length);
  }

  // build arrays
  const num_arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const upper_arr = ["H", "R", "Z", "D", "T", "F", "G", "A", "K", "P", "I", "L", "M", "N", "U", "J", "Q", "B", "S", "E", "O", "V", "W", "X", "Y", "C"];
  const lower_arr = [
    "y", "g", "v", "c", "f", "t", "r", "d", "x", "z", "q", "w", "e", "s", "a", "h", "j", "i", "o", "u", "p", "k", "l", "m", "n", "b"
  ];
  const special_arr = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '\\', '{', '}', '|', ':', ';', '<', '>', ',', '.'];

  // set variable n,u,l,s
  // n = number of characters to choose from number array for plaintext
  // u = no.of uppercase to choose from ....
  // l ....
  // s ....
  n = 4
  s = 3
  u = 5
  l = 4

  var pindex = 0;
  var kindex = 0;

  while (n--) {
    var generated_num = ptext.charCodeAt(pindex) + ktext.charCodeAt(kindex % klen) + feedback + pindex + kindex + sum_of_all_ptext_chars + sum_of_all_ktext_chars;
    feedback = generated_num;

    password += num_arr[generated_num % 10];
    pindex++;
    kindex++;
  }

  while (s--) {
    var generated_num = ptext.charCodeAt(pindex) + ktext.charCodeAt(kindex % klen) + feedback + pindex + kindex + sum_of_all_ptext_chars + sum_of_all_ktext_chars;
    feedback = generated_num;

    password += special_arr[generated_num % 10];
    pindex++;
    kindex++;
  }

  while (u--) {
    var generated_num = ptext.charCodeAt(pindex) + ktext.charCodeAt(kindex % klen) + feedback + pindex + kindex + sum_of_all_ktext_chars + sum_of_all_ptext_chars;
    feedback = generated_num;

    password += upper_arr[generated_num % 10];
    pindex++;
    kindex++;
  }


  while (l--) {
    var generated_num = ptext.charCodeAt(pindex) + ktext.charCodeAt(kindex % klen) + feedback + pindex + kindex + sum_of_all_ktext_chars + sum_of_all_ptext_chars;
    feedback = generated_num;

    password += lower_arr[generated_num % 10];
    pindex++;
    kindex++;
  }

  // permutation
  password =
    password[13] +
    password[5] +
    password[11] +
    password[8] +
    password[1] +
    password[0] +
    password[9] +
    password[14] +
    password[10] +
    password[2] +
    password[4] +
    password[12] +
    password[3] +
    password[7] +
    password[15] +
    password[6];

  // ##############################################


  console.log(password);
  // show password to user
  passwordE.textContent = password;
}

btn.addEventListener("click", generatePassword);