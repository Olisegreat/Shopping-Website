const carsCont = [
    {
        img: "https://www.carmodelslist.com/wp-content/uploads/2015/04/Mercedes-Benz-C-Class-Car-model.jpg",
        nameOfProduct: "Mercedes Benz E-CLASS",
        price : 2600000
    },
    {
        img: "https://s1.cdn.autoevolution.com/images/models/MERCEDES-BENZ_GLC-2022_main.jpg",
        nameOfProduct: "Mercedes Benz GLE",
        price : 7000000
    },
    {
        img: "https://www.carmodelslist.com/wp-content/uploads/2012/04/honda-odyssey-car-model.jpg",
        nameOfProduct: "Honda Jeep",
        price : 1200000
    },
    {
        img: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/story/hero_image/1908-Ford-Model-T_0.jpg",
        nameOfProduct: "Old School(UK)",
        price : 700000
    },
    {
        img: "https://aoonuauto.com/pub/media/content/19_8f8529d3-07f1-4dd3-ba15-0dc53bf1338f_large.jpg",
        nameOfProduct: "Old School(US)",
        price : 700000
    },
]

let showCars = carsCont.map((p)=>{
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

cars.innerHTML = showCars.join("")

let btn = document.querySelectorAll(".btns")

// const plis = [2,3,4,67,7]

// function red(total, num) {
//     return total + num
// }

// let gone = plis.reduce(red)
// console.log(gone);

btn.forEach((btn1)=>{
    addToCart(btn1)
})