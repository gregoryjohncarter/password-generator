// Assignment code here


//runs after clicking the button, includes empty pwArray at beginning
const generatePassword = () => {

  var pwArray = [];
//ask what length they would like
var pwLengthPrompt = window.prompt("What character length would you like for your password? Please enter a number at least 8 characters long and no longer than 128");


//validate the length prompt or ask again
if (pwLengthPrompt >= 8 && pwLengthPrompt < 129) {

  var pwLength = pwLengthPrompt;
  pwLength = parseInt(pwLength);
  
  pwPushLength();
} else {
    generatePassword();
  }


  //prompt what type of password, lower, upper, etc.  function gets hoisted above if pwLengthPrompt is valid
  function pwPushLength() {

    var pwTypePrompt = window.prompt("What type of password would you like to generate? Type 1 for lowercase, 2 for UPPERCASE, 3 for numeric, 4 for special characters, 5 for ALL.");
      
    pwTypePrompt = parseInt(pwTypePrompt);



//choose a random character from a chosen array
//distinct character arrays here

const randomCharacter1 = () => { 
  const lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return lowercaseArray[Math.floor(Math.random() * (lowercaseArray.length - 1))];
  
}

const randomCharacter2 = () => { 
  const uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  return uppercaseArray[Math.floor(Math.random() * (uppercaseArray.length - 1))]; 
}
const randomCharacter3 = () => { 
  const numericArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  
  return numericArray[Math.floor(Math.random() * (numericArray.length - 1))];
}
const randomCharacter4 = () => { 
  const specialArray = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '['];
  
  return specialArray[Math.floor(Math.random() * (specialArray.length - 1))];
}
const randomCharacter5 = () => { 
  const allArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '['];
  
  return allArray[Math.floor(Math.random() * (allArray.length - 1))];
}

    
//push a random character from the chosen array--  'pwLength' amount of times
    switch (pwTypePrompt) {
       case 1:
        for (let i = 0; i < pwLength; i++) {
         
          pwArray.push(randomCharacter1());
      }
      
      break;

      case 2:
        for (let i = 0; i < pwLength; i++) {
    
          pwArray.push(randomCharacter2());
      }
      
      break;

      case 3:
        for (let i = 0; i < pwLength; i++) {
      
          pwArray.push(randomCharacter3());
      }
     
      break;

      case 4:
        for (let i = 0; i < pwLength; i++) {
         
          pwArray.push(randomCharacter4());
      }
      
      break;

      case 5:
        for (let i = 0; i < pwLength; i++) {
         
          pwArray.push(randomCharacter5());
      }
      
      break;
// return the user to the prompt if they did not pick a valid option
      default:
        window.alert("You did not pick a valid option. Try again.");
        pwPushLength();
        break;
    }

  }
  //return the joined array back to this variable
  return pwArray.join('');
}

  



// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
