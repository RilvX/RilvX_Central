let personalFile = {
  name: "Ace",
  credits: 145,
  race: "Dralisite",
  expPoints: 0
}

let medicalRecord = {
  stamina: 45,
  injuries: "",
  otherOne: ""
}

let defenseRecord = {
  suit: "Ballistic Vest",
  screen: "N/A",
  other: "Holoscreen Real Time Feed"
}

let energyRecord = {
  powerbelt: 100,
  seuclips: 100
}

let physicalData = {
  str: 45,
  sta: 45,
  dex: 35,
  rs: 35,
  int: 45,
  log: 45,
  per: 55,
  ldr: 55
}

let skills = {
  robots: 1,
  environmental: 1,
  technician: 1
}

var block_to_insert ;
var container_block ;
 
block_to_insert = document.createElement( 'div' );
block_to_insert.innerHTML = 'This demo DIV block was inserted into the page using JavaScript.' ;
 
container_block = document.getElementById( 'democontainer' );
container_block.appendChild( block_to_insert );