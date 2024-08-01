function calculateTime() {
    var hoursInput = document.getElementById("hours");
    var minutesInput = document.getElementById("minutes");
    var hours = parseInt(hoursInput.value);
    var minutes = parseInt(minutesInput.value);
  
    if (isNaN(hours) || isNaN(minutes) || hours < 0 || minutes < 0 || minutes > 59) {
      document.getElementById("result").textContent = "Por favor, insira valores válidos.";
      return;
    }
  
    var totalMinutes = hours * 60 + minutes;
    var resultHours = Math.floor(totalMinutes / 60);
    var resultMinutes = totalMinutes % 60;
  
    document.getElementById("result").textContent = resultHours + " horas e " + resultMinutes + " minutos.";
  }