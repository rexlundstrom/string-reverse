// controller function
const getValues = () => {
  // get the user's input
  let userInput = document.getElementById("message").value;
  // send it through the reversed string function
  let reversedInput = reverseString(userInput);

  displayString(reversedInput);
}

// business logic
const reverseString = (message) => {
  // declare empty string
  let output = '';

  for (let i = message.length - 1; i >= 0; i--) {
    output += message[i];
  }
  // iterate over current string
  return output;
}

// view function
const displayString = (reversedMessage) => {
  // display string on the page 
  document.getElementById("msg").textContent = reversedMessage;
  document.getElementById("alert").classList.remove('d-none');
}


// let msg = document.getElementById("message").value;
  // // alert(msg);

  // Swal.fire({
  //   backdrop: false,
  //   title: "String Reverse",
  //   text: msg,
  // });
