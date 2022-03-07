let apelsin = {
    liik: "puuvili" ,
    nimi: "apelsin",
    varv: "orange",
    hinnang: 8,
    pilt: "./Assets/apelsin.jpg",
    kirjeldus:"Ilus vili"
}

let porgand = {
    liik: "juurvili",
    nimi: "porgand",
    varv: "orange",
    hinnang:"10",
    pilt:"./Assets/porgand.jpg",
    kirjeldus:"veel ilusam vili"
}

let banaan = {
    liik: "rohttaim",
    nimi: "banaan",
    varv:"yellow",
    hinnang:"17",
    pilt:"./Assets/banaan.jpg",
    kirjeldus:"kõige ilusam vili"
}

let mandarin = {
    liik: "rohttaim",
    nimi: "mandarin",
    varv:"yellow",
    hinnang:"17",
    pilt:"./Assets/banaan.jpg",
    kirjeldus:"kõige ilusam vili"
}

let saadused = [apelsin, porgand, banaan, mandarin]

function looPuuviljaHTML(puuvili) {
    return `
    <div class="col-4 card" style="width:400px">
    <img class="card-img-top" src="${puuvili.pilt}"
    <div class="card-body">
            <div class="card-title">${puuvili.nimi}</div>
            <div class="card-text">
            <p>
            Liik: ${puuvili.nimi}, Hinnang: ${puuvili.hinnang}</div>
            </p>
            <div>
                ${puuvili.kirjeldus}
            </div>
            <div>${puuvili.hinnang}</div>
    </div>
    `
}

let valjundElement = document.getElementById("valjund")
let valjundHTML = '' 
valjundHTML+= '<div class="row">'
for (let i=0; i < saadused.length; i++) {
    valjundHTML += looPuuviljaHTML(saadused[i])
}
valjundHTML+='</div>'
valjundElement.innerHTML = valjundHTML