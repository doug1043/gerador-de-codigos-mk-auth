window.onload = function exampleFunction() {
    document.getElementById('linkimg').value = localStorage.getItem('copiedText');
}

function gerarPDF() {
    copyTextPDF = document.getElementById("linkpdf");
    if (document.getElementById('linkpdf').value == "") {
        alert("Nenhum link foi inserido!");
    }
    else {
        copyTextPDF.select();
        copyTextPDF.setSelectionRange(0, 99999);
        navigator.clipboard.writeText('<div><a target="abrir" href="' + copyTextPDF.value + '">CONTRATO</a></div>');
        alert("Código copiado para área de transferência!");
        document.getElementById('linkpdf').value = "";
    }

}

function gerarIMG() {
    copyTextIMG = document.getElementById("linkimg");
    if (document.getElementById('linkimg').value == "") {
        alert("Nenhum link foi inserido!");
    }
    else {
        copyTextIMG.select();
        copyTextIMG.setSelectionRange(0, 99999);
        navigator.clipboard.writeText('<img src="' + copyTextIMG.value + '"></img>');
        alert("Código copiado para área de transferência!");
        document.getElementById('linkimg').value = "";
        localStorage. removeItem("copiedText");
    }

}