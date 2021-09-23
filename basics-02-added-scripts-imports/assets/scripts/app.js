const defaultResult = 0;
currentResult = defaultResult;

const add = (num1, num2) => {
  currentResult = currentResult + parseInt(userInput.value); 
  console.log(currentResult);  
  outputResult(currentResult, "ops")
 };

addBtn.addEventListener("click", add);
