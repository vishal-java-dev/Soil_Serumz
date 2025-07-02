// top notifiction 
var hide=document.getElementById('hide')
var btn=document.getElementById('btttn')

btn.addEventListener('click',function(){
console.log('hello')
hide.style.display='none'

})

// cat li 
document.addEventListener('DOMContentLoaded',()=>{
    const openCartButton=document.getElementById('openCartSidebar')
    const closeCartButton=document.getElementById('closeCartSidebar')
    const offcanvasss=document.getElementById('offcanvasss')

    openCartButton.addEventListener("click",()=>{
        offcanvasss.classList.add('active')
    })

    closeCartButton.addEventListener("click",()=>{
        offcanvasss.classList.remove('active')
    })
})

let openshopping=document.querySelector('.shopping')
let closeShopping=document.getElementById("closeCartSidebar")
let listCard=document.querySelector('.listCard')
let offcanvasss=document.querySelector('.offcanavasss')
let total=document.querySelector('.total')
let quantity=document.querySelector('.quantity')
let totalsaving=document.querySelector('.totalsaving')
let quqntity_heart=document.querySelector('.quantity_herat')
let quantity_inside=document.querySelector('.quantity_insid')

openshopping.addEventListener('click',()=>{
    offcanvasss.classList.add('active')
})
closeShopping.addEventListener('click',()=>{
    offcanvasss.classList.remove('active')
})


let list=document.querySelector(".list")
let products = [
    {
        id: 1, 
        image_circle: 'images/grand-mom-300x300.jpg',
        images: 'images/hover_images.jpg', 
        name: 'GRAND MOMES SECRET HAIR OIL',
        Price: 600,
        discount_price: 300,
        discount_percentage: 50,   
    },
    {
        id: 2, 
        image_circle: 'images/hibiscus-and-condi-03-1-300x300.jpg',
        images: 'images/hibiscus-shampoo-300x300.jpg', 
        name: 'HIBISCUS SHAMPOO & CONDITIONER KIT',
        Price: 500,
        discount_price: 350,
        discount_percentage: 30,   
    },
    {
        id: 3, 
        image_circle: 'images/SERUM.jpg',
        images: 'images/hair-serum-03-300x300.jpg', 
        name: 'HAIR REGROWTH SERUM',
        Price: 585,
        discount_price: 385,
        discount_percentage: 28,   
    },
    {
        id: 4, 
        image_circle: 'images/long-hair-kit.jpg',
        images: 'images/long-hair-kit-04.jpg', 
        name: 'LONG HAIR KIT',
        Price: 2100,
        discount_price: 1950,
        discount_percentage: 17,   
    },
    {
        id: 5, 
        image_circle: 'images/item-2.jpeg',
        images: 'images/hover_images.jpg', 
        name: 'FULL BEAUTY COMBO',
        Price: 1400,
        discount_price: 1200,
        discount_percentage: 20,   
    },
    {
        id: 6, 
        image_circle: 'images/black seed 1.jpg',
        images: 'images/hover_images.jpg', 
        name: 'BLACK SEED ONION OIL',
        Price: 750,
        discount_price: 550,
        discount_percentage: 30,   
    },
]

let listCards=[]
function initApp(){
    products.forEach((value,key)=>{
        let newDiv=document.createElement('div')
        newDiv.classList.add('cared')
        newDiv.classList.add('swiper-slide')


        newDiv.innerHTML=`
        <div class="images-div ">
                <img src="${value.image_circle}"/>
                <img src="${value.images}" alt="" class="next-img">
                <div class="icon">
                    <p><i class="bi bi-heart"></i></p>
                    <p><i class="bi bi-search"></i></p>
                    <p><i class="bi bi-shuffle"></i></p>
              </div>
              <div class="discount">
                <span>-${value.discount_percentage}%</span>
              </div>
            </div>
              <div class="contant-div">
                <p>BEST SELLER HAIRCARE</p>
                <h5>${value.name}</h5>
                <span><del>&#8377;${value.Price} <br>
                Discount is: &#8377;${value.discount_price}</span>
              </div>
              <div class="add-card">
                <button class="btn" onclick="addToCart(${key})"><i class="bi bi-cart"></i> Add Cart</button>
              </div>

        
        `
        list.appendChild(newDiv)
        console.log(list)
    })
}
initApp()

function addToCart(key){
    console.log("working")
    if(listCards[key]==null){
        listCards[key]={...products[key],quantity:1}
    }
    else{
        listCards[key].quantity+=1
    }
    reloadCart()
}

function reloadCart(){
    listCard.innerHTML=""
    let count=0;
    let totalPrice=0

    listCards.forEach((value,key)=>{
        if(value!=null){
            totalOffer=value.discount_price*value.quantity
            totalPrice+=value.Price*value.quantity
            count+=value.quantity
            let newDiv=document.createElement("li")
            newDiv.innerHTML=`
            <div class='hole_add_cart'>
            <div class='add_to_cart p-2'>
            <img src='${value.image_circle}'/>
            <div calss='name_div'>
              <h6 class='mt-2'>${value.name}</h6>
            <p class='fs-5 text-success aomount'>&#8377;${value.Price*value.quantity.toLocaleString()}</p>
            
            <div class='incr_add_dicris'>
            <button onclick="changeQuantity(${key},
            ${value.quantity-1})">-</button>
            <div class='count'>${value.quantity}</div>
            
            <button onclick="changeQuantity(${key},
            ${value.quantity+1})">+</button>

            </div>
            </div>
            </div>
            </div>
            
            `
            listCard.appendChild(newDiv)
        }
    })
    total.innerHTML= '&#8377;' +totalPrice.toLocaleString()
    quantity.innerHTML=count;
    quqntity_heart.innerHTML=count;
    quantity_inside.innerHTML=count;
    totalsaving.innerHTML= '&#8377;' +totalOffer.toLocaleString()
}
function changeQuantity(key,quantity){
    if(quantity<=0){
        delete listCards[key]
    }
    else{
        listCards[key].quantity=quantity
    }
    reloadCart()
}

