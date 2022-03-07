let apelsin = {
    liik: "puuvili,
    nimi: "apelsin",
    varv: "orange"
}

let porgand = {
    liik: "juurvili",
    nimi: "porgand",
    varv: "yellow"
}

let banaan = {
    liik: "rohttaim",
    nimi: "banaan",
    varv:"yellow"
}

let saadused = [apelsin, porgand, banaan]
let valjund.Element = document.getElementById("valjund")
for (let i=0; i < saadused.length; i++) {
    valjundElement.innerHtml+="<div>"+saadused(i).nimi+"</div>"
}