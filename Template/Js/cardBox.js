
"use strict";
let cardManager = {
    getAllCards: function () {
        return readCards.getFullCard()
    }
};
let domManger = {
    createCardContainer: function (product) {
        let mainBox = document.createElement("div");
        mainBox.className = "col-md-4 text-center box-list"
        mainBox.style.border = "0px solid rgb(182, 150, 108, 0.0)"
        mainBox.style.cursor = "pointer"
        mainBox.style.marginTop = "none"
        mainBox.style.background = "rgba(255,255,255,0.0)"
        mainBox.style.paddingBottom = "2%"


        let cardImage = document.createElement("img");
        cardImage.src = "../Images/" + product.photo;
        cardImage.style.width = "300px";
        cardImage.style.height = "300px";
        cardImage.style.marginTop = "0%";
        cardImage.style.transition = "all 0.7s linear";
        mainBox.appendChild(cardImage);

        let boxContent = document.createElement("h3");
        boxContent.innerHTML="Hello";
        boxContent.className = "box-content";
        boxContent.style.color = "rgb(182, 150, 108)"
        boxContent.style.width = "100%"
        mainBox.appendChild(boxContent)

        let cardHeader = document.createElement("h1");
        cardHeader.innerHTML = product.header;
        mainBox.appendChild(cardHeader);

        let cardText = document.createElement("p1")
        cardText.innerHTML = product.text;
        cardText.style.marginBottom = "0px";
        mainBox.appendChild(cardText);

        return mainBox
    }
};
