const gadgetsCont = [
    {
        img: "https://www.cyberdyne.com.ng/wp-content/uploads/2020/11/Apple-Macbook-Air-4.jpg",
        nameOfProduct: "Apple Macbook Air",
        price: 633000
    },
    {
        img: "https://www.cyberdyne.com.ng/wp-content/uploads/2020/10/Airpod-pro.jpg",
        nameOfProduct: "Airpod Pro",
        price: 125000
    },
    {
        img: "https://cdn.vanguardngr.com/wp-content/uploads/2022/06/iPhone-14-Pro-Max.jpg",
        nameOfProduct: "iPhone 14 Pro Max",
        price: 1140000
    },
    {
        img: "https://www.apple.com/v/iphone-13/f/images/meta/iphone-13_overview__cw1zea9uif0i_og.png",
        nameOfProduct: "iPhone 13",
        price: 600000
    },
    {
        img: "https://www.computervillageonline.com/wp-content/uploads/2021/02/iphone-12-pro-max-gold-hero.png",
        nameOfProduct: "iPhone 14 Pro",
        price: 590000
    },
    {
        img: "https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg",
        nameOfProduct: "iPhone 12",
        price: 300000
    },
    {
        img: "https://m.media-amazon.com/images/I/71vnCP0GI-L._AC_SX679_.jpg",
        nameOfProduct: "iPhone 11 Pro Max",
        price: 400000
    },
    {
        img: "https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_glass_big.jpg.large.jpg",
        nameOfProduct: "iPhone X",
        price: 200000
    },
    {
        img: "https://www.computervillageonline.com/wp-content/uploads/2021/02/iphone-xr-black-select-201809.png",
        nameOfProduct: "iPhone XR",
        price: 230000
    },
    {
        img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-plus-01.jpg",
        nameOfProduct: "iPhone 7 Plus",
        price: 100000
    },
    {
        img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-6-1.jpg",
        nameOfProduct: "iPhone 6",
        price: 60000
    },
]

let showGadgets = gadgetsCont.map((p)=>{
    return `<div class="sm:w-80 w-5/12 sm:h-60 h-48 flex m-3 text-sm border-solid p-1 shadow-lg shadow-gray-400/50">
    <img src="${p.img}" alt="" class="w-8/12 sm:h-full h-4/6">
    <div class="flex flex-col justify-between">
      <div>
        <p class="py-2 text-base sm:text-xl pl-1">${p.nameOfProduct}</p>
        <p class="pb-2 font-bold pl-1">${p.price}</p>  
        <div class="w-full pl-1 text-xs">  
            <span class="fa fa-star checked text-orange-500"></span>
            <span class="fa fa-star checked text-orange-500"></span>
            <span class="fa fa-star checked text-orange-500"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>
      </div>
        <button class="bg-cyan-800 p-1 text-white ml-1 sm:w-24 w-full text-xs btn3">Add to Cart</button>
    </div>
</div>`
})

gadgets.innerHTML = showGadgets.join("")

let btn2 = document.querySelectorAll(".btn2")

btn2.forEach((btn1)=>{
    addToCart(btn1)
})

