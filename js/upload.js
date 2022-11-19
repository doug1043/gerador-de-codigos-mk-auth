function reportInfo(vars, showType = false) {
    if (showType === true) console.log(typeof vars);
    console.log(vars);
}

function addImg(ele, content) {
    var myDIV = document.querySelector(ele);
    var newContent = document.createElement('div');
    newContent.innerHTML = content;

    while (newContent.firstChild) {
        myDIV.appendChild(newContent.firstChild);
    }
}

var feedback = function(res) {
    reportInfo(res, true);
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        copyTextLink = get_link;
        navigator.clipboard.writeText(copyTextLink);
        localStorage.setItem('copiedText', copyTextLink);
        alert("Imagem hospedada em: "+copyTextLink);
        window.location.href = "Index.html";
    }
    else{
        alert('falha ao carregar arquivo');
    }
};

new Imgur({
    clientid: 'ef8a96b9ec9eff2', //You can change this ClientID
    callback: feedback
});
