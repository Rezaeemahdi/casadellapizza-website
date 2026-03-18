/* ===================================================== */
/* NAVIGATION MENU (MOBILE OPEN / CLOSE)                 */
/* ===================================================== */

/* Select navigation elements */

const navLinks = document.querySelectorAll(".nav-menu .nav-link")
const menuOpenButton = document.querySelector("#menu-open-button")
const menuCloseButton = document.querySelector("#menu-close-button")

/* Open mobile menu */

menuOpenButton.addEventListener("click", () => {
document.body.classList.toggle("show-mobile-menu")
})

/* Close menu when close button is clicked */

menuCloseButton.addEventListener("click", () => menuOpenButton.click())

/* Close menu when clicking any navigation link */

navLinks.forEach(link => {
link.addEventListener("click", () => menuOpenButton.click())
})



/* ===================================================== */
/* REVIEWS SLIDER (SWIPER.JS)                            */
/* ===================================================== */

/* Creates the review slider */

const swiper = new Swiper('.slider-wrapper', {

loop:true,
grabCursor:true,
spaceBetween:25,

pagination:{
el:'.swiper-pagination',
clickable:true,
dynamicBullets:true
},

navigation:{
nextEl:'.swiper-button-next',
prevEl:'.swiper-button-prev'
},

breakpoints:{
0:{slidesPerView:1},
768:{slidesPerView:2},
1024:{slidesPerView:3}
}

})









/* ===================================================== */
/* MENU POPUP PANEL                                      */
/* ===================================================== */

/* Opens pizza category menu */

function openMenu(type){

const panel = document.getElementById("menu-panel")
const title = document.getElementById("panel-title")
const list = document.getElementById("panel-list")

list.innerHTML=""

let items=[]

/* Pizza categories */

if(type==="traditional"){

title.innerText="Traditional Pizza"

items=[
{name:"Margherita",price:"€6",ingredients:"Tomato, mozzarella, basil"},
{name:"Marinara",price:"€5",ingredients:"Tomato, garlic, oregano"},
{name:"Napoli",price:"€7",ingredients:"Tomato, mozzarella, acchuige"}
]

}

if(type==="special"){

title.innerText="Special Pizza"

items=[
{name:"Diavola",price:"€8",ingredients:"Tomato, mozzarella, spicy salami"},
{name:"Capricciosa",price:"€9",ingredients:"Ham, mushrooms, olives"},
{name:"Quattro Formaggi",price:"€9",ingredients:"4 Italian cheeses"}
]

}

if(type==="patatine"){

title.innerText="Pizza con Patatine"

items=[
{name:"Patatine",price:"€7",ingredients:"Mozzarella, fries"},
{name:"Patatine e Wurstel",price:"€8",ingredients:"Fries, sausage"}
]

}

if(type==="bufala"){

title.innerText="Pizza con Bufala"

items=[
{name:"Bufala",price:"€9",ingredients:"Buffalo mozzarella, basil"},
{name:"Bufala e Crudo",price:"€10",ingredients:"Buffalo mozzarella, prosciutto"}
]

}

if(type==="frittura"){

title.innerText="frittura"

items=[
{name:"Patate Fritte",price:"€4",ingredients:"Crispy fries"},
{name:"Mozzarella Sticks",price:"€5",ingredients:"Fried mozzarella"}
]

}

if(type==="drinks"){

title.innerText="Drinks"

items=[
{name:"Coca Cola",price:"€2.5",ingredients:"33cl"},
{name:"Water",price:"€1.5",ingredients:"50cl"},
{name:"Beer",price:"€4",ingredients:"Moretti"}
]

}

/* Create list items dynamically */

items.forEach(pizza=>{

const li=document.createElement("li")

li.innerHTML=`

<div class="pizza-row">
<span>${pizza.name}</span>
<span>${pizza.price}</span>
</div>

<div class="pizza-ingredients">${pizza.ingredients}</div>

<button class="add-btn" onclick="addToCart('${pizza.name}','${pizza.price}')">
+
</button>
`

list.appendChild(li)

})

panel.classList.add("active")

}


/* Close menu popup */

function closeMenu(){

document.getElementById("menu-panel").classList.remove("active")

}



/* ===================================================== */
/* SHOPPING CART SYSTEM                                  */
/* ===================================================== */

let cart=[]
let total=0


/* Add pizza to cart */

function addToCart(name,price){

let numericPrice=parseFloat(price.replace("€",""))

let existing=cart.find(item=>item.name===name)

if(existing){

existing.qty+=1

}else{

cart.push({name:name,price:numericPrice,qty:1})

}

total+=numericPrice

updateCart()

}



/* Update cart interface */

function updateCart(){

const cartItems=document.getElementById("cart-items")
const cartCount=document.getElementById("cart-count")
const cartTotal=document.getElementById("cart-total")

cartItems.innerHTML=""

let total=0

cart.forEach((item,index)=>{

total+=item.price*item.qty

let li=document.createElement("li")

li.innerHTML=`

<div class="cart-row">

<span class="cart-name">${item.name}</span>

<div class="cart-controls">

<button onclick="changeQty(${index},-1)">−</button>

<span>${item.qty}</span>

<button onclick="changeQty(${index},1)">+</button>

</div>

<span>€${(item.price*item.qty).toFixed(2)}</span>

<button class="remove-btn" onclick="removeItem(${index})">✕</button>

</div>
`

cartItems.appendChild(li)

})

let count=0

cart.forEach(item=>{
count+=item.qty
})

cartCount.innerText=count

cartTotal.innerText="Total: €"+total.toFixed(2)


/* Cart bounce animation */

const cartBtn=document.querySelector(".cart-button")

cartBtn.classList.add("cart-bounce")

setTimeout(()=>{
cartBtn.classList.remove("cart-bounce")
},400)


/* Order summary */

const summary=document.getElementById("order-summary")

let summaryHTML="<h4> Order Summary</h4>"

cart.forEach(item=>{
summaryHTML+=`${item.qty}x ${item.name}<br>`
})

summary.innerHTML=summaryHTML

}



/* Change quantity */

function changeQty(index,amount){

cart[index].qty+=amount

if(cart[index].qty<=0){
cart.splice(index,1)
}

updateCart()

}



/* Remove item completely */

function removeItem(index){

cart.splice(index,1)

updateCart()

}



/* Open cart popup */

function openCart(){

document.getElementById("cart-window").classList.add("active")

}



/* Close cart popup */

function closeCart(){

document.getElementById("cart-window").classList.remove("active")

}



/* ===================================================== */
/* ORDER CONFIRMATION                                    */
/* ===================================================== */

function checkoutOrder(){

const summaryBox=document.getElementById("confirmation-summary")

let summaryHTML="<h4>Order Summary</h4>"

let total=0

cart.forEach(item=>{
summaryHTML+=`${item.qty}x ${item.name} - €${(item.price*item.qty).toFixed(2)}<br>`
total+=item.price*item.qty
})

summaryHTML+=`<br><strong>Total: €${total.toFixed(2)}</strong>`

summaryBox.innerHTML=summaryHTML

document.getElementById("order-confirmation").classList.add("active")

}




/* Close confirmation popup */

function closeConfirmation(){

document.getElementById("order-confirmation").classList.remove("active")

}




/* ===================================================== */
/* WHATSAPP ORDER                                        */
/* ===================================================== */

function sendWhatsAppOrder(){

    let lang = localStorage.getItem("lang") || "en";
    
    /* ================= TEXTS ================= */
    
    let T = {
    en: {
    title: "Casa Della Pizza Order",
    total: "Total",
    type: "Order Type",
    time: "Time",
    name: "Name",
    phone: "Phone",
    address: "Address",
    doorbell: "Doorbell",
    note: "Note",
    pickup: "Pickup",
    delivery: "Delivery"
    },
    it: {
    title: "Ordine Casa Della Pizza",
    total: "Totale",
    type: "Tipo di ordine",
    time: "Orario",
    name: "Nome",
    phone: "Telefono",
    address: "Indirizzo",
    doorbell: "Campanello",
    note: "Nota",
    pickup: "Ritiro",
    delivery: "Consegna"
    }
    };
    
    let t = T[lang];
    
    /* ================= ORDER ================= */
    
    let message = `*${t.title}*%0A%0A`;
    
    let total = 0;
    
    cart.forEach(item=>{
    message += `• ${item.qty}x ${item.name} - €${(item.price * item.qty).toFixed(2)}%0A`;
    total += item.price * item.qty;
    });
    
    message += `%0A*${t.total}: €${total.toFixed(2)}*%0A%0A`;
    
    /* ================= CUSTOMER ================= */
    
    const orderType = document.getElementById("order-type").value;
    const time = document.getElementById("order-time").value;
    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("customer-phone").value;
    const address = document.getElementById("customer-address").value;
    const doorbell = document.getElementById("customer-doorbell").value;
    const note = document.getElementById("order-note").value;
    
    /* translate pickup/delivery */
    let typeText = orderType === "delivery" ? t.delivery : t.pickup;
    
    message += ` *${t.type}:* ${typeText}%0A`;
    message += ` *${t.time}:* ${time}%0A`;
    message += ` *${t.name}:* ${name}%0A`;
    message += ` ${t.phone}: ${phone}%0A`;
    
    if(orderType === "delivery"){
    message += ` *${t.address}:* ${address}%0A`;
    message += ` *${t.doorbell}:* ${doorbell}%0A`;
    }
    
    if(note){
    message += ` *${t.note}:* ${note}%0A`;
    }
    
    /* ================= SEND ================= */
    
    window.open(`https://wa.me/393933901705?text=${message}`, "_blank");
    
    /* ================= SUCCESS POPUP ================= */
    
    document.getElementById("order-success").classList.add("active");
    
    /* OPTIONAL: AUTO RESET AFTER SEND */
    setTimeout(()=>{
    cart = [];
    updateCart();
    }, 1000);
    
    }





/* ===================================================== */
/* CONTACT FORM → WHATSAPP                               */
/* ===================================================== */

document.getElementById("contact-form").addEventListener("submit",function(e){

e.preventDefault()

const name=document.getElementById("contact-name").value.trim()
const email=document.getElementById("contact-email").value.trim()
const message=document.getElementById("contact-message").value.trim()

let text=`*Contact Request*\n`
text+=`------------------------\n`
text+=`Name: ${name}\n`
text+=`Email: ${email}\n`
text+=`Message:\n${message}\n`
text+=`------------------------`

const encoded=encodeURIComponent(text)

window.open(`https://wa.me/393933901705?text=${encoded}`,'_blank')

this.reset()

})



/* ===================================================== */
/* ORDER TYPE SWITCH (PICKUP / DELIVERY)                 */
/* ===================================================== */

const orderType=document.getElementById("order-type")
const addressField=document.getElementById("address-field")

document.getElementById("order-type").addEventListener("change",function(){

    if(this.value==="delivery"){
    addressField.style.display="block"
    }else{
    addressField.style.display="none"
    }
    
    });




/* Buttons UI for pickup / delivery */

function setOrderType(type){

const orderTypeInput=document.getElementById("order-type")

orderTypeInput.value=type

const pickupBtn=document.getElementById("pickup-btn")
const deliveryBtn=document.getElementById("delivery-btn")

pickupBtn.classList.remove("order-btn-active")
deliveryBtn.classList.remove("order-btn-active")

if(type==="pickup"){

pickupBtn.classList.add("order-btn-active")
document.getElementById("address-field").style.display="none"
document.getElementById("doorbell-field").style.display="none"

}else{

deliveryBtn.classList.add("order-btn-active")
document.getElementById("address-field").style.display="block"
document.getElementById("doorbell-field").style.display="block"


}

}



/* detect saved or browser language */

document.addEventListener("DOMContentLoaded", function(){

    let saved = localStorage.getItem("site-language");
    
    if(!saved){
    
    let browserLang = navigator.language || navigator.userLanguage;
    
    if(browserLang.startsWith("it")){
    saved = "it";
    }else{
    saved = "en";
    }
    
    }
    
    if(saved === "it"){
        langToggle.checked = true;
        changeLanguage("it");
        }else{
        langToggle.checked = false;
        changeLanguage("en");
        }
    
    });
    
    
    function closeSuccess(){

        /* 1. Close ALL popups */
        document.getElementById("order-success").classList.remove("active");
        document.getElementById("order-confirmation").classList.remove("active");
        document.getElementById("cart-window").classList.remove("active");
        
        
        /* 2. Clear cart */
        cart = [];
        updateCart();
        
        
        /* 3. Reset form fields */
        document.getElementById("customer-name").value = "";
        document.getElementById("customer-phone").value = "";
        document.getElementById("customer-address").value = "";
        document.getElementById("customer-doorbell").value = "";
        document.getElementById("order-note").value = "";
        document.getElementById("order-time").value = "";
        
        
        /* 4. Reset order type to Pickup */
        setOrderType("pickup");
        
        
        /* 5. Reset contact form (important) */
        const contactForm = document.getElementById("contact-form");
        if(contactForm){
        contactForm.reset();
        }
        
        
        /* 6. Reset order summary */
        document.getElementById("order-summary").innerHTML = "";
        document.getElementById("confirmation-summary").innerHTML = "";
        
        
        /* 7. Scroll to top smoothly */
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
        
        
        /* 8. Small animation feedback (optional but nice) */
        document.body.classList.add("reset-flash");
        
        setTimeout(()=>{
        document.body.classList.remove("reset-flash");
        },300);
        
        }
        


    
    
    
            const toggle = document.getElementById("lang-toggle");
    
            /* Apply language */
            function setLanguage(lang){
    
                localStorage.setItem("lang", lang);
                
                document.querySelectorAll("[data-en]").forEach(el=>{
                el.innerText = el.getAttribute(`data-${lang}`);
                });

                /* PLACEHOLDERS */
document.querySelectorAll("[data-en-placeholder]").forEach(el=>{
    el.placeholder = el.getAttribute(`data-${lang}-placeholder`);
    });
    
                
                updatePlaceholders(lang);
                }
            
            /* Toggle switch */
            toggle.addEventListener("change", function(){
            if(this.checked){
            setLanguage("it");
            }else{
            setLanguage("en");
            }
            });
            
            /* Load saved language */
            document.addEventListener("DOMContentLoaded", ()=>{
            
            let lang = localStorage.getItem("lang");
            
            /* auto detect first time */
            if(!lang){
            lang = navigator.language.startsWith("it") ? "it" : "en";
            }
            
            if(lang === "it"){
            toggle.checked = true;
            }
            
            setLanguage(lang);
            
            });
    
    

/* ===== SCROLL ANIMATION ===== */

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
    if(entry.isIntersecting){
    entry.target.classList.add("show");
    }
    });
    },{
    threshold: 0.2
    });
    
    document.querySelectorAll(".reveal").forEach(el=>{
    observer.observe(el);
    });

/* ===== ULTRA SMOOTH SCROLL ===== */

const lenis = new Lenis({
    duration: 1.2,
    smooth: true
    });
    
    function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);


/* ===== PARALLAX EFFECT ===== */

window.addEventListener("scroll", () => {

    const scrolled = window.scrollY;
    
    document.querySelectorAll(".parallax").forEach(el=>{
    let speed = el.getAttribute("data-speed") || 0.3;
    el.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    });