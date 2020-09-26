const temp = document.querySelector("#temp");
const tempf = document.querySelector("#tempf");
// console.log(tempf);

btn.addEventListener("click", tempcalc);

function tempcalc(){
        if (temp.value== ''){
            alert('Please Enter Temparture Value');
        }
    else{
    let tempcalc = Number(temp.value)+273.15;
    tempf.innerHTML = `Temperature in Fahrenheit: ${tempcalc}F`;
    
    }
}
