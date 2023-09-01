let articleContainer = document.getElementById("articlesContainer");

const items = [
  {
    id: "item1",
    name: "MacBookPro 13inch",
    desc: "this macBook is made for pro users",
    price: 3600,
    src: "./assets/img/macBook.jpeg",
  },
  {
    id: "item2",
    name: "AlienWare",
    desc: "this PC is made for pro gamers users",
    price: 4000,
    src: "./assets/img/pc.jpeg",
  },
  {
    id: "item3",
    name: "iMac",
    desc: "this PC is made for Pro users",
    price: 4020,
    src: "./assets/img/iMac.jpeg",
  },
];
let cartArray = [];
for (key in items) {
  let { id, name, desc, price, src } = items[key];
  newDiv = document.createElement("div");
  newDiv.innerHTML = `<div id=${id} class="articles">
  <img src=${src} alt="" />
  <div id="traitItems"></div>
  <h3>${name}</h3>
  <p>${desc}</p>
  <p>Price :${price}$</p>
  <button id="ButtonAddToCart" onclick="addToCart(${key})">Add to cart</button>
</div>`;
  articleContainer.appendChild(newDiv);
}
function addToCart(index) {
  let cart = document.getElementById("cart");
  let { name, price } = items[index];
  const CartArrIndex = cartArray.length;
  cartArray.push({ name, price, qte: 1, index: CartArrIndex });
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<div id="itemContainer">
  <h3>${name}</h3>
  <h4>prix :${price}$</h4>
  <input type="number" value="1" min="1" onchange="changeqte(this,${CartArrIndex})" />
  <button id="removeBtn" onclick="deletElement(${CartArrIndex})">remove</button>
  </div>`;
  cart.appendChild(newDiv);
  totalcart();
  //JAI PAS ENCORE MIS LA FONCTION REMOVE ET CHANGE QUENTITY
}
function totalcart() {
  let total = 0;
  for (const object of cartArray) {
    let { qte, price } = object;
    total += parseInt(qte) * parseInt(price);
    let Total = document.getElementById("total");
    Total.innerHTML = total;
  }
}
function changeqte(elem, index) {
  let qte = parseInt(elem.value);
  cartArray[index].qte = qte;
  totalcart();
}
function deletElement(index) {
  cartArray.splice(index, 1);
  let cart = document.getElementById("cart");
  cart.innerHTML = "";
  cartArray.forEach((e, i) => {
    let { name, price } = e;
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<div id="itemContainer">
  <h3>${name}</h3>
  <h4>prix :${price}$</h4>
  <input type="number" value="1" min="1" onchange=changeQTE(this,${i}) />
  <button id="removeBtn" onclick="deletElement(${i})" >remove</button>
  </div>`;
    cart.appendChild(newDiv);
  });
  totalcart();
}
