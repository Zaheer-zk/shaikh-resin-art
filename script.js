/* =========================================================
   SHAIKH RESIN ART — interactions
   ========================================================= */

const WHATSAPP = "918739830065";

/* ---------- Product catalogue ---------- */
const PRODUCTS = [
  {
    id: "kc-a", cat: "keychains", catLabel: "Keychain",
    title: 'Letter "A" Keychain', price: "₹150",
    img: "assets/img/keychain-letter-a.jpeg",
    desc: "Initial letter set with real dried rose petals & gold flakes.",
    feats: ["Any letter A–Z", "Real preserved petals", "Gold-leaf accents", "Steel keyring"]
  },
  {
    id: "kc-g", cat: "keychains", catLabel: "Keychain",
    title: 'Letter "G" Keychain', price: "₹150",
    img: "assets/img/keychain-letter-g.jpeg",
    desc: "Clear letter filled with deep-red roses and shimmering gold.",
    feats: ["Any letter A–Z", "Rose & gold fill", "Glossy clear finish", "Gold keyring"]
  },
  {
    id: "kc-m", cat: "keychains", catLabel: "Keychain",
    title: 'Letter "M" Keychain', price: "₹150",
    img: "assets/img/keychain-letter-m.jpeg",
    desc: "Soft pink letter with golden butterflies and silver glitter.",
    feats: ["Any letter A–Z", "Butterfly inlay", "Pastel + glitter", "Gold keyring"]
  },
  {
    id: "kc-t", cat: "keychains", catLabel: "Keychain",
    title: 'Letter "T" Keychain', price: "₹150",
    img: "assets/img/keychain-letter-t.jpeg",
    desc: "Crystal-clear letter packed with dancing gold flakes.",
    feats: ["Any letter A–Z", "Gold-flake fill", "Crystal clear resin", "Gold keyring"]
  },
  {
    id: "kc-feather", cat: "keychains", catLabel: "Keychain",
    title: "Blue Calligraphy Feather Keychain", price: "₹200",
    img: "assets/img/keychain-feather-blue.jpeg",
    desc: "Feather-shaped charm with gold Arabic calligraphy and silver leaf.",
    feats: ["Arabic calligraphy", "Silver-leaf detail", "Feather shape", "Custom verse"]
  },

  {
    id: "np-za", cat: "nameplates", catLabel: "Couple Nameplate",
    title: '"Z ❤ A" Couple Nameplate', price: "₹600",
    img: "assets/img/couple-nameplate-za.jpeg",
    desc: "Standing initials with a heart on a marbled base — a perfect couple gift.",
    feats: ["Your initials", "Silver-leaf & butterfly", "Marbled stand", "Anniversary gift"]
  },
  {
    id: "np-ys", cat: "nameplates", catLabel: "Couple Nameplate",
    title: '"Y ❤ S" Couple Nameplate', price: "₹600",
    img: "assets/img/couple-nameplate-ys.jpeg",
    desc: "Ruby-red initials with gold flakes on a glossy display tray.",
    feats: ["Your initials", "Red & gold fill", "Glossy base tray", "Custom colours"]
  },

  {
    id: "cal-feather", cat: "calligraphy", catLabel: "Islamic Calligraphy",
    title: "Calligraphy Feather (Black & Gold)", price: "₹450",
    img: "assets/img/calligraphy-feather-black.jpeg",
    desc: "Elegant black feather with raised gold Arabic calligraphy.",
    feats: ["Gold calligraphy", "Black resin", "Custom verse", "Decor piece"]
  },
  {
    id: "cal-plaque", cat: "calligraphy", catLabel: "Islamic Calligraphy",
    title: "Ayatul Kursi Plaque (Black & Gold)", price: "₹500",
    img: "assets/img/calligraphy-plaque-black-gold.jpeg",
    desc: "Scalloped standing plaque with gold leaf and centred calligraphy.",
    feats: ["Gold-leaf flakes", "Free-standing", "Scalloped edge", "Gift-ready"]
  },
  {
    id: "cal-pair", cat: "calligraphy", catLabel: "Islamic Calligraphy",
    title: "Calligraphy Plaque Set", price: "₹900",
    img: "assets/img/calligraphy-plaques-pair.jpeg",
    desc: "A matched pair — black & silver and white & gold standing plaques.",
    feats: ["Set of two", "Silver & gold leaf", "Matched stands", "Home decor"]
  },
  {
    id: "cal-round", cat: "calligraphy", catLabel: "Islamic Calligraphy",
    title: "Round Calligraphy Frame (Blue)", price: "₹550",
    img: "assets/img/calligraphy-round-blue.jpeg",
    desc: "Ocean-blue disc with gold calligraphy and silver-leaf shimmer.",
    feats: ["Gold calligraphy", "Blue marble effect", "Silver leaf", "Wall / shelf piece"]
  },

  {
    id: "jw-locket", cat: "jewellery", catLabel: "Necklace",
    title: "Heart Locket Necklace", price: "₹350",
    img: "assets/img/necklace-heart-locket.jpeg",
    desc: "Gold-framed heart locket filled with red petals and gold flakes.",
    feats: ["Gold-tone chain", "Heart locket", "Petal & gold fill", "Adjustable length"]
  },
  {
    id: "jw-name", cat: "jewellery", catLabel: "Necklace",
    title: "Personalized Name Necklace", price: "₹400",
    img: "assets/img/necklace-name-aaru.jpeg",
    desc: "Heart pendant with your name in gold, finished with pearl drops.",
    feats: ["Your name in gold", "Pearl accents", "Rose & gold fill", "Gold-tone chain"]
  },
  {
    id: "jw-ring1", cat: "jewellery", catLabel: "Ring",
    title: "Resin Stone Ring", price: "₹120",
    img: "assets/img/ring-resin-purple.jpeg",
    desc: "Hand-poured resin 'gemstone' set on an adjustable band.",
    feats: ["Adjustable band", "Resin gemstone", "Custom colour", "Lightweight"]
  },
  {
    id: "jw-ring2", cat: "jewellery", catLabel: "Ring",
    title: "Gold-Band Resin Ring", price: "₹180",
    img: "assets/img/ring-gold-purple.jpeg",
    desc: "Dainty gold band with a shimmering round resin stone.",
    feats: ["Gold-tone band", "Round resin stone", "Custom colour", "Everyday wear"]
  },

  {
    id: "pen-rose", cat: "pens", catLabel: "Resin Pen",
    title: "Floral Resin Pen", price: "₹200",
    img: "assets/img/pen-rose-gold.jpeg",
    desc: "Working pen with dried roses and gold flakes suspended inside.",
    feats: ["Refillable pen", "Rose & gold fill", "Smooth grip", "Gift boxed"]
  },
  {
    id: "pen-black", cat: "pens", catLabel: "Resin Pen",
    title: "Midnight Resin Pen", price: "₹200",
    img: "assets/img/pen-black-silver.jpeg",
    desc: "Sleek black & clear pen with drifting silver leaf.",
    feats: ["Refillable pen", "Black & silver", "Glossy finish", "Gift boxed"]
  },

  {
    id: "kp-block", cat: "keepsakes", catLabel: "Keepsake",
    title: "Rose Preservation Block", price: "₹800",
    img: "assets/img/keepsake-rose-blocks.jpeg",
    desc: "Your special rose & date preserved forever in a clear resin block.",
    feats: ["Preserve your flower", "Custom date engraved", "Pearls & gold leaf", "Anniversary keepsake"]
  },
  {
    id: "kp-mad", cat: "keepsakes", catLabel: "Keepsake",
    title: "Heart Keepsake with Name", price: "₹650",
    img: "assets/img/keepsake-heart-mad.jpeg",
    desc: "Heart-shaped block with a preserved rose and your name in script.",
    feats: ["Preserved rose", "Name in script", "Gold flakes", "Heart shape"]
  },
  {
    id: "kp-photo", cat: "keepsakes", catLabel: "Keepsake",
    title: "Photo Memory Heart", price: "₹700",
    img: "assets/img/keepsake-photo-heart.jpeg",
    desc: "A photo, a date and petals sealed in a gold-edged resin heart.",
    feats: ["Your photo inside", "Custom date", "Petals & gold", "Display keepsake"]
  }
];

/* ---------- Render grid ---------- */
const grid = document.getElementById("grid");

function orderLink(p){
  const msg = `Hi Shaikh Resin Art! I'm interested in the "${p.title}" (${p.price}). Can you share details?`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

function cardHTML(p){
  return `
  <article class="card" data-cat="${p.cat}" data-id="${p.id}" tabindex="0">
    <div class="card-media">
      <span class="card-cat">${p.catLabel}</span>
      <img src="${p.img}" alt="${p.title}" loading="lazy" />
    </div>
    <div class="card-body">
      <h3 class="card-title">${p.title}</h3>
      <p class="card-desc">${p.desc}</p>
      <div class="card-foot">
        <span class="tag">${p.price}</span>
        <span class="card-cta">View details →</span>
      </div>
    </div>
  </article>`;
}

function render(list){
  grid.innerHTML = list.map(cardHTML).join("");
}
render(PRODUCTS);

/* ---------- Filters ---------- */
const filters = document.getElementById("filters");
filters.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  filters.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
  btn.classList.add("is-active");
  const f = btn.dataset.filter;
  render(f === "all" ? PRODUCTS : PRODUCTS.filter(p => p.cat === f));
});

/* ---------- Product detail modal ---------- */
const modal   = document.getElementById("modal");
const mImg     = document.getElementById("mImg");
const mCat     = document.getElementById("mCat");
const mTitle   = document.getElementById("mTitle");
const mPrice   = document.getElementById("mPrice");
const mDesc    = document.getElementById("mDesc");
const mFeats   = document.getElementById("mFeats");
const mOrder   = document.getElementById("mOrder");

function openModal(p){
  mImg.src = p.img; mImg.alt = p.title;
  mCat.textContent = p.catLabel;
  mTitle.textContent = p.title;
  mPrice.textContent = p.price;
  mDesc.textContent = p.desc;
  mFeats.innerHTML = p.feats.map(f => `<li>${f}</li>`).join("");
  mOrder.href = orderLink(p);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

grid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const p = PRODUCTS.find(x => x.id === card.dataset.id);
  if (p) openModal(p);
});
grid.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest(".card");
  if (!card) return;
  e.preventDefault();
  const p = PRODUCTS.find(x => x.id === card.dataset.id);
  if (p) openModal(p);
});
modal.addEventListener("click", (e) => { if (e.target.dataset.close !== undefined) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

/* ---------- Mobile nav ---------- */
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.addEventListener("click", (e) => { if (e.target.tagName === "A") nav.classList.remove("open"); });

/* ---------- Contact form → WhatsApp ---------- */
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name  = document.getElementById("name").value.trim();
  const order = document.getElementById("order").value.trim();
  if (!name || !order){
    document.getElementById("formHint").textContent = "Please add your name and what you'd like.";
    return;
  }
  const msg = `Hi Shaikh Resin Art! 👋\nName: ${name}\nMy order/enquiry: ${order}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
});

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
