const subBut = document.getElementById("subBut");
const carForm = document.getElementById("carForm");
let carName = document.getElementById("carName");
let carPrice = document.getElementById("carPrice");
let carModel = document.getElementById("carModel");
let customColor = document.getElementById("customColor");

document.getElementById("subBut").addEventListener("click", function (event) {
  event.preventDefault();
  formSub();
});

function formSub() {
  let arr = [carName.value, carPrice.value, carModel.value, customColor.value];
  validate(arr);
  console.log(arr);
}

function validate(arr) {
  let [cName, cPrice, cModel, cColor] = arr;
  let valid = false;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case arr[i] = '':
          console.log(arr[i] + 'is empty');
        break;
      default:
          valid = true
        break;
    }
    console.log(valid);
    
  }
}
