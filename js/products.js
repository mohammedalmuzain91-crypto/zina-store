/* ===== ZinaStore data – edit here ===== */
const STORE = {
    phone: "201067209006",               // WhatsApp number, international format, no + or zeros
    phoneDisplay: "+20 10 67209006",
    facebook: "https://www.facebook.com/share/1JPLHjktf2/",
    currency: "EGP"
};

/* Prices: add a line like  "ZS-09": 1500  — products without a price show "Price on request". */
const PRICES = {
    // "ZS-09": 1500,
};

/* Product codes shown in the "New Arrivals" and "Best Sellers" rows. Edit freely.
   Best Sellers stays hidden until you add codes (we have no sales data to claim it). */
const NEW_ARRIVALS = ["ZS-09", "ZS-21", "ZS-14", "ZS-28"];
const BEST_SELLERS = [];

const CATS = { watches: "Watches", rings: "Rings", necklaces: "Necklaces", sneakers: "Sneakers" };

/* [code, category, name, image file] */
const PRODUCTS = [
    ["ZS-07", "watches", "Men's chronograph watch, boxed", "p07"],
    ["ZS-09", "watches", "Men's watch, silver dial", "p09"],
    ["ZS-23", "watches", "Men's watch, black dial", "p23"],
    ["ZS-02", "rings", "Men's rings with blue stone, silver tone", "p02"],
    ["ZS-06", "rings", "Engraved wedding bands, gold tone", "p06"],
    ["ZS-08", "rings", "Wedding set with stone, gold tone", "p08"],
    ["ZS-10", "rings", "Men's ring, blue stone and engraving", "p10"],
    ["ZS-13", "rings", "Wedding set with stone, boxed", "p13"],
    ["ZS-16", "rings", "Men's ring, rectangular black stone", "p16"],
    ["ZS-18", "rings", "Solitaire ring, gold tone", "p18"],
    ["ZS-19", "rings", "Band with Greek key pattern, silver tone", "p19"],
    ["ZS-21", "rings", "Men's ring, oval black stone", "p21"],
    ["ZS-24", "rings", "Men's ring, black stone and engraving", "p24"],
    ["ZS-01", "necklaces", "Swan pendant necklaces, assorted colours", "p01"],
    ["ZS-05", "necklaces", "Pendant necklace collection", "p05"],
    ["ZS-12", "necklaces", "Butterfly necklace, silver tone", "p12"],
    ["ZS-14", "necklaces", "Heart pendant necklace", "p14"],
    ["ZS-22", "necklaces", "Bow pendant necklace", "p22"],
    ["ZS-03", "sneakers", "White high-top sneakers, grey details", "p03"],
    ["ZS-04", "sneakers", "Denim-print blue and white sneakers", "p04"],
    ["ZS-11", "sneakers", "Navy and white low sneakers", "p11"],
    ["ZS-15", "sneakers", "All-white low sneakers", "p15"],
    ["ZS-17", "sneakers", "Burgundy and white sneakers", "p17"],
    ["ZS-20", "sneakers", "Black sneakers, white laces", "p20"],
    ["ZS-25", "sneakers", "Grey and white sneakers", "p25"],
    ["ZS-26", "sneakers", "Classic white low sneakers", "p26"],
    ["ZS-27", "sneakers", "White mid-top sneakers", "p27"],
    ["ZS-28", "sneakers", "Black, white and red sneakers", "p28"],
    ["ZS-29", "sneakers", "Black and white low sneakers", "p29"]
].map(([id, category, name, f]) => ({ id, category, name, image: "images/" + f + ".webp", price: PRICES[id] || null }));
