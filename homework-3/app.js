function calculateInterest() {
    // Get the input values
    var principle = parseFloat(document.getElementById('principle').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var time = parseFloat(document.getElementById('time').value);

    // Check if inputs are valid numbers
    if (isNaN(principle) || isNaN(rate) || isNaN(time)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers.";
        return;
    }

    // Calculate the total interest using the formula
    var total = principle * (1 + (rate / 100) * time);

    // Fix the result to two decimal places
    total = total.toFixed(2);

    // Display the result
    document.getElementById('result').innerHTML = "Total Amount: $" + total;
}