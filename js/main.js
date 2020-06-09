/*
var nameInput = document.getElementById('user-name');
console.log(nameInput.value)
var inputs = document.getElementsByClassName('form-control');
console.log(inputs)
var inputsByName = document.getElementsByName('user')
console.log(inputsByName)
var elementsByTagname = document.getElementsByTagName("input")
console.log(elementsByTagname)
var elementByQuery = document.querySelector("input.form-control")
console.log(elementByQuery)
*/



 
const userDataForm = () => {
    let userName = document.getElementById("user-name").value;
    let userAddress = document.getElementById("user-address").value;
    let userPhone = document.getElementById("user-phone").value;
    let userForm = {
      userName,
      userAddress,
      userPhone,
    };
    console.log(userForm);
  };
  userDataForm();
