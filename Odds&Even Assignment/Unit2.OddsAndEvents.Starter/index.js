/* a const variable named 'state' and holds an object*/
/* numbers, oddNumbers, and evenNumbers are properties */
/* the square brackets [] are an empty array */
const state = {
    numbers: [],
    oddNumbers: [],
    evenNumbers: [],
}

/* getting references to the html element */
const numberInput = document.getElementById("number");
const submitButton = document.getElementById("submit");
const resultOutput = document.getElementById("result1");
const sortOneButton = document.getElementById("sortOne");
const sortAllButton = document.getElementById("sortAll");
const resultOdds = document.getElementById("result2");
const resultEvens = document.getElementById("result3");


submitButton.addEventListener("click", function (event) {
    /* prevent default form submission */
    event.preventDefault();

    /* convert string number to an actual number using the number() function */
    const num = Number(numberInput.value);

    /* if statement checks if the user entered a number or a non-numerical value */
    if (numberInput.value === "" || isNaN(num) || num < 0) {
        alert("Please enter a valid number");
        return;
    }

    /* adds a new number to the list of numbers entered by the user */
    state.numbers.push(num);

    /* updates the result1 output and clears the input field*/
    resultOutput.textContent = state.numbers.join(", ");
    numberInput.value = "";
});

sortOneButton.addEventListener("click", function (event) {
    /* stop the function if there are no more numbers */
    if (state.numbers.length === 0) return;
    
    /* removes the first element from the array */
    const numberToSort = state.numbers.shift();

    /* sort the numbers into odd or even */
    if (numberToSort % 2 === 0) {
        state.evenNumbers.push(numberToSort);
    } else {
        state.oddNumbers.push(numberToSort);
    }

    /* shows the odd and even numbers on the page */
    resultOdds.textContent = state.oddNumbers.join(", ");
    resultEvens.textContent = state.evenNumbers.join(", ");
    /* updating the number bank list */
    resultOutput.textContent = state.numbers.join(", ");
});

sortAllButton.addEventListener("click", function (event) {
    while (state.numbers.length > 0) {
    
        /* removes the first element from the array */
        const numberToSort = state.numbers.shift();

        /* sort the numbers into odd or even */
        if (numberToSort % 2 === 0) {
            state.evenNumbers.push(numberToSort);
        } else {
        state.oddNumbers.push(numberToSort);
        }
    }    

    /* shows the odd and even numbers on the page */
    resultOdds.textContent = state.oddNumbers.join(", ");
    resultEvens.textContent = state.evenNumbers.join(", ");
    /* number bank gets cleared */
    resultOutput.textContent = "";               

});
