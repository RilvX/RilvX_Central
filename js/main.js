
setInterval(timeInterval, 1000);
let swap = true;

function timeInterval() {
  if (swap === true){
    document.getElementById("upTime").style.backgroundColor = 'black';
    swap = false;
    console.log("Black");
  }
  else{
    document.getElementById("upTime").style.backgroundColor = 'red';
    swap = true;
    console.log("Red");
  }
}



let statusType = {
  blockchain: 100,
  ide: "Critical",
  backend: 100,
  frontend: 100,
  auth: 100,
  host: 100,
  rilvx: "Operational"
}



for (let index = 0; index < statusType.length; index++) {
  
}

let critical = false

function blockchainStatus() {
  document.getElementById("status").innerHTML = "Blockchain Status: " + statusType.blockchain + "%"

  document.getElementById('status').style.backgroundColor = '#F3F6F9';

  
}
function ideStatus() {
  document.getElementById("status").innerHTML = "IDE Status: " + statusType.ide
  
  document.getElementById('status').style.backgroundColor = 'red';
  //document.getElementById("status").style.color = 'white';
}
function backendStatus() {
  document.getElementById("status").innerHTML = "Backend Status: " + statusType.backend + "%"

  document.getElementById('status').style.backgroundColor = '#F3F6F9';
}
function frontendStatus() {
  document.getElementById("status").innerHTML = "Frontend Status: " + statusType.frontend + "%"

  document.getElementById('status').style.backgroundColor = '#F3F6F9';
}
function authStatus() {
  document.getElementById("status").innerHTML = "Auth Status: " + statusType.auth + "%"

  document.getElementById('status').style.backgroundColor = '#F3F6F9';
}
function hostStatus() {
  document.getElementById("status").innerHTML = "Host Status: " + statusType.host + "%"

  document.getElementById('status').style.backgroundColor = '#F3F6F9';
}
function rilvxStatus() {
  document.getElementById("status").innerHTML = "Status: " + statusType.rilvx

  document.getElementById('status').style.backgroundColor = '#F3F6F9';
}

