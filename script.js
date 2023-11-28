let cart =document.getElementById('cart-item-no');
let cartbutton = document.getElementsByClassName('add-to-cart')
let cartDiv = document.getElementById('cartDiv')

//making an arrry named items and inside that we put objects with full details
    let items=[
        { Itemname: "This was our pact",quantity: 0,price:7.48},
        { Itemname: "The famous five",quantity: 0,price:4.59 },
        { Itemname: "Matilda",quantity: 0,price:4.59 },
        { Itemname: "Harry Potter",quantity: 0,price:6.80},
        { Itemname: "For Young Readers",quantity: 0,price:7.29},
        { Itemname: "Wimpy kid - DIY",quantity: 0,price:4.99},
        { Itemname: "DART Board",quantity: 0,price:17.49},
        { Itemname: "Connect Four",quantity: 0,price:17.99},
        { Itemname: "Jenga",quantity: 0,price:20.99},
        { Itemname: "Monopoly",quantity: 0,price:19.49},
        { Itemname: "Bookmarks",quantity: 0,price:6.49},
        { Itemname: "Birthday Card",quantity: 0,price:8.49},
        { Itemname: "Stuffed toys",quantity: 0,price:3.99},
        { Itemname: "Dream catcher drawing",quantity: 0,price:14.49},
    ];

let user = []
let count = 0;
cart.innerHTML = "0";
for (let i = 0; i < cartbutton.length; i++){
    //adding eventlistener for click to increase qunatity and count in cart option
cartbutton[i].addEventListener("click", () => {
    count++;
    cart.innerHTML = count;    
    items[i].quantity++;
})

}


let cartArray =[]
let total =0
let str =""

//using onlick to show details of cart in console

cartDiv.onclick=()=>{
    str = ""
    // console.log('hello')
    //pushing selected item in cart array
    items.forEach((item,index)=>{
    if(item.quantity>0){
        cartArray.push(item)
    }
})
 //feching items from cart array for displaying it 
    cartArray.forEach((item)=>{
        str += `Item name: ${item.Itemname} - Quantity: ${item.quantity} `
        total += item.price * item.quantity
    })

//displaying those things in console

    console.log(str)
    console.log(`Total Price: ${total}`)
    console.log(`Quantity: ${count}`)

//clearing alll detatils so that when we reclick on cart button then it should now add up again and again 

    str=""
    total=0
    cartArray=[]
}














