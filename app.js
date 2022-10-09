const shoes = document.getElementById("shoes");
const wears = document.getElementById("wears");
const gadgets = document.getElementById("gadget");
const cars = document.getElementById("cars");
const cartIcon = document.getElementById("cart-cont");
const shopCont = document.getElementById("shop-cont");
const cartCont = document.getElementById("carted-items");
const showCartCont = document.getElementById("show-cart-cont");
const backArrow = document.getElementById("back-hand");
const totalPrice = document.getElementById("total-price");
const cartNum = document.getElementById("cart-num");
let countProd = 0;
let setProduct = [];
let priceCont = [];

function addAndMinus(plusIcon, minusIcon) {

    let mainPrice = JSON.parse(localStorage.getItem("priceRange"));

    function red(total, num) {
      return total + num;
    }
    let gone = mainPrice.reduce(red);
    totalPrice.textContent = gone.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  plusIcon.forEach((plused) => {
    plused.addEventListener("click", () => {
      let numToPlus = Number(
        plused.parentElement.parentElement.parentNode.children[1].children[1]
          .textContent
      );

      gone += numToPlus;

      totalPrice.textContent = gone
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      let countNum = Number(plused.parentElement.children[2].textContent);
      let addOneCount = countNum + 1;
      let countTag = plused.parentElement.children[2];
      let minusIcon = plused.parentElement.children[0];
      let stopMinus = plused.parentElement.children[1];
      minusIcon.style.display = "block";
      stopMinus.style.display = "none";
      countTag.innerHTML = addOneCount;
    });
  });
  minusIcon.forEach((minused) => {
    minused.addEventListener("click", () => {
      let numToMinus = Number(
        minused.parentElement.parentElement.parentNode.children[1].children[1]
          .textContent
      );

      gone -= numToMinus;

      totalPrice.textContent = gone
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      let countTag = minused.parentElement.children[2];
      let minusIcon = minused.parentElement.children[0];
      let stopMinus = minused.parentElement.children[1];

      if (countTag.textContent == 1) {
        minusIcon.style.display = "none";
        stopMinus.style.display = "block";
        countTag.textContent = 0;
      } else {
        let countNum = Number(minused.parentElement.children[2].textContent);
        let minusOneCount = countNum - 1;
        countTag.textContent = minusOneCount;
      }
    });
  });
}

function addToCart(button) {
  button.addEventListener("click", () => {
    cartNum.style.display = "flex"
      countProd += 1
      console.log(countProd);
      cartNum.textContent = countProd
    
    button.disabled = true;
    button.style.backgroundColor = "gray";
    button.textContent = "Added";
    let miniParent = button.parentElement;
    let mainParent = miniParent.parentElement;
    let image = mainParent.childNodes[1].src;
    let productName = miniParent.childNodes[1].childNodes[1].textContent;
    let productPrice = miniParent.childNodes[1].children[1].textContent;

  
    let productDetails = {
      pic: image,
      name: productName,
      price: productPrice,
    };

    let realNumone = Number(productPrice);
    priceCont.push(realNumone);
    console.log(priceCont);
    localStorage.setItem("priceRange", JSON.stringify(priceCont));

    setProduct.push(productDetails);
    localStorage.setItem("purchased", JSON.stringify(setProduct));
  });
}

function removeItem(item) {
  item.addEventListener("click", () => {
    countProd -= 1
      console.log(countProd);
      cartNum.textContent = countProd
    let mainPrice = JSON.parse(localStorage.getItem("priceRange"));
    console.log(mainPrice);
    let newTotalPrice = totalPrice.textContent
    let newNewPrice = parseFloat(newTotalPrice.replace(/,/g, ''))
    let delPrice = item.parentElement.children[1].children[1].textContent;
    let numberOfItemPurchased = Number(item.parentElement.children[2].childNodes[1].children[2].textContent)
    let minusPrice = Number(delPrice)
    let substractNum = minusPrice * numberOfItemPurchased
    
    console.log(delPrice);
    let delImg = item.parentElement.childNodes[1].src;
    
    let delName = item.parentElement.children[1].childNodes[1].textContent;
    mainPrice = mainPrice.filter((m) =>{
        let remainedPrice = JSON.stringify(m) !== delPrice;
        return remainedPrice
    })
    localStorage.setItem("priceRange",JSON.stringify(mainPrice))

    let moveOut = JSON.parse(localStorage.getItem("priceRange"))
    // console.log(moveOut);
    // console.log(mainPrice);
    let priced = mainPrice.map((m)=>{
      return m
    })
    console.log(priced);
    totalPrice.innerHTML = priced;


    let fromStorage = JSON.parse(localStorage.getItem("purchased"));      
    // console.log(newTotalPrice);
    let productDetails = {
      pic: delImg,
      name: delName,
      price: delPrice,
    };

    fromStorage = fromStorage.filter((f) => {
      let remains = JSON.stringify(f) !== JSON.stringify(productDetails);

      return remains;
    });
    // addAndMinus()
    localStorage.setItem("purchased", JSON.stringify(fromStorage));
    showCart();
 
   
  });
}

function showCart(cart) {
  let fromStorage = JSON.parse(localStorage.getItem("purchased"));
  shopCont.style.display = "none";
  cartCont.style.display = "block";
  backArrow.style.display = "block";
  let styleFromStorage = fromStorage.map((p) => {
    return `<div class="lg:w-3/12 xl:w-3/12 mx-11 mt-2 :w-40">
                    <img src="${p.pic}" alt="" class="h-64 w-full">
                    <div class="flex justify-between">
                        <p class="text-xl text-cyan-500">${p.name}</p>
                        <p class="font-bold pricess">${p.price}</p>
                    </div>
                    <div class="flex justify-center">
                        <div class="flex justify-between w-8/12 bg-blue-100 p-2 items-center rounded-lg mt-1.5">
                            <div class="fa-solid fa-minus cursor-pointer text-cyan-600 minus"></div>
                            <div class="w-3.5 h-2.5 hidden stop-minus"></div>
                            <p class="count">1</p>
                            <i class="fa-solid fa-plus cursor-pointer text-cyan-600 plus"></i>
                        </div>
                    </div>
                    <div class="bg-red-800 text-white p-2 w-20 cursor-pointer mt-1.5 rounded-xl text-xs remove-cont">
                        <i class="fa-solid fa-trash"></i> <span>Remove</span>
                    </div>
                </div>`;
  });

  showCartCont.innerHTML = styleFromStorage.join("");
  let pricesOfsale = document.querySelectorAll(".pricess");
  let minus = document.querySelectorAll(".minus");
  let plus = document.querySelectorAll(".plus");
  let countCont = document.querySelectorAll(".count");
  let removeCont = document.querySelectorAll(".remove-cont");

  addAndMinus(plus, minus)
  // addAndMinus(removeCont)

  removeCont.forEach((rollOut) => {
    removeItem(rollOut);
  });
}

cartIcon.addEventListener("click", () => {
  showCart();
});
backArrow.addEventListener("click", () => {
  console.log(showCartCont.innerHTML);
  if (showCartCont.innerHTML == "") {
    window.location.reload()
  }
  else{
    shopCont.style.display = "block";
    cartCont.style.display = "none";
    backArrow.style.display = "none";

  }
});
