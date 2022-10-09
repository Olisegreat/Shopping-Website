const shoesCont = [
    {img : "https://imgix.bustle.com/uploads/image/2022/3/9/c9b7261a-8918-42c4-92a0-43e7ac10be40-adidas-yeezy-foam-runner-gx4472-stone-sage-8.webp?w=757&fit=crop&crop=faces&auto=format,compress",
     price : 50000,
     nameOfProduct: "Yeezy's",       
},
    {img : "https://www.highsnobiety.com/static-assets/thumbor/nI3VcQHauvbw62L6WpDwSXoTS3A=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/02/12163548/air-jordan-1-university-blue-release-info-02.jpg",
     price : 80000,
     nameOfProduct: "Nike Air Jordan 1",       
},
    {img : "https://sneakernews.com/wp-content/uploads/2022/07/Air-Jordan-2-Chicago-2022-Photos-0.jpg",
     price : 100000,
     nameOfProduct: "Nike Air Jordan 2", 
},
    {img : "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/03/347591/1.jpg?3386",
    price: 12800,       
    nameOfProduct : "Smart Formal Shoe",
     ratings: "",
},
    {img : "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/44/9878201/1.jpg?1300",
     price : 18500,
     nameOfProduct: "Spring Girls Sneakers",       
},
    {img : "https://m.media-amazon.com/images/I/7186ctiXOFL._AC_UY395_.jpg",
     price : 20000,
     nameOfProduct: "Men running shoes",       
},
    {img : "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11391306/2020/2/12/10b9eea6-35be-4b7d-8c39-826d4d3500c11581485549564-US-Polo-Assn-Men-Casual-Shoes-4671581485548936-1.jpg",
     price : 10000,
     nameOfProduct: "Casual Shoes",       
},
    {img : "https://cdn.shopify.com/s/files/1/2693/1098/products/5ea7fc0666c68_d160a04e-4ed7-4a42-a8d9-c7d109c78651_grande.gif?v=1588327896",
     price : 30000,
     nameOfProduct: "Soldier Boots",       
}
]

let showShoes = shoesCont.map((p)=>{
    return `<div class="sm:w-80 w-5/12 h-48 sm:h-max flex m-3 text-sm border-solid p-1 shadow-lg shadow-gray-400/50">
                <img src="${p.img}" alt="" class="w-8/12 sm:h-48 h-4/6">
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
                    <button class="bg-cyan-800 p-1 text-white ml-1 sm:w-24 w-full text-xs btn4">Add to Cart</button>
                </div>
            </div>`
})

shoes.innerHTML = showShoes.join("")

let btn4 = document.querySelectorAll(".btn4")

btn4.forEach((btn1)=>{
    addToCart(btn1)
    
})