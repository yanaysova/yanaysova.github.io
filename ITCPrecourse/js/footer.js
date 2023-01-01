let codeArr = ["HTML", "CSS", "Javascript"];

let footerCodes = "This website has been created with: ";

function init() {

    for (i = 0; i < codeArr.length; i++) {
        if (i === codeArr.length - 1) {
            footerCodes = footerCodes + "and " + codeArr[i];
        } else {
            footerCodes = footerCodes + codeArr[i] + ", ";
        }
    }
    document.getElementById("footer-codes").innerHTML = footerCodes;
}

init();
