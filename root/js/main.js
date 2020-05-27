let span = document.getElementById('current-time');

function time() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  span.innerHTML = h + ':' + m + ':' + s;
}

setInterval(time, 100);

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}
