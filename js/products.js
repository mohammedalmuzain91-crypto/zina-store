/* ===== بيانات المتجر – عدّل من هنا ===== */
const STORE = {
  phone: "201067209006",            // رقم واتساب بالصيغة الدولية بدون + أو أصفار
  phoneDisplay: "+20 10 67209006",
  facebook: "https://www.facebook.com/share/1JPLHjktf2/",
  currency: "ج.م"
};

/* لتحديد السعر اكتب رقمًا مثل: price: 850
   وإذا تركته null سيظهر "السعر عند الطلب".
   categories: sneakers | rings | necklaces | watches */
const PRODUCTS = [
  { id: "ZS-03", category: "sneakers", name: "كوتشي أبيض نص ساق بتفاصيل رمادية", price: null, image: "images/p03.webp" },
  { id: "ZS-04", category: "sneakers", name: "كوتشي جينز أزرق وأبيض", price: null, image: "images/p04.webp" },
  { id: "ZS-11", category: "sneakers", name: "كوتشي كحلي وأبيض", price: null, image: "images/p11.webp" },
  { id: "ZS-15", category: "sneakers", name: "كوتشي أبيض كامل", price: null, image: "images/p15.webp" },
  { id: "ZS-17", category: "sneakers", name: "كوتشي بوردو وأبيض", price: null, image: "images/p17.webp" },
  { id: "ZS-20", category: "sneakers", name: "كوتشي أسود برباط أبيض", price: null, image: "images/p20.webp" },
  { id: "ZS-25", category: "sneakers", name: "كوتشي رمادي وأبيض", price: null, image: "images/p25.webp" },
  { id: "ZS-26", category: "sneakers", name: "كوتشي أبيض كلاسيك", price: null, image: "images/p26.webp" },
  { id: "ZS-27", category: "sneakers", name: "كوتشي أبيض نص ساق", price: null, image: "images/p27.webp" },
  { id: "ZS-28", category: "sneakers", name: "كوتشي أسود وأبيض وأحمر", price: null, image: "images/p28.webp" },
  { id: "ZS-29", category: "sneakers", name: "كوتشي أسود وأبيض", price: null, image: "images/p29.webp" },

  { id: "ZS-02", category: "rings", name: "خاتمان رجالي بحجر أزرق (لون فضي)", price: null, image: "images/p02.webp" },
  { id: "ZS-06", category: "rings", name: "طقم دبل ذهبي اللون بنقش", price: null, image: "images/p06.webp" },
  { id: "ZS-08", category: "rings", name: "طقم دبل ذهبي اللون بفص لامع", price: null, image: "images/p08.webp" },
  { id: "ZS-10", category: "rings", name: "خاتم رجالي بحجر أزرق ونقوش", price: null, image: "images/p10.webp" },
  { id: "ZS-13", category: "rings", name: "طقم دبل بفص لامع مع العلبة", price: null, image: "images/p13.webp" },
  { id: "ZS-16", category: "rings", name: "خاتم رجالي بحجر أسود مستطيل", price: null, image: "images/p16.webp" },
  { id: "ZS-18", category: "rings", name: "خاتم سوليتير ذهبي اللون", price: null, image: "images/p18.webp" },
  { id: "ZS-19", category: "rings", name: "دبلة فضية اللون بنقشة إغريقية", price: null, image: "images/p19.webp" },
  { id: "ZS-21", category: "rings", name: "خاتم رجالي بحجر أسود بيضاوي", price: null, image: "images/p21.webp" },
  { id: "ZS-24", category: "rings", name: "خاتم رجالي بحجر أسود ونقوش", price: null, image: "images/p24.webp" },

  { id: "ZS-01", category: "necklaces", name: "سلاسل ببدلاية بجعة (عدة ألوان)", price: null, image: "images/p01.webp" },
  { id: "ZS-05", category: "necklaces", name: "تشكيلة سلاسل ببدلايات متنوعة", price: null, image: "images/p05.webp" },
  { id: "ZS-12", category: "necklaces", name: "سلسلة فراشة فضية اللون", price: null, image: "images/p12.webp" },
  { id: "ZS-14", category: "necklaces", name: "سلسلة ببدلاية قلب", price: null, image: "images/p14.webp" },
  { id: "ZS-22", category: "necklaces", name: "سلسلة ببدلاية فيونكة", price: null, image: "images/p22.webp" },

  { id: "ZS-07", category: "watches", name: "ساعة رجالي كرونوغراف مع العلبة", price: null, image: "images/p07.webp" },
  { id: "ZS-09", category: "watches", name: "ساعة رجالي بميناء فضي", price: null, image: "images/p09.webp" },
  { id: "ZS-23", category: "watches", name: "ساعة رجالي بميناء أسود", price: null, image: "images/p23.webp" }
];
