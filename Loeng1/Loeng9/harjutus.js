function valjastaTekst(sisendTekst) {
    let valjundElement = document.getElementById("valjund")
    valjundElement.innerHTML += "<div>"+sisendTekst+"</div"
    console.log(sisendTekst)
}
function naitaSisestatudVaartust(){
    let sisendTekst = document.getElementById("sisend")
    valjastaTekst(sisendTekst)
}
