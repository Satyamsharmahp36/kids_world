let cart =document.getElementById('cart-item-no');
let cartbutton = document.getElementsByClassName('add-to-cart')

    let items=[
        { Itemname: "This was our pact",quantity: 0,dollars: 7,cents: 49 ,src:"./assets/book1.png"},
        { Itemname: "The famous five",quantity: 0,dollars: 4,cents: 59 ,src:"./assets/book2.png" },
        { Itemname: "Matilda",quantity: 0,dollars: 4,cents: 59 ,src:"./assets/book3.png"},
        { Itemname: "Harry Potter",quantity: 0,dollars: 6,cents: 80 ,src:"./assets/book4.png"},
        { Itemname: "For Young Readers",quantity: 0,dollars: 7,cents: 29 ,src:"./assets/book5.png"},
        { Itemname: "Wimpy kid - DIY",quantity: 0,dollars: 4,cents: 99 ,src:"./assets/book6.png"},
        { Itemname: "DART Board",quantity: 0,dollars: 17,cents: 49 ,src:"./assets/dart-board.png"},
        { Itemname: "Connect Four",quantity: 0,dollars: 19,cents: 99,src:"./assets/connect-four.png" },
        { Itemname: "Jenga",quantity: 0,dollars: 20,cents: 99,src:"./assets/jenga.png"  },
        { Itemname: "Monopoly",quantity: 0,dollars: 19,cents: 49 ,src:"./assets/monopoly.png" },
        { Itemname: "Bookmarks",quantity: 0,dollars: 12,cents: 49 ,src:"./assets/bookmarks.png" },
        { Itemname: "Birthday Card",quantity: 0,dollars: 12,cents: 49,src:"./assets/birthday-card.png"  },
        { Itemname: "Stuffed toys",quantity: 0,dollars: 15,cents: 99 ,src:"./assets/stuffed-toy.png" },
        { Itemname: "Dream catcher drawing",quantity: 0,dollars: 18,cents: 49,src:"./assets/dream-catcher.png"  },
    ];
//main addition happen is this , it wil add all quantity  here no of //
// function cartupdate(){ 
//     let addquantity = 0;
//     for(let i=0;i<items.length;i++){
//         addquantity+= items[i].quantity      
//     }
//     cart.innerText=addquantity;
    

//     for(let a=0;a<cartbutton.length;a++){
//         cartbutton[a].onclick=(e)=>{
//             items[a].quantity++;
//             cartupdate()
//         }
//     }

let count = 0;
cart.innerHTML = "0";
for (let i = 0; i < cartbutton.length; i++){
cartbutton[i].addEventListener("click", () => {
    count++;
    cart.innerHTML = count;    

    items[i].quantity++;
})

}

    //adding quantity for each for them , how many times we click cart//






console.log("hello");









