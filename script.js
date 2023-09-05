window.onload = () => {
    let button = document.querySelector("#btn");
 
    button.addEventListener("click", calculateBMI);
};
 
function calculateBMI() {
 
    let height = parseInt(document
            .querySelector("#height").value);
 
  
    let weight = parseInt(document
            .querySelector("#weight").value);
 
    let result = document.querySelector("#result");
 
  
    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";
 
    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Please enter valid weight!";
 

    else {
 
  
       let bmi = weight / ((height / 100) ** 2);
 
      
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
 
        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML =
                `Your BMI is normal : <span>${bmi}</span>`;
 
        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
}