
// retreiving the data from localStorage,
let basket = JSON.parse(localStorage.getItem("data")) || []

let shop = document.querySelector(".shop");
 
let generateShop = () =>{
      
    return (shop.innerHTML= shopItemData.map((x)=>{
        let { id, name, desc, img, price } = x;
         let search = basket.find((x)=>x.id==id)||[]
        
      return `
     <div id=product-id-${id} class="item">
    <img width="200" height="287" src=${img} alt="">
    <div class="detail">
    <h3>${name}</h3>
       <p>${desc} </p>
       <div class="price-quantity">  
       <h2>${price}</h2>
        <div class="buttons">
          <i onclick="increment(${id})"   class="bi bi-plus-circle"></i>
             <div id = ${id} class="quantity">${search.item===undefined?0: search.item}</div>
    <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
 </div>
     </div>

    </div>

    </div>`}).join(""))

}

generateShop()

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
    let element = id;
     let search = basket.find((x)=>x.id===element.id)    
      if(search=== undefined)return;
     else if (search.item=== 0)  return ;
     
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
}

let cartTotal = []
const calculation = ()=>{
    let y = 0;
   let icon = document.querySelector(".cartAmount")
     let sum = basket.map((x)=> x.item).reduce((x,y)=>x+y,0)
      icon.innerHTML = sum;
}
calculation();








