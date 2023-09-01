let items = [
  {
    name: "MacBook pro 13 inch",
    price: 3000,
    desc: "this Macbook is made for pro users",
    src: "./assets/img/macBook.jpeg",
  },
  {
    name: "Alieneware 3000px",
    price: 4600,
    desc: "this Alieneware is made for pro users",
    src: "./assets/img/pc.jpeg",
  },
  {
    name: "iMac",
    price: 7000,
    desc: "this iMac is made for pro users",
    src: "./assets/img/iMca.jpeg",
  },
];
let cartArray = [];
let articlesContainer = document.getElementById("articlesContainer");
for (key in items) {
  let { name, price, desc, src } = items[key];
  let newDiv = document.createElement("div");
  newDiv.innerHTML = `
 <div class="articles"><h3>${name}</h3>
 <img src=${src} alt="">
 <p>Price :${price} $</p>
 <p>${desc}</p>
 <button onclick="AddToCart(${key})">Add to cart</button>
 </div>`;
  articlesContainer.appendChild(newDiv);
}
function AddToCart(index) {
  let cart = document.getElementById("cart");
  let { name, price } = items[index];
  IndexIncart = cartArray.length;
  cartArray.push({ name, price, qte: 1, index: IndexIncart });
  let newdiv = document.createElement("div");
  newdiv.innerHTML = `<h3>${name}</h3>
    <p>Price :${price} $</p>
    <input type="number" min="1" value="1" onchange="changeqte(this,${IndexIncart})">
    <button onclick="remove(${IndexIncart})">remove item</button>`;
  cart.appendChild(newdiv);
  totalcart();
}
function totalcart() {
  let total = 0;
  for (key of cartArray) {
    let { qte, price } = key;
    total += parseInt(qte) * parseInt(price);
  }
  let Total = document.getElementById("total");
  Total.innerHTML = total;
}
function changeqte(elem, index) {
  let qte = elem.value;
  cartArray[index].qte = qte;
  totalcart();
}
function remove(index) {
  cartArray.splice(index, 1);
  cart.innerHTML = "";
  cartArray.forEach((e, i) => {
    let { name, price, qte } = e;
    let newdiv = document.createElement("div");
    newdiv.innerHTML = `<h3>${name}</h3>
   <p>Price : ${price}$ </p>
   <input type="number" value="${qte}" min="1" onchange="changeqte(this,${i})">
   <button onclick="remove(${i})">remove item</button>`;
    cart.appendChild(newdiv);
  });
  totalcart();
}
