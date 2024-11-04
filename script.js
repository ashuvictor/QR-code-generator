document.getElementById("generateBtn").addEventListener("click", generateQR);

function generateQR() {
    const qrText = document.getElementById("qrText").value;
    const qrImage = document.getElementById("qrImage");
    const imgBox = document.getElementById("imgBox");

    if (qrText.trim() !== "") {
        // Generate the QR code URL (using an API for simplicity)
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`;
        qrImage.src = qrCodeUrl;
        imgBox.classList.add("show-img");
    } else {
        alert("Please enter text or a URL to generate the QR code.");
    }
}
