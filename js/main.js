function signup(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var user = {
    username: username,
    password: password,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("dang ky thanh cong");
}
function login(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if (!user) {
    alert("Nhập username password đi cu!");
  } else if (
    username == data.username &&
    password == data.password
  ) {
    alert("OK! Đăng nhập thành công");
    window.location.href = "index.html";
  } else {
    alert("Nhập username password sai rồi cu!!");
  }
}
