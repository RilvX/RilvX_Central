let statusType = {
  blockchain: 100,
  ide: 100,
  backend: 100,
  frontend: 100,
  auth: 100,
  host: 100,
  rilvx: 100
}

function blockchainStatus() {
    document.getElementById("status").innerHTML = "Blockchain Status: " + statusType.blockchain + "%"
}
function ideStatus() {
    document.getElementById("status").innerHTML = "IDE Status: " + statusType.ide + "%"
}
function backendStatus() {
    document.getElementById("status").innerHTML = "Backend Status: " + statusType.backend + "%"
}
function frontendStatus() {
    document.getElementById("status").innerHTML = "Frontend Status: " + statusType.frontend + "%"
}
function authStatus() {
    document.getElementById("status").innerHTML = "Auth Status: " + statusType.auth + "%"
}
function hostStatus() {
    document.getElementById("status").innerHTML = "Host Status: " + statusType.host + "%"
}
function rilvxStatus() {
    document.getElementById("status").innerHTML = "RilvX Status: " + statusType.rilvx + "%"
}

