// let users = [
//     {
//       id: 0,
//       name: "John",
//       email: "john@example.com",
//       password: "123456",
//       saldo: 320,
//     },
//     {
//       id: 1,
//       name: "Jane",
//       email: "jane@example.com",
//       password: "123456",
//       saldo: 180,
//     },
//     {
//       id: 2,
//       name: "Doe",
//       email: "doe@example.com",
//       password: "123456",
//       saldo: 640,
//     },
//   ];

//   //Update at localStorage
//   if (false) {
//     localStorage.setItem("allUsers", JSON.stringify(users));
//   };
// console.log(jsonUsers); /* JSON */

//add at arrUsers
let arrUsers = JSON.parse(localStorage.getItem("allUsers"));
// console.log(arrUsers); /* Array */

//Variables
const btnLogin = document.getElementById("btnLogin");
const btnLogOut = document.getElementById("btnLogOut");

const inputEmail = document.getElementById("inputEmail");
const inputPass = document.getElementById("inputPassword");

const balanceMax = 990;
const balanceMin = 10;

const bienvenida = document.getElementById("bienvenida");

// Validacion usuario
if (btnLogin) {
  btnLogin.addEventListener("click", () => {
    event.preventDefault();

    let user = arrUsers.find(
      (user) =>
        inputEmail.value === user.email && inputPass.value === user.password
    );

    if (user != undefined) {
      localStorage.setItem("idUser", user.id);
      // alert("Inicio de Sesión Correcto");
      swal("Inicio de sesión correcto!", "", "success");
      location.href = "./ingeBank.html";
    } else {
      inputEmail.value = "";
      inputPass.value = "";
      // alert("Error en ingreso de contraseña o email");
      swal(
        "Inicio de sesión incorrecto!",
        "Error en email o contraseña",
        "error"
      );
    }
  });
}

// Log out
if (btnLogOut) {
  btnLogOut.addEventListener("click", () => {
    location.href = "./index.html";
  });
}

//Asignacion de index
let idUser = localStorage.getItem("idUser");

//Bienvenida
if (true) {
  bienvenida.innerHTML = ` Bienvenid@: ${arrUsers[idUser].name} `;
}

//Saldo
const btnSaldo = document.getElementById("btnSaldo");
const saldo = document.getElementById("saldoUser");
if (btnSaldo) {
  btnSaldo.onclick = () => {
    saldo.innerHTML = `
        Su saldo actual es: $${arrUsers[idUser].saldo} `;
  };
}

//Ingresar
const btnIngresar = document.getElementById("btnIngresar");
const inputIngresar = document.getElementById("inputIngresar");
const btnIngresarSaldo = document.getElementById("ingresar");

if (btnIngresar) {
  btnIngresar.addEventListener("click", () => {
    if (btnIngresarSaldo) {
      btnIngresarSaldo.addEventListener("click", () => {
        if (
          parseInt(inputIngresar.value) + arrUsers[idUser].saldo <=
          balanceMax
        ) {
          arrUsers[idUser].saldo =
            parseInt(inputIngresar.value) + arrUsers[idUser].saldo;
            // alert(`Su nuevo saldo es: ${arrUsers[idUser].saldo}`);
          swal(
            "Transacion exitosa!",
            `Su nuevo saldo es: ${arrUsers[idUser].saldo}`,
            "success"
          );
          inputIngresar.value = "";
          udateLocalStorage();
        } else if (inputIngresar.value !== "") {
          swal(
            "Transacion no exitosa!",
            `No se pude realizar la transacion, porque el maximo en cuenta es $990`,
            "error"
          );
          inputIngresar.value = "";
        }
      });
    }
  });
}

//Retirar
const btnRetirar = document.getElementById("btnRetirar");
const inputRetirar = document.getElementById("inputRetirar");
const btnRetirarSaldo = document.getElementById("retirar");

if (btnRetirar) {
  btnRetirar.addEventListener("click", () => {
    if (btnRetirarSaldo) {
      btnRetirarSaldo.addEventListener("click", () => {
        if (
          arrUsers[idUser].saldo - parseInt(inputRetirar.value) >=
          balanceMin
        ) {
          arrUsers[idUser].saldo =
            arrUsers[idUser].saldo - parseInt(inputRetirar.value);
            // alert(`Su nuevo saldo es: ${arrUsers[idUser].saldo}`);
          swal(
            "Transacion exitosa!",
            `Su nuevo saldo es: ${arrUsers[idUser].saldo}`,
            "success"
          );
          inputRetirar.value = "";
          udateLocalStorage();
        } else if (inputRetirar.value !== "") {
          // alert("No se pude realizar la transacion, porque el minimo es $10");
          swal(
            "Transacion no exitosa!",
            `No se pude realizar la transacion, porque el minimo en cuenta es $10`,
            "error"
          );
          inputRetirar.value = "";
        }
      });
    }
  });
}

//Update Local Storage
function udateLocalStorage() {
  localStorage.setItem("allUsers", JSON.stringify(arrUsers));
}
