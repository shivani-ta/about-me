function temperatureConverter() {
    valNum = document.getElementById("tempInput").value
    console.log(parseInt(valNum),"valueeeee")
    document.getElementById("outputCelsius").innerHTML =  (valNum-32) / 1.8;
    event.preventDefault()
  }


