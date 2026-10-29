(function () {
  "use strict";
  var CATS = { all: "الكل", sneakers: "كوتشيات", rings: "خواتم", necklaces: "سلاسل", watches: "ساعات" };
  var grid = document.getElementById("grid");
  var filters = document.getElementById("filters");
  var dlg = document.getElementById("viewer");
  var current = "all";

  function wa(text) { return "https://wa.me/" + STORE.phone + "?text=" + encodeURIComponent(text); }
  function order(p) { return wa("السلام عليكم زينه ستور، عايز أطلب: " + p.name + " (كود " + p.id + ")"); }
  function priceText(p) { return p.price ? p.price + " " + STORE.currency : "السعر عند الطلب"; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return "&#" + c.charCodeAt(0) + ";"; }); }

  function render() {
    var list = PRODUCTS.filter(function (p) { return current === "all" || p.category === current; });
    grid.innerHTML = list.map(function (p) {
      var n = esc(p.name);
      return '<li class="card"><button class="ph" type="button" data-id="' + p.id + '" aria-label="تكبير الصورة: ' + n + '">' +
        '<img src="' + p.image + '" alt="' + n + '" loading="lazy"></button>' +
        '<div class="info"><h3>' + n + '</h3><p class="price">' + priceText(p) + '</p>' +
        '<a class="btn btn-dark" href="' + order(p) + '" target="_blank" rel="noopener">اطلب عبر واتساب</a></div></li>';
    }).join("");
    Array.prototype.forEach.call(filters.children, function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.cat === current));
    });
  }

  filters.innerHTML = Object.keys(CATS).map(function (k) {
    var c = k === "all" ? PRODUCTS.length : PRODUCTS.filter(function (p) { return p.category === k; }).length;
    return '<button class="chip" type="button" data-cat="' + k + '">' + CATS[k] + " (" + c + ")</button>";
  }).join("");
  filters.addEventListener("click", function (e) {
    var b = e.target.closest(".chip");
    if (b) { current = b.dataset.cat; render(); }
  });

  grid.addEventListener("click", function (e) {
    var b = e.target.closest(".ph");
    if (!b) return;
    var p = PRODUCTS.filter(function (x) { return x.id === b.dataset.id; })[0];
    document.getElementById("vImg").src = p.image;
    document.getElementById("vImg").alt = p.name;
    document.getElementById("vName").textContent = p.name;
    document.getElementById("vOrder").href = order(p);
    dlg.showModal();
  });
  document.getElementById("vClose").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });

  Array.prototype.forEach.call(document.querySelectorAll("[data-wa]"), function (a) {
    a.href = wa("السلام عليكم زينه ستور، عايز أستفسر عن المنتجات.");
  });
  Array.prototype.forEach.call(document.querySelectorAll("[data-fb]"), function (a) { a.href = STORE.facebook; });
  document.getElementById("phone").textContent = STORE.phoneDisplay;
  document.getElementById("year").textContent = new Date().getFullYear();
  render();
})();
