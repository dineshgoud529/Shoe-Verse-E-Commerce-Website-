
// !filter
let button=document.querySelectorAll("#product_page2>button")
let cards=document.querySelectorAll(".shoe_container")
// console.log(cards);
button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        button.forEach((btn)=>btn.classList.remove("active"));
        let btnname=btn.getAttribute("data-name");
        cards.forEach((card)=>{
            let cardname =card.getAttribute("data-name");
            // console.log(cardname);
            if(btnname =="all" || btnname ==cardname){
                card.style.display="flex";
            }
            else{
                card.style.display="none";
            }
        })
        
    })
})

//!sidebar opening

let cart=document.getElementById("cart")
let sidebar=document.getElementById("sidebar")

cart.addEventListener("click",()=>{
    sidebar.style.right="0px"
})
//!sidebar closing

let close=document.getElementById("close")
close.addEventListener("click",()=>{
     sidebar.style.right="-400px"
})

//!cart funtionality
let finaloutput=[];
let addtocart=document.querySelectorAll(".addtocart");
addtocart.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        // addtocart.style.backgroundColor="green";
  let parent=btn.closest(".shoe_container");
   let image=parent.querySelector("img").src;
   let title=parent.querySelector("h2").innerText;
let price=Number(parent.querySelector(".price_size1>h3").innerText.replace("₹"," "));
let size=parent.querySelector("select").value

if(size=="selectoption"){
    alert("please select the sizeto add item to the cart");
    return;
}
let item={  
    title,image,size,price
     //!or we can use this
    // image:image,
    // title:title,
    // price,price,
    // size,size
}
finaloutput.push(item)
console.log(finaloutput);
updateCartUi();
    })

})

// !UPDATING CART FUNCTIONALITY
let cartQuantity=document.getElementById("cart_quantity");
let insidecart=document.getElementById("sidebar2")
let subtotal=document.querySelector("#sidebar3>h2>span")
let buyNowBtn=document.querySelector("#sidebar3>button")
console.log(cartQuantity);
console.log(insidecart);
console.log(subtotal);
console.log(buyNowBtn);

function updateCartUi() {
    insidecart.innerHTML=""
   let totalPrice=0;
   finaloutput.forEach((item)=>{
    totalPrice +=item.price;
    let div=document.createElement("div")
    div.classList.add("item_container");
    div.innerHTML=`
    <aside class=item_container1> 
    <img  src=${item.image}>
    </aside>
        <aside class=item_container2>    
     <h2> ${item.title}</h2>
    <p>size:${item.size}</p>
    <p>Price:${item.price.toFixed(2)}</p>
    </aside>
   
  
    `
    insidecart.append(div)
   })
   subtotal.innerText=totalPrice.toFixed(2);
   cartQuantity.innerText=finaloutput.length
}

// !buy now btn functionality

buyNowBtn.addEventListener(("click"),()=>{
    alert("thankyou for purchasing")
})