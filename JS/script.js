//file javascript 

function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value / 100; //Convert to meter

    let bmi = weight / (height * height);
    let resultText = '';

    if (bmi < 18.5) {
        resultText = 'Anda berada dalam kategori kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText = 'Anda memiliki berat badan ideal.';
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText = 'Anda memiliki berat badan berlebih';
    } else {
        resultText = 'Anda berada dalam kategori obesitas';
    }

    document.getElementById('bmiValue').innerText = bmi.toFixed(1);
    document.getElementById('bmiResult').innerText = resultText;
}
