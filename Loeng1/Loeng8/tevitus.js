let kasutajaNimi = prompt()
let tervitus = "Tere" + kasutajaNimi
let tervitusElement=document.getElementById("tervitus")

if (kasutajaNimi.length) == 0) {
    tervitus="Sul jäi nimi sisestama"
}

if (kasutajaNimi =="Nipitiri") {
    tervitus= 'Tere sõber'
}

tervitusElement.innerText=tervitus
console.log(tervitus)

for (let index = 20; index > 0; index=index-1){
    console.log(index)
}