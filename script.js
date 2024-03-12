function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value); // in centimeters
    const weight = parseFloat(document.getElementById('weight').value); // in kilograms

    // Convert height to meters
    const heightMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightMeters * heightMeters);

    // Display result
    const resultElement = document.getElementById('result');
    if (!isNaN(bmi)) {
        resultElement.textContent = `Your BMI: ${bmi.toFixed(2)}`;
    } else {
        resultElement.textContent = 'Please enter valid height and weight.';
    }
}
