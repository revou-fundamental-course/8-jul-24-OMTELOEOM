// JS for theme toggle light and dark
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    document.querySelector('.main-title').classList.toggle('dark');
    document.querySelectorAll('.main-content, .result-content, form').forEach(element => {
        element.classList.toggle('dark');
    });
    document.querySelectorAll('.button').forEach(button => {
        button.classList.toggle('dark');
    });
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.classList.toggle('dark');
    });
    document.querySelector('.result-section').classList.toggle('dark');
});

// validation for input
function validateAndCalculateBMI() {
    const weight = document.getElementById('weight').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;

    if (!weight || !age || !height || weight <= 0 || age <= 0 || height <= 0) {
        alert('Semua bidang harus diisi dengan nilai lebih dari 0.');
        return false;
    }

    if (age < 10 || age > 100) {
        alert('Usia harus antara 10 dan 100 tahun.');
        return false;
    }

    calculateBMI();
}

function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (height > 0) {
        const bmi = weight / ((height / 100) * (height / 100));
        document.getElementById('bmiValue').textContent = bmi.toFixed(2);

        let bmiResult = '';
        let bmiDescription = '';

        if (bmi < 18.5) {
            bmiResult = 'Kurus';
            bmiDescription = 'Hasil BMI di bawah 18.5 Anda berada dalam kategori kurus. Anda disarankan untuk menambah berat badan agar mencapai berat badan yang ideal.';
        } else if (bmi < 24.9) {
            bmiResult = 'Normal';
            bmiDescription = 'Hasil BMI di antara 18.5 dan 24.9 Anda berada dalam kategori berat badan normal. Pertahankan gaya hidup sehat Anda.';
        } else if (bmi < 29.9) {
            bmiResult = 'Gemuk';
            bmiDescription = 'Hasil BMI di antara 25 dan 29.9 Anda berada dalam kategori gemuk. Anda disarankan untuk menurunkan berat badan melalui pola makan yang sehat dan olahraga.';
        } else {
            bmiResult = 'Obesitas';
            bmiDescription = 'Hasil BMI di atas 30 Anda berada dalam kategori obesitas. Anda sangat disarankan untuk berkonsultasi dengan dokter untuk program penurunan berat badan yang aman dan efektif.';
        }

        document.getElementById('bmiResult').textContent = bmiResult;
        document.getElementById('bmiDescription').textContent = bmiDescription;
    }
}
