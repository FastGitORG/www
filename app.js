function btnClick() {
  var btn_join = document.getElementsByClassName('btn-join');
  btn_join[0].onclick = function () {
    window.open('https://github.com/fastgitorg');
  };
}

window.onload = btnClick;
