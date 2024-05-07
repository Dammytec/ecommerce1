const shop_container = document.querySelector(".shop-container");
const cancel = document.querySelector(".cancel");
const cart_icon = document.querySelector("#cart-icon");
const sidebar = document.querySelector(".sidebar");
const cart_items = document.querySelector(".cart-items");
const section = document.querySelector(".nav");


cancel.addEventListener("click", function () {
  sidebar.classList.add("hide");
  console.log(sidebar.classList);
});

const products = [
  {
    product_id: 1,
    product_img: "img/product1.jpg",
    product_name: "aeroready shirt",
    product_price: "#50",
  },
  {
    product_id: 2,
    product_img: "img/product2.jpg",
    product_name: "wireless earbuds",
    product_price: "#50",
  },
  {
    product_id: 3,
    product_img: "img/product3.jpg",
    product_name: "hooded parka",
    product_price: "#50",
  },
  {
    product_id: 4,
    product_img: "img/product4.jpg",
    product_name: "straw metal bottle",
    product_price: "#50",
  },
  {
    product_id: 5,
    product_img: "img/product5.jpg",
    product_name: "metal sunglasses",
    product_price: "#50",
  },
  {
    product_id: 6,
    product_img: "img/product6.jpg",
    product_name: "back hat",
    product_price: "#50",
  },
  {
    product_id: 7,
    product_img: "img/product7.jpg",
    product_name: "backpack",
    product_price: "#50",
  },
  {
    product_id: 8,
    product_img: "img/product8.jpg",
    product_name: "ultraboost 22",
    product_price: "#50",
  },
  {
    product_id: 9,
    product_img: "img/product5.jpg",
    product_name: "myname",
    product_price: "#50",
  },
];

const carts = [];

function shopContainer() {
  for (let i = 0; i < products.length; i++) {
    const { product_img, product_name, product_price, product_id } =
      products[i];

    shop_container.innerHTML += `<div class="shop-content">
        <div class="product-img">
           <img src="${product_img}" alt=""> </div>
        <div class="product-name"> ${product_name}</div>
        <div class="product-price">
          <span class="product-price">${product_price}</span>
         <i  data-id = ${product_id} class="bx bxs-shopping-bag add-cart" id="cart-bag"></i>
        </div>
    </div>`;
  }
}

// event - provides information regarding the element you clicked on

section.addEventListener("click", function (event) {
  const cart_id = event.target.id;

  // grab the id of the cart icon
  if (cart_id === "cart-icon") {
    sidebar.classList.remove("hide");
  }
});

function displayCarts() {
  if (carts.length === 0) {
    cart_items.innerHTML = `<div class = "empty"> No Cart Item </div>`;
    return;
  }
  let carts_lists = "";

  for (let i = 0; i < carts.length; i++) {
    const { cart_img, cart_name, cart_price, cart_id } = carts[i];
    carts_lists += ` <div class="cart-item" >
        <div class="cart-img">
            <img 
            height="100%"
            width="100%"
            src="${cart_img}" alt=""
            >
        </div>
        <div class="cart-action" id="act">
            <div class="cart_item_name">${cart_name}</div>
            <div class="cart_item_price">#${cart_price}</div>
            <input type="text" id="cart_value">
        </div>
        <div class="cart_trash" >
            <button  data-id = ${cart_id} type="button" style="background-color: lime;">Delete</button>
        </div>
    </div>`;
  }
  cart_items.innerHTML = carts_lists;
}

shopContainer();
displayCarts();

// provide - info regarding the element the user clicked on
shop_container.addEventListener('click', function(event) {
    cart_bag_id = event.target.id;

    if (cart_bag_id === 'cart-bag'){
        // parseInt - convert a string to a number
        const product_id = parseInt(event.target.getAttribute('data-id'));
        let item;

        for(let i = 0; i < products.length; i++){
            const product = products[i];

            // the point where the product_id from the database(products) is equal to the product_id from the DOM
            
            if (product.product_id === product_id){
                item = product
            }
        }

        const carts_obj = {
            cart_id: item.product_id,
            cart_img: item.product_img,
            cart_name: item.product_name,
            cart_price: item.product_price
        }

        //  check if item is already exist
        let cart_item_already_exist = false;

        for(let i = 0; i < carts.length; i++){
            if (carts[i].cart_id === carts_obj.cart_id){
                cart_item_already_exist = true;
            }
        }
        if (cart_item_already_exist === true){
            alert('item already exist');
            return;
        }

        carts.push(carts_obj)

        sidebar.classList.remove('hide');
        displayCarts();
    }
})


