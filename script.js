let numberTextField = document.getElementById("number");
let saveButton = document.getElementById("save");

numberTextField.addEventListener("input", function(){
    let sum=0, avg=0, product=1;


   let  numbers = numberTextField.value;

  numbers =   numbers.replaceAll(" ","");

  let array = numbers.split(",");

  let newArray = array.map(item=>{

    return Number.parseFloat(item);
  });

  let validNumberArray = newArray.filter(item=>{

    return !(isNaN(item));
  });

  console.log(validNumberArray);

  validNumberArray.forEach(item => {
    sum = sum + item;
    product = product * item;
  });

  avg = sum / validNumberArray.length;

  if(validNumberArray.length == 0) {
    sum = 0;
    avg = 0;
    product = 0;
  }

  document.getElementById("sum").value = sum;
  document.getElementById("avg").value = avg;
  document.getElementById("product").value = product;

});