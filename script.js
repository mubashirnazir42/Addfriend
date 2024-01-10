var btnadd = document.querySelector("#add");
let flag = 0;

btnadd.addEventListener("click", function () {
  if (flag == 0) {
    btnadd.innerHTML = "cancel request";
    btnadd.classList.add("graycolor");
    flag = 1;
  } else {
    btnadd.innerHTML = "Add friend";
    btnadd.classList.remove("graycolor");
    flag = 0;
  }
});
