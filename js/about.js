// const sidebarelement = document.getElementById("sidebar");
// function opensidebar() {
//   sidebarelement.style.visibility = "visible";
// }
// function close() {
//   sidebarelement.style.visibility = "hiddedn";
// }
// document.addEventListener("DOMContentLoaded", () => {
function read() {
  let overlayid = document.getElementById("overlayid");
  overlayid.style.display = "flex";
}
function closeModel() {
  overlayid.style.display = "none";
}
function acceptBtn() {
  alert("Thank you for visiting !...");
  overlayid.style.display = "none";
}
function dectBtn() {
  overlayid.style.display = "none";
}

const imgarray1 = [
  "../img/restaurant-hall.jpg",
  "../img/christmas.jpg",
  "../img/hygin.jpg",
  "../img/buger.jpg",
];
let index = 0;
const slide1 = document.getElementById("slide1");
console.log(slide1);
function next() {
  if (index < imgarray1.length - 1) {
    index++;
  } else {
    index = 0;
  }
  slide1.src = imgarray1[index];
}
function back() {
  if (index > 0) {
    index--;
  } else {
    index = imgarray1.length - 1;
  }
  slide1.src = imgarray1[index];
}

function localstoragesend() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const message = document.getElementById("message").value;
  if (
    name != "null" &&
    email != "null" &&
    contact != "null" &&
    message != "null"
  ) {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", contact);
    localStorage.setItem("message", message);
    alert("Thank You for visiting!");
  } else {
    alert("All fields are required");
  }
}
