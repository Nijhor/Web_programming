// Get the input field and all the buttons
const inputField = document.querySelector('input[type="text"]');
const buttons = document.querySelectorAll('input[type="button"]');

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', e => {
    const buttonValue = e.target.value;
    if (buttonValue === '=') {
      // Evaluate the expression in the input field and display the result
      inputField.value = eval(inputField.value);
    } else if (buttonValue === 'C') {
      // Clear the input field
      inputField.value = '';
    } else {
      // Add the button value to the input field
      inputField.value += buttonValue;
    }
  });
});