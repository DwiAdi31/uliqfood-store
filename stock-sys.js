// ==========================================
// CONFIGURATION
// ==========================================
const API_URL = 'https://epiphenomenal-kieth-vitalistically.ngrok-free.dev/uliq_system/api.php?action=get_integration_data';

// Pastikan URL di atas benar. Jika ngrok mati/restart, URL harus diganti!


// ==========================================
// DATA PRODUK
// ==========================================
const products = [
  {
    numericId: 1,
    id: '1',
    name: 'Labu Jipang Muria 6pcs',
    img: 'img/labu-jipang-muria.png',
    basePrice: 20000,
    description: 'packing plastik isi 6pcs<br>Cemilan sehat khas Muria yang terbuat dari sayur labu siem muria dan gula jagung.',
    variants: [
      { id: 8, name: 'Originial 6pcs', price: 20000 },
      { id: 9, name: 'Kayu Manis 6pcs', price: 20000 },
      { id: 10, name: 'Melon 6pcs', price: 20000 },
      { id: 11, name: 'Leci 6pcs', price: 20000 },
      { id: 40, name: 'Campur 6pcs', price: 20000 }
    ]
  },
  {
    numericId: 2,
    id: '2',
    name: 'Labu Jipang Muria 36pcs',
    img: 'img/labu-jipang-muria.png',
    basePrice: 70000,
    description: '1 karton isi 36pcs<br>Cemilan sehat khas Muria.',
    variants: [
      { id: 4, name: 'Original 36pcs', price: 70000 },
      { id: 5, name: 'Kayu Manis 36pcs', price: 70000 },
      { id: 6, name: 'Melon 36pcs', price: 70000 },
      { id: 7, name: 'Leci 36pcs', price: 70000 }
    ]
  },
  {
    numericId: 3,
    id: '3',
    name: 'Labu Jipang Betawi 6pcs',
    img: 'img/labu-jipang-betawi-6pcs.png',
    basePrice: 15000,
    description: 'Packing plastik isi 6pcs<br>Cemilan sehat khas Betawi.',
    variants: [
      { id: 16, name: 'Originial 6pcs', price: 15000 },
      { id: 17, name: 'Kayu Manis 6pcs', price: 15000 },
      { id: 18, name: 'Melon 6pcs', price: 15000 },
      { id: 19, name: 'Leci 6pcs', price: 15000 },
      { id: 44, name: 'Campur 6pcs', price: 15000 }
    ]
  },
  {
    numericId: 4,
    id: '4',
    name: 'Labu Jipang Betawi 36pcs',
    img: 'img/labu-jipang-betawi.png',
    basePrice: 58000,
    description: '1 karton isi 36 pcs.',
    variants: [
      { id: 12, name: 'Original 36pcs', price: 58000 },
      { id: 13, name: 'Kayu Manis 36pcs', price: 58000 },
      { id: 14, name: 'Melon 36pcs', price: 58000 },
      { id: 15, name: 'Leci 36pcs', price: 58000 }
    ]
  },
  {
    numericId: 5,
    id: '5',
    name: 'Tekun (Teh Kulit Nanas)',
    img: 'img/tekun.png',
    basePrice: 45000,
    description: '1 karton isi 40pcs 120ml.',
    variants: [
      { id: 1, name: 'Kayu Manis', price: 45000 },
      { id: 2, name: 'Original', price: 45000 },
      { id: 3, name: 'Sereh', price: 45000 }
    ]
  },
  {
    numericId: 6,
    id: '6',
    name: 'Tekun Celup',
    img: 'img/tekun-celup.png',
    basePrice: 45000,
    description: 'per pcs 12gram isi 12pcs.',
    variants: [
      { id: 20, name: 'Kayu Manis', price: 45000 },
      { id: 21, name: 'Original', price: 45000 },
      { id: 22, name: 'Sereh', price: 45000 }
    ]
  },
  {
    numericId: 7,
    id: '7',
    name: 'Jarelang',
    img: 'img/jarelang.png',
    basePrice: 55000,
    description: '1 karton isi 36pcs 120ml.',
    variants: [{ id: 23, name: 'Original', price: 55000 }]
  },
  {
    numericId:  8,
    id: '8',
    name: 'Kunir Asem',
    img: 'img/kunir-asemm.png',
    basePrice: 4500,
    description: 'Komposisi kunyit, asam jawa, gula aren.',
    variants: [
      { id: 24, name: '120ml 6pcs', price: 15000 },
      { id: 25, name: '120ml 36pcs', price: 65000 },
      { id: 26, name: '240ml 40pcs', price: 127000 },
      { id: 27, name: 'Gelas 350ml', price: 4500 },
      { id: 28, name: 'Botol 500ml', price: 12000 }
    ]
  },
  {
    numericId: 9,
    id: '9',
    name: 'Pisang Sarjana',
    img: 'img/pisang-sarjana.png',
    basePrice: 12000,
    description: 'Pisang kepok goreng.',
    variants: [
      { id: 29, name: 'Spesial Ketumbar', price: 12000 },
      { id: 30, name: 'Keju Manis', price: 12000 },
      { id: 31, name: 'Balado', price: 12000 },
      { id: 33, name: 'Pedas', price: 12000 }
    ]
  },
  {
    numericId: 10,
    id: '10',
    name: 'Kpk Sarjana',
    img: 'img/kpk-sarjana.png',
    basePrice: 12000,
    description: 'Pisang kepok krispi.',
    variants: [
      { id: 34, name: 'Jagung', price: 12000 },
      { id: 35, name: 'Original', price: 12000 },
      { id: 36, name: 'Jagung', price: 12000 },
      { id: 37, name: 'Barbeque', price: 12000 },
      { id: 38, name: 'Pedas', price: 12000 },
      { id: 39, name: 'Keju', price: 12000 }
    ]
  },
  {
    numericId: 11,
    id: '11',
    name: 'Nenasku',
    img: 'img/nanasku.png',
    basePrice: 12000,
    description: 'Sirsak Nanas.',
    variants: []
  }
];

// ==========================================
// MAIN LOGIC & FUNCTIONS
// ==========================================

let cart = [];
let productListElement;
let cartContainer;
let itemDetailModal;
let navbarNav;
let searchForm;
let shoppingCart;

// Fungsi Helper Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, }).format(number);
};

// Fungsi Helper Ikon (Anti Crash)
const safeReplaceFeather = () => {
  if (typeof feather !== 'undefined' && feather.replace) {
    feather.replace();
  }
};

// 1. SYNC STOCK
async function syncStockFromDatabase() {
  console.log("⏳ Memulai Sinkronisasi Stok...");
  
  if (API_URL.includes('ISI-DISINI')) {
    console.warn("URL Ngrok belum diisi.");
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning': 'true',
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) throw new Error(`HTTP Status: ${response.status}`);
    
    const text = await response.text();
    if (text.includes('<!DOCTYPE') || !text.trim().startsWith('[')) {
      throw new Error("Respon Server Bukan JSON.");
    }

    const data = JSON.parse(text);
    console.log("✅ Data Stok Diterima:", data.length, "item");

    products.forEach(jsProduct => {
      const dbProduct = data.find(dbItem => parseInt(dbItem.id) === jsProduct.numericId);
      if (dbProduct) {
        jsProduct.stock = parseInt(dbProduct.stock) || 0;
      } else {
        jsProduct.stock = 0;
      }
    });
    
    renderProducts(); // Update tampilan stok

  } catch (error) {
    console.error("❌ Gagal Sinkronisasi:", error.message);
    // Jangan alert disini agar tidak mengganggu user saat loading pertama
    // Tapi renderProducts tetap jalan dengan stok default (0 atau undefined)
    renderProducts(); 
  }
}

// 2. RENDER PRODUK
function renderProducts(query = '') {
  if (!productListElement) {
    console.error("Elemen Produk Tidak Ditemukan!");
    return;
  }

  const filtered = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  productListElement.innerHTML = '';

  if (filtered.length === 0) {
    productListElement.innerHTML = '<p style="text-align:center; padding:1rem;">Produk tidak ditemukan.</p>';
    return;
  }

  filtered.forEach((product) => {
    let stockInfo = '<div style="margin-top:10px; font-size:0.9rem;">Menunggu update stok...</div>';
    
    if (typeof product.stock !== 'undefined' && product.stock !== null) {
      if(product.stock > 0) {
        stockInfo = `<div style="color:#2e7d32; font-weight:bold;">Stok: ${product.stock}</div>`;
      } else {
        stockInfo = `<div style="color:#c62828; font-weight:bold;">Stok Habis</div>`;
      }
    }

    // Cek path gambar
    const imgSrc = product.img; 

    const cardHTML = `
      <div class="product-card">
        <div class="product-icons">
          <a href="#" onclick="showDetail('${product.id}'); return false;"><i data-feather="eye"></i></a>
        </div>
        <div class="product-image">
          <img src="${imgSrc}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300?text=No+Image'">
        </div>
        <div class="product-content">
          <h3>${product.name}</h3>
          <div class="product-price">${rupiah(product.basePrice)}</div>
          ${stockInfo}
        </div>
      </div>`;
      
    productListElement.innerHTML += cardHTML;
  });
  
  safeReplaceFeather();
}

// 3. MODAL
window.showDetail = function(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modalContent = document.querySelector('.modal-content');
  if(!modalContent) return;

  modalContent.innerHTML = `
    <img src="${product.img}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300?text=No+Image'">
    <div class="product-info-wrapper">
      <h3>${product.name}</h3>
      <div class="content-flex-container">
        <div class="product-description">
          <p>${product.description}</p>
        </div>
        <div class="product-controls">
          <div class="variant-selection">
            <label for="v-select">Pilih Varian:</label>
            <select id="v-select">
              ${product.variants.map(v => `<option value="${v.id}">${v.name} - ${rupiah(v.price)}</option>`).join('')}
            </select>
          </div>
          <a href="#" class="cta" onclick="addToCartFromModal('${product.id}'); return false;">
            <i data-feather="shopping-cart"></i> <span>Ke Keranjang</span>
          </a>
        </div>
      </div>
    </div>`;

  if(itemDetailModal) itemDetailModal.style.display = 'flex';
  safeReplaceFeather();
};

// 4. CART LOGIC
window.addToCartFromModal = function(groupId) {
  const product = products.find(p => p.id === groupId);
  const select = document.getElementById('v-select');
  
  if (!product || !select) return;

  const selectedVariantId = parseInt(select.value);
  const variant = product.variants.find(v => v.id === selectedVariantId);
  
  if (!variant) return;

  const cartItem = {
    id: variant.id,
    name: `${product.name} (${variant.name})`,
    price: variant.price,
    img: product.img,
    quantity: 1
  };

  const existingItem = cart.find(item => item.id === cartItem.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push(cartItem);
  }

  renderCart();
  if(itemDetailModal) itemDetailModal.style.display = 'none';
};

function renderCart() {
  if (!cartContainer) return;
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p style="text-align:center; margin:2rem 0;">Keranjang Kosong</p>';
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/50?text=Img'">
      <div class="item-detail">
        <h3>${item.name}</h3>
        <div class="item-price">${rupiah(item.price)}</div>
        <div class="quantity-control">
            <button class="quantity-btn" onclick="changeQuantity(${item.id}, -1, event)">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn" onclick="changeQuantity(${item.id}, 1, event)">+</button>
        </div>
      <i data-feather="trash-2" class="remove-item" onclick="removeFromCart(${item.id}, event)"></i>
    `;
    cartContainer.appendChild(cartItem);
  });

  const totalDiv = document.createElement('div');
  totalDiv.classList.add('cart-total');
  totalDiv.innerHTML = `Total: <strong>${rupiah(total)}</strong>`;
  cartContainer.appendChild(totalDiv);

  const checkoutBtn = document.createElement('a');
  checkoutBtn.classList.add('checkout-btn');
  checkoutBtn.textContent = 'Checkout via WhatsApp';
  checkoutBtn.href = '#';
  checkoutBtn.onclick = window.checkout;
  cartContainer.appendChild(checkoutBtn);
  
  safeReplaceFeather();
}

window.changeQuantity = function(id, change, e) {
  if (e) e.stopPropagation();
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity < 1) {
      cart = cart.filter(i => i.id !== id);
    }
    renderCart();
  }
};

window.removeFromCart = function(id, e) {
  if (e) e.stopPropagation();
  cart = cart.filter((item) => item.id !== id);
  renderCart();
};

window.checkout = function(e) {
  e.preventDefault();
  if (cart.length === 0) return;
  
  const phone = '6285326827010';
  let message = 'Halo, saya ingin memesan:\n';
  let total = 0;

  cart.forEach((item) => {
    message += `- ${item.name} x${item.quantity} (${rupiah(item.price * item.quantity)})\n`;
    total += item.price * item.quantity;
  });

  message += `\nTotal: ${rupiah(total)}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');

  window.refreshStock = async function() {
    console.log("🔄 Manual Refresh diminta...");
    const btn = document.querySelector('button[onclick="window.refreshStock()"]');
    if(btn) {
        btn.innerHTML = "⏳ Loading...";
        btn.style.backgroundColor = "#ffc107"; // Kuning
        btn.style.color = "black";
    }
    
    await syncStockFromDatabase(); // Panggil ulang fungsi sync
    renderProducts(); // Render ulang produk
    renderCart();
    
    alert("Selesai! Cek apakah stok sudah berubah.");
    
    if(btn) {
        btn.innerHTML = "🔄 Refresh Stok";
        btn.style.backgroundColor = "#28a745"; // Hijau
        btn.style.color = "white";
    }
  };
};


// ==========================================
// INITIALIZATION & EVENT LISTENERS
// ==========================================
// SEMUA LOGIC INI DIPINDAHKAN KE DALAM DOMContentLoaded
// AGAR TIDAK ERROR NULL KARENA HTML BELUM SIAP
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ DOM Loaded. Inisialisasi Aplikasi...");

  // 1. Ambil Elemen DOM
  productListElement = document.querySelector('#product-list');
  if (!productListElement) productListElement = document.querySelector('.product-list');

  cartContainer = document.querySelector('.shopping-cart .cart-list');
  if (!cartContainer) cartContainer = document.querySelector('.shopping-cart');
  
  itemDetailModal = document.querySelector('#item-detail-modal');
  navbarNav = document.querySelector('.navbar-nav');
  searchForm = document.querySelector('.search-form');
  shoppingCart = document.querySelector('.shopping-cart');

  // Debug Log
  console.log("Status Product List:", !!productListElement);
  console.log("Status Cart Container:", !!cartContainer);

  // 2. Setup Event Listeners
  const hamburgerBtn = document.querySelector('#hamburger-menu');
  const searchBtn = document.querySelector('#search-button');
  const cartBtn = document.querySelector('#shopping-cart-button');
  const closeIcon = document.querySelector('.modal .close-icon');
  const searchBox = document.querySelector('#search-box');

  if (hamburgerBtn && navbarNav) {
    hamburgerBtn.onclick = () => { navbarNav.classList.toggle('active'); };
  }

  if (searchBtn) {
    searchBtn.onclick = (e) => {
      if(searchForm) searchForm.classList.toggle('active');
      if(searchBox) searchBox.focus();
      e.preventDefault();
    };
  }

  if (cartBtn) {
    cartBtn.onclick = (e) => {
      if(shoppingCart) shoppingCart.classList.toggle('active');
      e.preventDefault();
    };
  }

  if (closeIcon && itemDetailModal) {
    closeIcon.onclick = (e) => {
      itemDetailModal.style.display = 'none';
      e.preventDefault();
    };
  }

  // Klik di luar elemen
  document.addEventListener('click', function (e) {
    if (hamburgerBtn && !hamburgerBtn.contains(e.target) && navbarNav && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }
    if (searchBtn && !searchBtn.contains(e.target) && searchForm && !searchForm.contains(e.target)) {
      searchForm.classList.remove('active');
    }
    if (cartBtn && !cartBtn.contains(e.target) && shoppingCart && !shoppingCart.contains(e.target)) {
      shoppingCart.classList.remove('active');
    }
    
    // Modal Close
    if (e.target === itemDetailModal) {
      itemDetailModal.style.display = 'none';
    }
  });

  // 3. Jalankan Fungsi Utama
  renderProducts(); // Render tampilan produk dulu (biar tidak blank putih)
  syncStockFromDatabase(); // Baru coba ambil stok
  renderCart();
});
