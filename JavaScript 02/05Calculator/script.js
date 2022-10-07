function insert(num){
    const textElement = document.querySelector(".textview")
    textElement.value += num;
}
  
function equals(){
    const textElement = document.querySelector(".textview")
    textElement.value = eval(textElement.value);
}
 
function clean(){
    const textElement = document.querySelector(".textview")
    textElement.value = '';
}
  
function back(){
    const textElement = document.querySelector(".textview")
    textElement.value = textElement.value.slice(0,-1);
}