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





/* ===== GALLERY SLIDER ===== */
/*
const gallerySwiper = new Swiper('.gallery-section .slider-wrapper', {

    loop:true,
    grabCursor:true,
    spaceBetween:25,
    
    pagination:{
    el:'.gallery-section .swiper-pagination',
    clickable:true,
    dynamicBullets:true
    },
    
    navigation:{
    nextEl:'.gallery-section .swiper-button-next',
    prevEl:'.gallery-section .swiper-button-prev'
    },
    
    breakpoints:{
    0:{slidesPerView:1},
    768:{slidesPerView:2},
    1024:{slidesPerView:3}
    }
    
    });


*/
/* ===================================================== */
/* MENU POPUP PANEL                                      */
/* ===================================================== */

/* Opens pizza category menu */



function openMenu(type) {
    const panel = document.getElementById('menu-panel');
    panel.style.display = 'flex'; // or 'block'
    
    const title = document.getElementById('panel-title');
    const list = document.getElementById('panel-list');
    list.innerHTML = ""; // Clear old items

    let items = [];
    
    /* ===== CATEGORY ===== */
    if (type === "traditional") {
        title.innerText = "Pizze Tradizionali";
        items = [
            {name: "Marinara", priceN: "€5,00", priceM: "€10,00", ingredients: "pom., aglio, origano"},
            {name: "Margherita", priceN: "€5.50", priceM: "€11,00", ingredients: "pom. mozz., fior di latte (FDL)"},
            {name: "Cipolla", priceN: "€6,00", priceM: "€12,00", ingredients: "pom., mozz. (FDL), Cipolla rossa"},
            {name: "Viennese", priceN: "€6.50", priceM: "€13,00", ingredients: "pom., mozz. (FDL), wurstel di pollo"},
            {name: "Peperoni", priceN: "€6,00", priceM: "€12,00", ingredients: "pom., mozz. (FDL), peperoni al forno"},
            {name: "Melanzane", priceN: "€6,00", priceM: "€12,00", ingredients: "pom., mozz. (FDL), melanzane grigliate"},
            {name: "Melanzane Fritte", priceN: "€7,00", priceM: "€14,00", ingredients: "pom., mozz. (FDL), melanzane fritte"},
            {name: "Zucchine", priceN: "€6,00", priceM: "€12,00", ingredients: "pom., mozz. (FDL), zucchine grigliate"},
            {name: "Funghi", priceN: "€6,00", priceM: "€12,00", ingredients: "pom., mozz. (FDL), funghi trifolati champ."},
            {name: "Prosciutto", priceN: "€6.50", priceM: "€13,00", ingredients: "pom., mozz. (FDL), prosciutto cotto AFF."},
            {name: "Carciofi", priceN: "€6,00", priceM: "€12,00", ingredients: "pom., mozz. (FDL), carciofi"},
            {name: "Salsiccia", priceN: "€6.50", priceM: "€13,00", ingredients: "pom., mozz. (FDL), salsiccia"},
            {name: "Tonno", priceN: "€6.80", priceM: "€14.20", ingredients: "pom., mozz. (FDL), tonno"},
            {name: "Diavola", priceN: "€6.50", priceM: "€13,00", ingredients: "pom., mozz. (FDL), salamino piccante"},
            {name: "Melanzane e Gorgonzola", priceN: "€7,00", priceM: "€14,00", ingredients: "pom., mozz. (FDL), melanzane grigliate, gorgonzola"},
            {name: "Rucola e Grana", priceN: "€6.50", priceM: "€13,00", ingredients: "pom., mozz. (FDL), rucola, grana scaglie"},
            {name: "Rucola e Pomodorini", priceN: "€6.50", priceM: "€13,00", ingredients: "pom., mozz. (FDL), rucola, pomodorini"},
            {name: "Parmigiana", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz. (FDL), melanzane grigliate, grana"},
            {name: "Raggio di Sole", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz. (FDL), asparagi, uovo"},
            {name: "Saporita", priceN: "€7.60", priceM: "€15.20", ingredients: "pom., mozz. (FDL), salsiccia, Cipolla rossa"},
            {name: "Melanzane e Salsiccia", priceN: "€7.60", priceM: "€15.20", ingredients: "pom., mozz. (FDL), melanzane gril., salsiccia"},
            {name: "Salsiccia e Salamino", priceN: "€7.80", priceM: "€15.60", ingredients: "pom., mozz. (FDL), salsiccia, salamino piccante"},
            {name: "Prosciutto e Funghi", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz. (FDL), prosciutto AFF. e funghi"},
            {name: "Tonno e Cipolla", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz. (FDL), tonno, Cipolla rossa"},
            {name: "Allegro", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz. (FDL), melanzane, pomodorini, grana"},
            {name: "Ricotta e Spinaci", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz. (FDL), ricotta, spinaci"},
            {name: "Boscaiola", priceN: "€8,00", priceM: "€16,00", ingredients: "pom., mozz. (FDL), misto bosco"},
            {name: "Napoletana", priceN: "€7,00", priceM: "€14,00", ingredients: "pom., mozz. (FDL), capperi, acciughe, olive"},
            {name: "Melanzane Zucchine Salsiccia", priceN: "€7.80", priceM: "€15.60", ingredients: "pom., mozz. (FDL), melanzane, zucchine, salsiccia"},
            {name: "Vegetariana", priceN: "€8.00", priceM: "€16.00", ingredients: "pom., mozz. (FDL), verdure di stagione"},
            {name: "Capricciosa", priceN: "€8.00", priceM: "€16.00", ingredients: "pom., mozz. (FDL), prosciutto cotto, carciofi, funghi"},
            {name: "4 Stagioni", priceN: "€8.00", priceM: "€16.00", ingredients: "pom., mozz. (FDL), prosciutto cotto, carciofi, funghi, olive nere"},
            {name: "Carbonara", priceN: "€8.00", priceM: "€16.00", ingredients: "pom., mozz. (FDL), pancetta, uovo, grana"},
            {name: "Ungherese", priceN: "€8.60", priceM: "€17.20", ingredients: "pom., mozz. (FDL), salsiccia, salamino piccante wurstel"},
            {name: "Porcini", priceN: "€8,00", priceM: "€16.00", ingredients: "pom., mozz. (FDL), porcini"},
            {name: "Italia", priceN: "€8,00", priceM: "€16.00", ingredients: "pom., mozz. (FDL), rucola, grana, pomodorini"},
            {name: "Diavoletta", priceN: "€8,00", priceM: "€16.00", ingredients: "pom., mozz. (FDL), cipolla, salsiccia, salamino piccante"},
            {name: "Speckola", priceN: "€8.60", priceM: "€17.20", ingredients: "pom., mozz. (FDL), speck, gorgonzola"}
        ];
    } else if (type === "special") {
        title.innerText = "Pizza Speciali";
        items = [
            {name: "Contadina", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz., cipolla, funghi, salsiccia, asparagi"},
            {name: "Contadina 2", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz., pancetta affumicata, uova, asparagi"},
            {name: "Ghiotta", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz., cipolla, salamino piccante, gorgonzola"},
            {name: "Messicana", priceN: "€8.50", priceM: "€17,00", ingredients: "pom., mozz., sal. picc., salsiccia, peperoncino, olio piccante"},
            {name: "Veneta", priceN: "€8.50", priceM: "€17,00", ingredients: "pom., mozz., radicchio al forno, gorgonzola, salsiccia"},
            {name: "Costiera", priceN: "€8.50", priceM: "€17,00", ingredients: "pom., mozz., pomodorini, gamberetti, zucchine, aglio"},
            {name: "Rustica", priceN: "€8.50", priceM: "€17,00", ingredients: "pom., mozz., prosciutto cotto, funghi, salsiccia, cipolla"},
            {name: "Leggera", priceN: "€8.50", priceM: "€17,00", ingredients: "pom., mozz., mais, rucola, pomodorini, grana"},
            {name: "Zingara", priceN: "€9.50", priceM: "€19,00", ingredients: "mozz., melanzane, peperoni, funghi, wurstel, pancetta"},
            {name: "Campagnola", priceN: "€8.50", priceM: "€17,00", ingredients: "pom., mozz., verdure miste, pancetta"},
            {name: "Brie e Speck", priceN: "€8.50", priceM: "€17,00", ingredients: "pom., mozz., brie, speck"},
            {name: "Alpina", priceN: "€8.50", priceM: "€17,00", ingredients: "pom., mozz., gorgonzola, misto bosco, pancetta"},
            {name: "Golosa", priceN: "€8.50", priceM: "€17,00", ingredients: "pom., mozz., patatine fritte, porchetta"},
            {name: "Barsanese", priceN: "€9,00", priceM: "€18,00", ingredients: "pom., mozz., asparagi, gorgonzola, speck"},
            {name: "Amalfitana", priceN: "€8.50", priceM: "€17,00", ingredients: "pom., mozz., zucchine, gamberetti, rucola"},
            {name: "Alpinese", priceN: "€8.50", priceM: "€17,00", ingredients: "pom., mozz., pancetta aff., radicchio al forno, gorgonzola"},
            {name: "Forte", priceN: "€9,00", priceM: "€18,00", ingredients: "mozz., patatine fritte, sal. picc., salsiccia, salsa rosa"},
            {name: "Valtellina", priceN: "€9,00", priceM: "€18,00", ingredients: "pom., mozz., bresaola, rucola, grana"},
            {name: "Gustosa", priceN: "€9,00", priceM: "€18,00", ingredients: "pom., mozz., gorgonzola, ricotta, speck"},
            {name: "Fenice", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., ricotta, spinaci, gorgonzola, porcini"},
            {name: "Della Casa", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., prosc. cotto, carciofi, wurstel, asparagi, uovo"},
            {name: "Preferita", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., scamorza, misto bosco, rucola, prosc. cotto, sal. picc."}
        ];
    } else if (type === "bufala") {
        title.innerText = "Pizze con Bufala";
        items = [
            {name: "Bufala", priceN: "€6.50", priceM: "€13,00", ingredients: "pom., mozz. di bufala (FDL)"},
            {name: "Bufala e Acciughe", priceN: "€7,00", priceM: "€14,00", ingredients: "pom., mozz. di bufala (FDL), acciughe"},
            {name: "Bufala e Salamino", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz. di bufala (FDL), salamino piccante"},
            {name: "Bufalalina", priceN: "€8,80", priceM: "€17,40", ingredients: "mozz. di bufala (FDL), pomodorini, pesto"},
            {name: "Pomodorini, Rucola e Grana", priceN: "€9,00", priceM: "€18,00", ingredients: "pom., mozz. di bufala (FDL), pomodorini, rucola, grana"},
            {name: "Bufala e Verdure", priceN: "€9,00", priceM: "€18,00", ingredients: "pom., mozz. di bufala (FDL), verdure di stagione"}
        ];
    } else if (type === "radicchio") {
        title.innerText = "Pizze con Radicchio al Forno";
        items = [
            {name: "Radicchio", priceN: "€6.50", priceM: "€13,00", ingredients: "pom., mozz., radicchio di treviso"},
            {name: "Radicchio e Gorgonzola", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz., radicchio, gorgonzola"},
            {name: "Radicchio e Salsiccia", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz., radicchio, salsiccia"},
            {name: "Radicchio e Salamino", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz., radicchio, sal. picc."},
            {name: "Radicchio e Affettati", priceN: "€9,00", priceM: "€18,00", ingredients: "pom., mozz., radicchio, affettati (crudo, speck, pancetta)"},
            {name: "Radicchio e Porcini", priceN: "€9,00", priceM: "€18,00", ingredients: "pom., mozz., radicchio, porcini"},
            {name: "Radicchio e Misto Bosco", priceN: "€9,00", priceM: "€18,00", ingredients: "pom., mozz., radicchio e funghi misti"}
        ];
    } else if (type === "affettati") {
        title.innerText = "Pizze con Affettati";
        items = [
            {name: "Crudo", priceN: "€8,00", priceM: "€16,00", ingredients: "pom., mozz. (FDL), prosciutto crudo"},
            {name: "Speck", priceN: "€8,00", priceM: "€16,00", ingredients: "pom., mozz. (FDL), speck"},
            {name: "Pancetta", priceN: "€8,00", priceM: "€16,00", ingredients: "pom., mozz. (FDL), pancetta"},
            {name: "Porchetta", priceN: "€9,00", priceM: "€18,00", ingredients: "pom., mozz. (FDL), porchetta"},
            {name: "Bresaola", priceN: "€9,00", priceM: "€18,00", ingredients: "pom., mozz. (FDL), bresaola"}
        ];
    } else if (type === "porchetta") {
        title.innerText = "Pizze con Porchetta";
        items = [
            {name: "Porchetta e Gorgonzola", priceN: "€9,00", priceM: "€18,00", ingredients: "pom., mozz., porchetta, gorgonzola"},
            {name: "Porchetta, Melanzane e Zucchine", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., porchetta, melanzane, zucchine"},
            {name: "Porchetta Porcini o Misto Bosco", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., porchetta, funghi"},
            {name: "Porchetta, Rucola e Grana", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., porchetta, rucola, grana"},
            {name: "Porchetta e 5 Formaggi", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., porchetta, 5 formaggi"},
            {name: "Porchetta e Verdure", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., porchetta, verdure"}
        ];
    } else if (type === "pancetta") {
        title.innerText = "Pizze con Pancetta";
        items = [
            {name: "Pancetta, Radicchio e Gorgonzola", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., pancetta, radicchio, gorgonzola"},
            {name: "Pancetta e Verdure", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., pancetta, verdure"},
            {name: "Pancetta, Salamino e Grana", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., pancetta, sal. picc., grana"},
            {name: "Pancetta, Peperoni, Funghi e Grana", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., pancetta, peperoni, funghi, grana"}
        ];
    } else if (type === "provola") {
        title.innerText = "Pizze con Provola Affumicata";
        items = [
            {name: "Provola e Salsiccia", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz., provola, salsiccia"},
            {name: "Provola, Melanzane, Zucchine", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz., provola, melanzane, zucchine"},
            {name: "6 Formaggi", priceN: "€9,00", priceM: "€18,00", ingredients: "pom., mozz., provola, 5 formaggi"},
            {name: "Provola, Funghi, Peperoni, Gorgonzola", priceN: "€8.50", priceM: "€17,00", ingredients: "pom., mozz., provola, funghi, peperoni, gorgonzola"}
        ];
    } else if (type === "special_condimenti") {
        title.innerText = "Ingredienti Gourmet";
        items = [
            {name: "Ricotta, Spinaci e Gorgonzola", priceN: "€8.50", priceM: "€17,00", ingredients: "pom., mozz., ricotta, spinaci, gorgonzola"},
            {name: "Pomodori Secchi e 5 Formaggi", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., pomodori secchi, 5 formaggi"},
            {name: "Gamberetti e Porcini", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., tartufo, porcini"},
            {name: "Cavallina (Sfilacci)", priceN: "€7.50", priceM: "€15,00", ingredients: "pom., mozz., sfilacci di cavallo"},
            {name: "Noci, Gorgonzola e Speck", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., noci, gorgonzola, speck"}
        ];
    } else if (type === "patatine") {
        title.innerText = "Pizze con Patatine Fritte";
        items = [
            {name: "Patatosa", priceN: "€6.80", priceM: "€13.60", ingredients: "pom., mozz., patatine fritte"},
            {name: "Patate e Wurstel", priceN: "€8", priceM: "€16", ingredients: "pom., mozz., patatine fritte, wurstel"},
            {name: "Patate e Salsiccia", priceN: "€8.50", priceM: "€16.50", ingredients: "pom., mozz., patatine fritte, salsiccia"},
            {name: "Patate e Salamino", priceN: "€8.50", priceM: "€16.50", ingredients: "pom., mozz., patatine fritte, salamino"},
            {name: "Patate e Pancetta", priceN: "€9.50", priceM: "€19,00", ingredients: "pom., mozz., patatine fritte, pancetta"}
        ];
    } else if (type === "bianche") {
        title.innerText = "Pizze Bianche";
        items = [
            {name: "5 Formaggi", priceN: "€8,00", priceM: "€16,00", ingredients: "mozz., gorgonzola, asiago, emmental, grana"},
            {name: "Mortadellona", priceN: "€11,00", priceM: "N/A", ingredients: "provola, pesto pistacchio, mortadella, granella"},
            {name: "Burratina", priceN: "€10.50", priceM: "N/A", ingredients: "mozz., prosciutto crudo, rucola, burrata"},
            {name: "Friarielli", priceN: "€10,00", priceM: "N/A", ingredients: "mozz., friarielli, salsiccia"},
            {name: "Emiliana", priceN: "€10,00", priceM: "N/A", ingredients: "mozz., spinaci, porchetta, porcini, grana"}
        ];
    } else if (type === "calzoni") {
        title.innerText = "Calzoni e Baguette";
        items = [
            {name: "Calzone Prosciutto e Funghi", priceN: "€8,00", priceM: "N/A", ingredients: "pom., mozz., prosc. cotto, funghi"},
            {name: "Calzone Ricotta e Spinaci", priceN: "€8.50", priceM: "N/A", ingredients: "pom., mozz., ricotta, spinaci, gorgonzola"},
            {name: "Baguette Prosciutto e Funghi", priceN: "€8,00", priceM: "N/A", ingredients: "mozz., prosciutto cotto, funghi"},
            {name: "Baguette Speck, Rucola e Brie", priceN: "€8.50", priceM: "N/A", ingredients: "mozz., speck, rucola, brie"}
        ];
    } else if (type === "frittura") {
        title.innerText = "Frittura e Kebab";
        items = [
            {name: "Crocchette di Patate ", priceN: "€4.50", priceM: "N/A", ingredients: "(8 pezzi)"},
            {name: "Chicken Nuggets ", priceN: "€5.50", priceM: "N/A", ingredients: "(6 pezzi)"},
            {name: "Mozzerella Sticks ", priceN: "€5.50", priceM: "N/A", ingredients: "(6 pezzi)"},
            {name: "Onion Rings ", priceN: "€5.50", priceM: "N/A", ingredients: "(6 pezzi)"},
            {name: "Patatine Dippers", priceN: "€4.5", priceM: "€8", ingredients: "Normale : 200g , Maxi : 400g"},
            {name: "Patatine Fritte", priceN: "€3", priceM: "€5", ingredients: "Normale : 200g , Maxi : 400g"},
        ];
    }else if (type === "Kebab") {
    title.innerText = "Kebab";
    items = [
        
        {name: "Pizza Kebab e patatine", priceN: "€8.50", priceM: "€17,00", ingredients: "mozz., carne kebab, patatine fritte , salse"},
    ];
    }   
else if (type === "Drinks / Bevande") {
    title.innerText = "Drinks / Bevande";
    items = [
        {name: "Acqua Naturale / Frizzante (0.5L)", priceN: "€1", priceM: "N/A", ingredients: "Bottiglia 50cl"},
        {name: "Coca Cola", priceN: "€2.50", priceM: "N/A", ingredients: "Bibite in Lattina (33cl)"},
        {name: "Coca Cola Zero", priceN: "€2.50", priceM: "N/A", ingredients: "Bibite in Lattina (33cl)"},
        {name: "Fanta", priceN: "€2.50", priceM: "N/A", ingredients: "Bibite in Lattina (33cl) "},
        {name: "Sprite", priceN: "€2.50", priceM: "N/A", ingredients: "Bibite in Lattina (33cl) "},
        {name: " Estathé", priceN: "€2.50", priceM: "N/A", ingredients: "Bibite in Lattina (33cl) "},
        {name: "Birra in Bottiglia  (33cl)", priceN: "€3,00", priceM: "N/A", ingredients: "Birre varie"},
        {name: "Moretti", priceN: "€3.50", priceM: "N/A", ingredients: "Birra in Bottiglia (66cl)"},
        {name: "Peroni", priceN: "€3.50", priceM: "N/A", ingredients: " Birra in Bottiglia (66cl)"},
    ];
}
   
    


    
    /* ===== RENDER ===== */
    
 
        
  



    items.forEach(pizza => {
        const li = document.createElement("li");
        
        // Check if the Maxi price is valid (not N/A and not empty)
        const hasMaxi = pizza.priceM && pizza.priceM !== "N/A";
    
        li.innerHTML = `
            <div class="pizza-row">
                <strong>${pizza.name}</strong>
            </div>
            
            <div class="pizza-ingredients">${pizza.ingredients}</div>
            
            <div style="display:flex; gap:10px; margin-top:10px;">
                <button class="add-btn" onclick="addToCart('${pizza.name}','${pizza.priceN}','Normale')">
                    Normale ${pizza.priceN}
                </button>
    
                ${hasMaxi ? `
                <button class="add-btn" onclick="addToCart('${pizza.name}','${pizza.priceM}','Maxi')">
                    Maxi ${pizza.priceM}
                </button>` : ''}
            </div>
        `;
        
        list.appendChild(li);
    });
    
    panel.classList.add("active");


}

    function closeMenu() {
        const panel = document.getElementById('menu-panel');
        panel.style.display = 'none'; 
        // If you use a class for animations, make sure it also sets display: none at the end
    }



/* ===================================================== */
/* SHOPPING CART SYSTEM                                  */
/* ===================================================== */

let cart=[]
let total=0


/* Add pizza to cart */

function addToCart(name, normale, size){

    let numericnormale = parseFloat(normale.replace("€",""))
    
    let fullName = name + " (" + size + ")"
    
    let existing = cart.find(item => item.name === fullName)
    
    if(existing){
    existing.qty += 1
    }else{
    cart.push({
    name: fullName,
    normale: numericnormale,
    qty: 1
    })
    }
    
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

total+=item.normale*item.qty

let li=document.createElement("li")

li.innerHTML=`

<div class="cart-row">

<span class="cart-name">${item.name} </span>

<div class="cart-controls">

<button onclick="changeQty(${index},-1)">−</button>

<span>${item.qty}</span>

<button onclick="changeQty(${index},1)">+</button>

</div>

<span>€${(item.normale*item.qty).toFixed(2)}</span>

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
summaryHTML+=`${item.qty}x ${item.name} - €${(item.normale*item.qty).toFixed(2)}<br>`
total+=item.normale*item.qty
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


    /* ================= 1. VALIDATION CHECK (THE NEW PART) ================= */
    
    const name = document.getElementById("customer-name").value.trim();
    const phone = document.getElementById("customer-phone").value.trim();
    const orderType = document.getElementById("order-type").value;
    const time = document.getElementById("order-time").value;
    const address = document.getElementById("customer-address").value.trim();

    // Check if cart is empty
    if (cart.length === 0) {
        alert("Il carrello è vuoto! / Your cart is empty!");
        return; // Stops the function
    }

    // Check basic fields
    if (!name || !phone || !time) {
        alert("Per favore inserisci Nome,Numero di telefono e Orario. / Please enter name, phone number, and time.");
        return; // Stops the function
    }

    // If it's delivery, check for address
    if (orderType === "delivery" && !address) {
        alert("Per favore inserisci l'indirizzo per la consegna. / Please enter the delivery address.");
        return; // Stops the function
    }


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
    message += `• ${item.qty}x ${item.name} - €${(item.normale * item.qty).toFixed(2)}%0A`;
    total += item.normale * item.qty;
    });
    
    message += `%0A*${t.total}: €${total.toFixed(2)}*%0A%0A`;
    
    /* ================= CUSTOMER ================= */
      /*
    const orderType = document.getElementById("order-type").value;
    const time = document.getElementById("order-time").value;
    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("customer-phone").value;
    const address = document.getElementById("customer-address").value;
    const doorbell = document.getElementById("customer-doorbell").value;
    const note = document.getElementById("order-note").value;
    */
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
