(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };
  var cat = "all", query = "", bag = [];
  try { bag = JSON.parse(localStorage.getItem("zs_bag") || "[]"); } catch (e) { bag = []; }

  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return "&#" + c.charCodeAt(0) + ";"; }); };
  var wa = function (t) { return "https://wa.me/" + STORE.phone + "?text=" + encodeURIComponent(t); };
  var find = function (id) { return PRODUCTS.filter(function (p) { return p.id === id; })[0]; };
  var price = function (p) { return p.price ? p.price.toLocaleString("en-US") + " " + STORE.currency : "Price on request"; };
  var card = function (p) {
    return '<li class="card"><div class="ph"><img src="' + p.image + '" alt="' + esc(p.name) + '" loading="lazy">' +
      '<button class="add" type="button" data-add="' + p.id + '">Quick add</button></div>' +
      '<h3>' + esc(p.name) + '</h3><p>' + price(p) + '</p></li>';
  };

  function renderShop() {
    var q = query.toLowerCase();
    var list = PRODUCTS.filter(function (p) {
      return (cat === "all" || p.category === cat) && (!q || (p.name + " " + p.id + " " + CATS[p.category]).toLowerCase().indexOf(q) > -1);
    });
    $("#grid").innerHTML = list.map(card).join("");
    $("#none").hidden = list.length > 0;
    Array.prototype.forEach.call($("#filters").children, function (b) { b.setAttribute("aria-pressed", String(b.dataset.cat === cat)); });
  }
  function row(ids, el) { $(el).innerHTML = ids.map(find).filter(Boolean).map(card).join(""); }

  $("#filters").innerHTML = ['<button type="button" class="chip" data-cat="all">All</button>'].concat(
    Object.keys(CATS).map(function (k) { return '<button type="button" class="chip" data-cat="' + k + '">' + CATS[k] + '</button>'; })).join("");
  $("#filters").addEventListener("click", function (e) { var b = e.target.closest(".chip"); if (b) { cat = b.dataset.cat; renderShop(); } });
  $("#q").addEventListener("input", function (e) { query = e.target.value.trim(); renderShop(); });
  $("#searchBtn").addEventListener("click", function () { $("#shop").scrollIntoView({ behavior: "smooth" }); setTimeout(function () { $("#q").focus(); }, 500); });
  Array.prototype.forEach.call(document.querySelectorAll("a[data-cat]"), function (a) {
    a.addEventListener("click", function () { cat = a.dataset.cat; query = ""; $("#q").value = ""; renderShop(); });
  });

  /* Bag */
  function drawBag() {
    var n = bag.reduce(function (s, i) { return s + i.qty; }, 0);
    $("#bagCount").textContent = n;
    $("#bagEmpty").hidden = n > 0;
    $("#bagOrder").hidden = n === 0;
    $("#bagList").innerHTML = bag.map(function (i) {
      var p = find(i.id); if (!p) return "";
      return '<li><img src="' + p.image + '" alt=""><div><b>' + esc(p.name) + '</b><span>' + p.id + ' · ' + price(p) + '</span>' +
        '<span class="q"><button type="button" data-dec="' + p.id + '" aria-label="Decrease">−</button>' + i.qty +
        '<button type="button" data-inc="' + p.id + '" aria-label="Increase">+</button></span></div></li>';
    }).join("");
    var lines = bag.map(function (i) { var p = find(i.id); return p ? "- " + i.qty + " x " + p.name + " (" + p.id + ")" : ""; }).join("\n");
    $("#bagOrder").href = wa("Hello ZinaStore, I'd like to order:\n" + lines);
    try { localStorage.setItem("zs_bag", JSON.stringify(bag)); } catch (e) { }
  }
  function change(id, d) {
    var it = bag.filter(function (i) { return i.id === id; })[0];
    if (!it && d > 0) bag.push({ id: id, qty: 1 }); else if (it) { it.qty += d; bag = bag.filter(function (i) { return i.qty > 0; }); }
    drawBag();
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-add]"), i = e.target.closest("[data-inc]"), d = e.target.closest("[data-dec]");
    if (a) { change(a.dataset.add, 1); $("#bag").showModal(); }
    if (i) change(i.dataset.inc, 1);
    if (d) change(d.dataset.dec, -1);
  });
  $("#bagBtn").addEventListener("click", function () { $("#bag").showModal(); });
  $("#bagClose").addEventListener("click", function () { $("#bag").close(); });
  $("#bag").addEventListener("click", function (e) { if (e.target === e.currentTarget) e.currentTarget.close(); });

  /* Header turns solid after the hero */
  var top = $("#top");
  function onScroll() { top.classList.toggle("solid", window.scrollY > window.innerHeight * 0.6); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* Hero video: plays if hero.mp4 exists; otherwise the poster stays and a placeholder label shows */
  var v = $("#heroVideo"), still = window.matchMedia("(prefers-reduced-motion: reduce)").matches || (navigator.connection && navigator.connection.saveData);
  v.querySelector("source").addEventListener("error", function () { $("#vph").hidden = false; });
  if (!still) { var pr = v.play(); if (pr && pr.catch) pr.catch(function () { }); }

  /* Links and text */
  Array.prototype.forEach.call(document.querySelectorAll("[data-wa]"), function (a) { a.href = wa("Hello ZinaStore, I have a question about your products."); });
  $("[data-wa-join]").href = wa("Hello ZinaStore, please keep me updated about new pieces.");
  Array.prototype.forEach.call(document.querySelectorAll("[data-fb]"), function (a) { a.href = STORE.facebook; });
  $("#annPhone").textContent = $("#ftPhone").textContent = STORE.phoneDisplay;
  $("#year").textContent = new Date().getFullYear();

  row(NEW_ARRIVALS, "#newGrid");
  $("#best").hidden = BEST_SELLERS.length === 0;
  if (BEST_SELLERS.length) row(BEST_SELLERS, "#bestGrid");
  renderShop(); drawBag();
})();
