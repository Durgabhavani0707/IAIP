const display = document.getElementById("display");

const historyText = document.getElementById("history");

const calculator = document.getElementById("calculator");

/* Add Values */

function appendValue(value){

  display.value += value;
}

/* Clear */

function clearDisplay(){

  display.value = "";

  historyText.innerText = "";
}

/* Delete */

function deleteLast(){

  display.value = display.value.slice(0,-1);
}

/* Calculate */

function calculate(){

  try{

    historyText.innerText = display.value;

    display.value = eval(display.value);

  }

  catch{

    display.value = "Error";
  }

}

/* Theme Toggle */

function toggleTheme(){

  calculator.classList.toggle("light-mode");
}

/* Keyboard Support */

document.addEventListener("keydown", function(event){

  const key = event.key;

  if(!isNaN(key) || ['+','-','*','/','.','%'].includes(key)){

    appendValue(key);
  }

  else if(key === "Enter"){

    calculate();
  }

  else if(key === "Backspace"){

    deleteLast();
  }

  else if(key.toLowerCase() === "c"){

    clearDisplay();
  }

});