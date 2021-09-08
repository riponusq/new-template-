function keydownAction(event) {
    document.querySelector("#status").innerHTML = "KEYDOWN Event";
  
  }
  
  document.addEventListener("keydown", keydownAction);
  
  function keyupAction(event) {
    document.querySelector("#status").innerHTML = "KEYUP Event";
  
  }
  
  document.addEventListener("keyup", keyupAction);