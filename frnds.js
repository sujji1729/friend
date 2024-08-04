
let enterName = document.getElementById("enterName");
let wishes = document.getElementById("wishes");

function nextPage() {

    let enterNameElement = enterName.value;

    // wishesImg.src =;
    wishes.textContent = "Happiiii friendship day my dear sweet heart " + enterNameElement;
    wishes.style.color = "white";
    wishes.style.fontSize = "50px";



}