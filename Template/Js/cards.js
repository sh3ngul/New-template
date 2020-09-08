"use strict";

class cards {
    constructor(photo,header, text) {
        this.photo = photo;
       this.header = header;
        this.text = text;
    }
    
}

let firstCard = new cards("cardimg.jpg","Just photo", "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. ")
let secondCard = new cards("cardimg.jpg","Just photo","Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squi ")
let thirdCard = new cards("cardimg.jpg", "Just photo", "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. ")
let fourthCard = new cards("cardimg.jpg","Just photo","Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.")
let fifthCard = new cards("cardimg.jpg","Just photo", "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.")
let sixthCard = new cards("cardimg.jpg","Just photo", "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.")


let readCards ={
    getFullCard:function(){
        return [firstCard,secondCard,thirdCard,fourthCard,fifthCard,sixthCard];
    }
}