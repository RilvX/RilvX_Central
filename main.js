
document.getElementById("status").innerHTML = "Status: 100%";

let status;
status = statusFunction();

const alertList = ["Full Functionality", backend:"100%", frontend:"100%", api:"100%"];

document.getElementById('status').innerHTML = "Status:" + status + "%";

function statusFunction() {
  
  status = 100;
  return(status);
  
  alertList[0] = "Full System Failure";
  alertList.backend"100%";
  alertList.frontend"100%";
  alertList.api"100%";
  
  alertList.push("System Failure");
  
}