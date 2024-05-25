document.addEventListener('input', function(event) {
    var target = event.target;
    if (target.tagName.toLowerCase() === 'input' && target.type === 'number' && target.value.length > 4) {
        target.value = target.value.slice(0, 4);
    }
});

function calculateHW(){
    
    var heightCm = parseFloat(document.getElementById("height").value);
    var weightKg = parseFloat(document.getElementById("weight").value);

    var heightM = heightCm / 100;

    var modal = document.getElementById("myModal");
    var resultDiv = document.getElementById("result");

    var BMI = weightKg / (heightM * heightM);


    var formattedBMI = BMI.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    

    if (isNaN(weightKg) || isNaN(heightM) || weightKg <= 0 || heightM <= 0) {
        resultDiv.innerHTML = "Please enter valid weight and height.";
    }
    else if (BMI >= 0 && BMI < 18.5){
        resultDiv.innerHTML = "Your BMI is " + formattedBMI + " and you are <b class='underweightColor'> underweight </b>";
    } else if (BMI >= 18.5 && BMI <= 24.9){
        resultDiv.innerHTML = "Your BMI is " + formattedBMI + " and you have <b class='normalweightColor'> normal weight </b>";
    } else if (BMI >= 25 && BMI <= 29.9){
        resultDiv.innerHTML = "Your BMI is " + formattedBMI + " and you are <b class='overweightColor'> overweight <b>";
    } else if (BMI >= 30 && BMI <= 39.9){
        resultDiv.innerHTML = "Your BMI is " + formattedBMI + " and you are <b class='obeseColor'> obese <b>";  
    } else if (BMI >= 40 && BMI <= 299){
        resultDiv.innerHTML = "Your BMI is " + formattedBMI + " and you are <b class='obeseColor'> severe obese <b>";
    } else if (BMI > 300){
        resultDiv.innerHTML = "BMI value is " + formattedBMI + " this value is <b class='impossibleColor'> unachievable <b>";  
    }

    modal.style.display = "block";

}

function clearInput(){
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").innerHTML = "Result";
}

// Function to close modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
