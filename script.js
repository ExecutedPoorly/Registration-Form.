// var passwordfield = document.getElementById("passwordfield");
// var passwordconfirm = document.getElementById("passwordconfirm");
// console.log(passwordfield.value);

// function CheckPasswordMatch(){
//     console.log(passwordfield, passwordconfirm);
//     if(passwordfield.value != passwordconfirm.value){
//         passwordconfirm.setCustomValidity("Passwords must match");
//     }
//     else{
//         passwordconfirm.setCustomValidity("");
//     }    

// }
// passwordfield.onchange = CheckPasswordMatch();
// passwordconfirm.onkeyup = CheckPasswordMatch();

var password = document.getElementById("password")
, confirm_password = document.getElementById("confirm_password");

function validatePassword(){
    console.log("no", password.value, confirm_password.value);
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}
