const wearsCont = [
    {
        nameOfProduct: "Nike Men Tracksuit",
        img: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwcf7f6867/images/60973001/Rebel_60973001_black_hi-res.jpg?sw=558&sh=558&sm=fit",
        price: 60000,
    },
    {
        nameOfProduct: "Women Flee Tracksuit",
        img: "https://www.skylinewears.com/wp-content/uploads/2017/11/s-l1600-6.jpg",
        price: 40000,
    },
    {
        nameOfProduct: "LV Jacket",
        img: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-admiral-jacket-ready-to-wear--HHL87ELSR85M_PM2_Front%20view.jpg",
        price: 50000,
    },
    {
        nameOfProduct: "College Jacket (LV)",
        img: "https://www.jacketmakers.com/wp-content/uploads/2021/11/green-louis-vuitton-jacket.jpg",
        price: 70000,
    },
    {
        nameOfProduct: "Dior Oblique Jacket",
        img: "https://media.dior.com/couture/ecommerce/media/catalog/product/7/g/1570207502_943C449A4462_C989_E01_GHC.jpg?imwidth=800",
        price: 95000,
    },
    {
        nameOfProduct: "Christion Dior Shirt",
        img: "https://static-uc.olist.ng/upload/20200128/keawctfzg8x.jpg",
        price: 150000,
    },
]

let showWears = wearsCont.map((p)=>{
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

wears.innerHTML = showWears.join("")

let btn3 = document.querySelectorAll(".btn3")

btn3.forEach((btn1)=>{
    addToCart(btn1)
})