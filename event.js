var valueInput1 = document.getElementById("hoten-data");
var valueInput2 = document.getElementById("email-data");
var valueInput3 = document.getElementById("sdt-data");
var valueInput4 = document.getElementById("diachi-data");
var valueInput5 = document.getElementById("price-data");
var valueInput6 = document.getElementById("matbang-data");
var valueInput7 = document.getElementById("mess-data");
var toastEle = document.getElementById("toast-modal");
var toast_modal_success_ele = document.getElementById("toast-modal-success");
var toast_modal_err_sdt = document.getElementById("toast-modal-sdt");
var toast_modal_err_server = document.getElementById("toast-modal-server");
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
document.getElementById("btnform").addEventListener("click", function () {
  const dataBody = {
    hoten: valueInput1.value,
    email: valueInput2.value,
    phone: valueInput3.value,
    address: valueInput4.value,
    price: valueInput5.value,
    matbang: valueInput6.value,
    mess: valueInput7.value,
  };
  if (!dataBody.hoten) {
    valueInput1.style.border = "1px solid red";
    toastEle.style.display = "block";
    var h = setTimeout(() => {
      toastEle.style.display = "none";
    }, 3000);
    return;
  } else valueInput1.style.border = "none";

  if (!validateEmail(dataBody.email)) {
    valueInput2.style.border = "1px solid red";
    toastEle.style.display = "block";
    var h = setTimeout(() => {
      toastEle.style.display = "none";
    }, 3000);
    return;
  } else valueInput2.style.border = "none";

  var checkPhone = /(03|05|07|08|09)+([0-9]{8})\b/.test(dataBody.phone);
  if (!checkPhone) {
    valueInput3.style.border = "1px solid red";
    toastEle.style.display = "block";
    var h = setTimeout(() => {
      toastEle.style.display = "none";
    }, 3000);
    return;
  } else valueInput3.style.border = "none";

  if (!dataBody.address) {
    valueInput4.style.border = "1px solid red";
    toastEle.style.display = "block";
    var h = setTimeout(() => {
      toastEle.style.display = "none";
    }, 3000);
    return;
  } else valueInput4.style.border = "none";

  if (!dataBody.price) {
    valueInput5.style.border = "1px solid red";
    toastEle.style.display = "block";
    var h = setTimeout(() => {
      toastEle.style.display = "none";
    }, 3000);
    return;
  } else valueInput5.style.border = "none";

  if (!dataBody.matbang) {
    valueInput6.style.border = "1px solid red";
    toastEle.style.display = "block";
    var h = setTimeout(() => {
      toastEle.style.display = "none";
    }, 3000);
    return;
  } else valueInput6.style.border = "none";
  //call api
  console.log("data body: ", dataBody);
  toast_modal_success_ele.style.display = "block";

  //-------- err sdt
  // toast_modal_err_sdt.style.display = "block";
  // var h = setTimeout(() => {
  //   toast_modal_err_sdt.style.display = "none";
  // }, 3000);
  //-------- server lỗi

  // toast_modal_err_server.style.display = "block";
  // var h = setTimeout(() => {
  //   toast_modal_err_server.style.display = "none";
  // }, 3000);
});
document
  .getElementById("btn-close-success")
  .addEventListener("click", function () {
    toast_modal_success_ele.style.display = "none";
  });

var foo = document.getElementById("btnform");
foo.addEventListener("mouseover", function () {
  foo.style.backgroundColor = "pink";
  foo.style.color = "#333";
});
foo.addEventListener("mouseleave", function () {
  foo.style.backgroundColor = "unset";
  foo.style.color = "unset";
});
