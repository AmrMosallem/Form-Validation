let email = document.getElementById("email"),
  password = document.getElementById("password"),
  phone = document.getElementById("phone"),
  credit = document.getElementById("credit"),
  username = document.getElementById("username"),
  date = document.getElementById("date"),
  sign = document.getElementById("sign");

function checkEmail() {
  if (/\w+@\w+\.\w+/i.test(email.value)) return true;
  return false;
}
function checkPassword() {
  if (
    password.value.length >= 8 &&
    /\d/.test(password.value) &&
    /[a-z]/.test(password.value) &&
    /[A-Z]/.test(password.value) &&
    /(\W|_)/.test(password.value)
  )
    return true;
  return false;
}
function checkPhone() {
  if (/^\d{11}$/.test(phone.value)) return true;
  return false;
}
function checkCredit() {
  if (
    /^\d{16}$/.test(credit.value) ||
    /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(credit.value)
  )
    return true;
  return false;
}
function checkUsername() {
  if (/^[a-zA-Z0-9_]{5,15}$/.test(username.value)) return true;
  return false;
}

function checkDate() {
  // if (/^\d{2}\/\d{2}\/\d{4}$/.test(date.value)) return true;
  if(/^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/(19[0-9][0-9]|20([0-1][0-9]|2[0-3]))$/.test(date.value)) return true; // ( 0[1-9] | 1[0-2] ) / ( 0[1-9] | [1-2][0-9] | 3[0-1] ) / ( 19 | 20 ) [0-9][0-9] /)
  return false;
}

function showBorders(element, valid) {
  if (valid) {
    element.parentElement.querySelector(".invalid").classList.remove("focused");
    element.parentElement.querySelector(".valid").classList.add("focused");
    element.parentElement.parentElement
      .querySelector(".status")
      .classList.remove("active");
  } else {
    element.parentElement.querySelector(".invalid").classList.add("focused");
    element.parentElement.querySelector(".valid").classList.remove("focused");
  }
}
function hideBorders(element) {
  element.parentElement.querySelector(".invalid").classList.remove("focused");
  element.parentElement.querySelector(".valid").classList.remove("focused");
}

email.addEventListener("input", () => {
  showBorders(email, checkEmail());
});
email.addEventListener("focus", () => {
  showBorders(email, checkEmail());
});
email.addEventListener("blur", () => {
  hideBorders(email);
});
password.addEventListener("input", () => {
  showBorders(password, checkPassword());
});
password.addEventListener("focus", () => {
  showBorders(password, checkPassword());
});
password.addEventListener("blur", () => {
  hideBorders(password, checkPassword());
});

phone.addEventListener("input", () => {
  showBorders(phone, checkPhone());
});
phone.addEventListener("focus", () => {
  showBorders(phone, checkPhone());
});
phone.addEventListener("blur", () => {
  hideBorders(phone, checkPhone());
});

credit.addEventListener("input", () => {
  showBorders(credit, checkCredit());
});
credit.addEventListener("focus", () => {
  showBorders(credit, checkCredit());
});
credit.addEventListener("blur", () => {
  hideBorders(credit, checkCredit());
});

username.addEventListener("input", () => {
  showBorders(username, checkUsername());
});
username.addEventListener("focus", () => {
  showBorders(username, checkUsername());
});
username.addEventListener("blur", () => {
  hideBorders(username, checkUsername());
});
date.addEventListener("input", () => {
  showBorders(date, checkDate());
});
date.addEventListener("focus", () => {
  showBorders(date, checkDate());
});
date.addEventListener("blur", () => {
  hideBorders(date, checkDate());
});

sign.onclick = () => {
  if (!checkEmail()) {
    email.parentElement.parentElement
      .querySelector(".status")
      .classList.add("active");
    email.focus();
    email.scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (!checkPassword()) {
    password.parentElement.parentElement
      .querySelector(".status")
      .classList.add("active");
    password.focus();
    password.scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (!checkPhone()) {
    phone.parentElement.parentElement
      .querySelector(".status")
      .classList.add("active");
    phone.focus();
    phone.scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (!checkCredit()) {
    credit.parentElement.parentElement
      .querySelector(".status")
      .classList.add("active");
    credit.focus();
    credit.scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (!checkUsername()) {
    username.parentElement.parentElement
      .querySelector(".status")
      .classList.add("active");
    username.focus();
    username.scrollIntoView({ behavior: "smooth", block: "center" });
  } else if (!checkDate()) {
    date.parentElement.parentElement
      .querySelector(".status")
      .classList.add("active");
    date.focus();
    date.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    alert(`Sign Up Successful, Welocme to our Website ${username.value}.`);
  }
};
