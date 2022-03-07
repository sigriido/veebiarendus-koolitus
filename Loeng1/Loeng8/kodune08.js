let kasutajaNimi= ""
while (kasutajaNimi == "") {
    kasutajaNimi= prompt("Sisesta nimi")
}
let tervitus = "Tere <strong>"+kasutajaNimi+ "</strong>" 

let tervitusElement=document.getElementById("tervitus")
if (kasutajaNimi.length == 0) {
    tervitus="Sul jäi nimi sisestamata"
}

if (kasutajaNimi.length > 6){
    tervitus="Sul on ilus pikk nimi"
}
if (kasutajaNimi.length < 6) {
    tervitus = "Sul on ilus lühike nimi"
}

if (kasutajaNimi.length ==6){
    tervitus="Sul on ilus keskmine nimi"
}
tervitus.Element.InnerHTML=tervitusconsole.log(tervitus)