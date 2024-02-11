const qrText = document.getElementById("qrText");
const imgBox = document.getElementById("imgBox");
const qrImg = document.getElementById("qrImg");

const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

function generateQR(){
    qrImg.src = url + qrText.value;
}