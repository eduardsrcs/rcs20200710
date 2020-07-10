function loadDoc(url,  callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(this.responseText))
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

async function getData(url, cb = () => {}) {
  await fetch(url)
    .then(res => res.json())
    .then(data => cb(data))
}

function getParam(param){
  const urlParam = new URLSearchParams(window.location.search);
  return urlParam.get(param)
}
