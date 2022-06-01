
let statusType = {
  blockchain: 100,
  ide: "Critical",
  backend: 100,
  frontend: 100,
  auth: 100,
  host: 100,
  rilvx: "Operational"
}

let critical = false

function blockchainStatus() {
  document.getElementById("status").innerHTML = "Blockchain Status: " + statusType.blockchain + "%"

  document.getElementById('status').style.backgroundColor = 'black';
}
function ideStatus() {
  document.getElementById("status").innerHTML = "IDE Status: " + statusType.ide
  
  document.getElementById('status').style.backgroundColor = 'red';
}
function backendStatus() {
  document.getElementById("status").innerHTML = "Backend Status: " + statusType.backend + "%"

  document.getElementById('status').style.backgroundColor = 'black';
}
function frontendStatus() {
  document.getElementById("status").innerHTML = "Frontend Status: " + statusType.frontend + "%"

  document.getElementById('status').style.backgroundColor = 'black';
}
function authStatus() {
  document.getElementById("status").innerHTML = "Auth Status: " + statusType.auth + "%"

  document.getElementById('status').style.backgroundColor = 'black';
}
function hostStatus() {
  document.getElementById("status").innerHTML = "Host Status: " + statusType.host + "%"

  document.getElementById('status').style.backgroundColor = 'black';
}
function rilvxStatus() {
  document.getElementById("status").innerHTML = "Status: " + statusType.rilvx

  document.getElementById('status').style.backgroundColor = 'black';
}

