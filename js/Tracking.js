var years = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var bmi = [37.3,33.2,30,25.5,24.3,22,20];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: bmi,
        label: "BMI",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  }
});