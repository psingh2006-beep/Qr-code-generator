function generateQR() {

    let qrText = document.getElementById("qrText").value;
    let qrImage = document.getElementById("qrImage");
    let downloadBtn = document.getElementById("downloadBtn");

    if(qrText.length > 0){

        let qrURL =
        "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="
        + encodeURIComponent(qrText);

        qrImage.src = qrURL;

        downloadBtn.href = qrURL;
        downloadBtn.style.display = "inline-block";
    }
    else{
        alert("Please enter text or URL");
    }
}