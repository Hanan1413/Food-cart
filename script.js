let shop = document.getElementById('shop');

// console.log(shop)
let shopItemsData = [
  {
    id: "jfhgbvnscs",
    name: "Mexican Eggrolls",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/food1.jpg",
  },
  {
    id: "ioytrhndcv",
    name: "Chicken Burger",
    price: 15,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/food2.jpg",
  },
  {
    id: "wuefbncxbsn",
    name: "Topu Lasange",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/food3.jpg",
  },
  {
    id: "thyfhcbcv",
    name: "Pepper Potatoas",
    price: 14,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/food4.jpg",
  },
    {
    id: "thyfhcbch",
    name: "Bean Salad",
    price: 14,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/food5.jpg",
  },

    {
    id: "thyfhcbcx",
    name: "Beatball Hoagie",
    price: 20,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/food6.jpg",
  },
   {
    id: "thyfhcbkh",
    name: "Bacon Burger",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/food7.jpg",
  },
   {
    id: "thyfhcfffh",
    name: "Meet Sandwich",
    price: 30,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "images/food8.jpg",
  },


];


// basekt arry to store data in basket to tell wich specific item user select 
// get data from local stroge and store it in basket arry 
let basket = JSON.parse(localStorage.getItem("data")) || [];



// decrement(${id}) using id in function call to increse and decrease item by its id 

let generateShop = () =>{
    
    return(shop.innerHTML = shopItemsData
      .map((items) =>{
        let{id, name, price, desc, img} = items
      // if you find something === id store it in search if you find nothing return empty arry  
        let search = basket.find((x) => x.id === id) || []
         return`<div  id=product-id-${id} class="item">
            <img src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                   <p>${desc}</p>               

                <div class="price-quantity">
                    <h2>${price}$</h2>
                    <div class="buttons">
                      <i onclick="increment(${id})" class="bi bi-plus"></i>
                      
                         <div id=${id} class="quantity">${search.item === undefined? 0: search.item}</div>
                       <i onclick="decrement(${id})" class="bi bi-dash"></i>
                    </div>

                </div>
            </div>
        </div>
        `;
    }).join(""));

};



// fuction to increase number of cart items

let increment = (id) => {
  let selectedItem = id;
  // search to find if object exist or not
  // x it is search for item user selected
  let search = basket.find((x) => x.id === selectedItem.id);

  // if didn't find what i search then push id and item
  if(search === undefined){
    basket.push({
        id:selectedItem.id,
        item:1,
  });
   } else{
  // if search.item exist then increase item by1
    search.item +=1;
  }
  // local storge
localStorage.setItem("data", JSON.stringify(basket));
 

  // console.log(basket)
  update(selectedItem.id)
};






// fuction to decrease number of cart items
let decrement = (id) => {
   let selectedItem = id;

  // search to find if object exist or not
  // x it is search for item user selected
  let search = basket.find((x) => x.id === selectedItem.id);

  // if search =0  stop from increse object under 0 
  if(search.item === 0) return;
  else{
  //  search.item exist then decrease item by1
    search.item -=1;
  };

  localStorage.setItem("data", JSON.stringify(basket));

 
  // console.log(basket)
  update(selectedItem.id)

};




  //  select id, and incremnt number 0 it every time user click on + plus sign

let update = (id) => {
   let search = basket.find((x) => x.id === id)
  //  console.log(search.item)
   document.getElementById(id).innerHTML = search.item
   calculation()
};


let calculation = ()=>{
 //  target item numbers one by on and sum them all  and show result in the carAmount inner html,  calculation start from 0

let cartIcon = document.getElementById("cartAmount")

cartIcon.innerHTML = basket.map((x) => x.item).reduce((a, b) => a + b, 0)

};

calculation()


generateShop()