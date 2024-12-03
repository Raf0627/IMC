function calculate() {
    var height = document.getElementById("height").value / 100;
    var weight = document.getElementById("weight").value;
  
    var imc = weight / height ** 2;
    var text=""
    if (imc < 18.5) {
      text="Magreza"
    } else if (imc < 25) {
      text="Normal"
    } else if (imc < 30) {
      text="Sobrepeso"
    } else if (imc < 35) {
      text="Obesidade grau I"
    } else if (imc < 40) {
      text="Obesidade grau II"
    } else if (imc > 39.9) {
        text="Obesidade grau III"
    }
    document.getElementById("text_area").innerText=text
  }