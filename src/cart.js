let basket = JSON.parse(localStorage.getItem("data"))||[];
console.log(basket)
let label = document.getElementById("label")
let shoppingCart = document.getElementById("shopping-cart")
let a =  shopItemData;
let amount = document.querySelector(".amount")
//console.log(a)
const calculation = ()=>{
    let y = 0;
   let icon = document.querySelector(".cartAmount")
     let sum = basket.map((x)=> x.item).reduce((x,y)=>x+y,0)
      icon.innerHTML = sum;
}
calculation();

let generateCartItems = ()=>{
    if(basket.length!==0){
     return  ( shoppingCart.innerHTML = basket.map((x)=>{
    let {id, item}= x
    // console.log(id)
    let search =  a.find((b)=>b.id===x.id)
   // console.log(search.id)
    if(!search){
       
    }
    else{
        return ` 
      
        <div class="cart-item">
    <img width="100" height="130" src="${search.img}" alt="">
    <div class="detail">
    <div class="title-price-x">
    <h4  class = "title-price">
    <p>${search.name}</p>
    <p class="cart-item-price">$ ${search.price} </p>
    </h4>
   <i onclick ="removeCartItem(${id})" class="bi bi-x-lg"></i>
    </div>
    <div class="buttons">
    <i onclick="increment(${id})"   class="bi bi-plus-circle"></i>
       <div id = ${id} class="quantity">${item} </div>
      <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
      </div>
      <h3></h3>
</div>
</div>

 `;  
    }   
     }).join(""))
    }
    else{
shoppingCart.innerHTML =``
label.innerHTML=`
<h2 class="text-center">Card is empty</h2>
<a href="index.html"> <button class="homeBtn">Back to home</button>
</a>`
   }
 }


 let increment = (id)=>{
    let element = id;
    let search = basket.find((x)=>x.id===element.id)
    if(!search){
      basket.push({
        id:element.id,
        item:1
      })
    }
    else{
        search.item+=1;

    }
    localStorage.setItem("data",JSON.stringify(basket))

   // console.log(basket);
    update(id)

}

const decrement =(id)=>{
  console.log(id.id)

    let element = id;
     let search = basket.find((x)=>x.id===element.id)    
      if(search=== undefined)return;
     else if (search.item === 0) return;
     
      else{
        search.item-=1;
     }
  // console.log(basket)
     update(id)   
      
     basket = basket.filter((x)=>x.item!==0)
     localStorage.setItem("data",JSON.stringify(basket))||[]

 }

const update = (id)=>{
    let element = id;                 
    let search = basket.find((x)=>x.id===element.id)
    document.getElementById(element.id).innerHTML= search.item;
    
  calculation()
  totalAmount()
  
}

generateCartItems()

let removeCartItem = (id)=>{
  let selectedItem = id
  basket = basket.filter((x)=>x.id !== selectedItem.id)
  console.log(basket);
  generateCartItems()
  calculation()
  totalAmount()
  localStorage.setItem("data",JSON.stringify(basket))
  

}

let totalAmount= (x)=>{

  let getTotal = basket.map((x)=>{
    let {id,item} = x;
  
   let search = shopItemData.find((x)=>x.id!==id)||[]
   console.log(search.price)
   if(search){
      return ;
   }
   else{
   return item*parseInt(search.price);
   }

  }).reduce((x,y)=>x+y,0)
  label.innerHTML=`
  <h2>Total Bill : $ ${getTotal}</h2>
  <button class="checkout">Checkout</button>
 <button onclick="clearCart()" class="removeAll">Clear- Cart</button>
  `
 console.log(getTotal);
}
totalAmount()

let clearCart =()=>{
  basket =[];
  generateCartItems()
  calculation()
  localStorage.setItem("data",JSON.stringify(basket))
}


