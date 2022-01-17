// weight dan height nantinya diambil dari textfield, utk sekarang pakai global var dulu
// panggil function ini saat button di klik untuk kalkulasi bmi
function bmiCalc(){
    let weight = document.getElementById("inputW").value;
    let height = document.getElementById("inputH").value;
    let bmi = 0;
    let height2 = height * height;
    let result = document.getElementById("BMIStatus1");
    let description = document.getElementById("BMINominal1");

    bmi = weight / (height2/10000);
    bmi = bmi.toFixed(2)

    if(weight == 0 || height == 0){
        alert("Please fill the Weight and Height field")
        e.preventDefault()
    }

    else{
        if(bmi < 18.5){
            result.innerHTML = "Underweight";
            description.innerHTML = bmi ;
        }
        else if(bmi > 18.5 && bmi < 22.9){
            result.innerHTML = "Normal";
            description.innerHTML = bmi;
        }
        else if(bmi > 22.9 && bmi < 29.9){
            result.innerHTML = "Overweight";
            description.innerHTML = bmi;
        }
        else{
            result.innerHTML = "Obesity";
            description.innerHTML = bmi;
        }
    }

}