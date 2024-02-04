let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Envoi du form detecté !");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.querySelector("#email");

  if (email.value == "") {
    console.log("invalide");
  } else {
    console.log("valide");
  }
  if (email.value == "") {
    console.log("invalide");
  } else {
    email.classList.add("success");
  }

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");
  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  if (email.value == "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");
    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";
    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  let nom = document.querySelector("#nom");
  if (nom.value.length < 6) {
    errorContainer.classList.add("visible");
    nom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "le champ nom doit contenir au moins 6 caractères";

    errorList.appendChild(err);
  } else {
    nom.classList.add("success");
  }

  let prenom = document.querySelector("#prenom");
  if (prenom.value.length < 3) {
    errorContainer.classList.add("visible");
    prenom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "le champ prenom doit contenir au moins 3 caractères";

    errorList.appendChild(err);
  } else {
    prenom.classList.add("success");
  }

  let password = document.querySelector("#password");
  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  if (password.value.length < 10 || passCheck.test(password.value) == false) {
    errorContainer.classList.add("visible");
    password.classList.remove("success");
    console.log(
      "Le mdp est pas valide tdc, longueur: " + password.value.length
    );
    let err = document.createElement("li");
    err.innerText =
      "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial";
    errorList.appendChild(err);
  } else {
    console.log("le mdp est valide");
    password.classList.add("success");
  }

  let passwordInitial = document.querySelector("#password");
  let passwordRepeat = document.querySelector("#password2");
  if (passwordInitial.value != passwordRepeat.value) {
    errorContainer.classList.add("visible");
    passwordRepeat.classList.remove("success");
    let err = document.createElement("li");
    err.innerText = "Les mots de passes sont différents";
    errorList.appendChild(err);
  } else if (passwordRepeat.value.length != 0) {
    passwordRepeat.classList.add("success");
  }

  let axe = document.querySelector("#axe");
  if (axe.value == "") {
    errorContainer.classList.add("visible");
    let err = document.createElement("li");
    err.innerText = "Veuillez séléctionner un axe!";
    errorList.appendChild(err);
  } else {
    axe.classList.add("success");
  }

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");
  if (
    nom.classList.contains("success") &&
    prenom.classList.contains("success") &&
    email.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordRepeat.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
    console.log("Succes ????");
  }
});