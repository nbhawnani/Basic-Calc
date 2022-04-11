function clearAll(){
  document.getElementById("calc").value='';
}

function genExpression(param){
  document.getElementById("calc").value += param; 
}

function evalResult(){
  document.getElementById("calc").value =   eval(document.getElementById("calc").value);
}