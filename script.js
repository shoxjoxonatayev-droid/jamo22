// Mahsulotlar ma'lumotlari
const products = [
    {
        id: 1,
        title: "Erkaklar Ko'ylagi",
        price: 149000,
        originalPrice: 179000,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "erkaklar",
        badge: "Yangi"
    },
    {
        id: 2,
        title: "Ayollar Ko'ylagi",
        price: 179000,
        originalPrice: 199000,
        image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "ayollar",
        badge: "Chegirma"
    },
    {
        id: 3,
        title: "Bolalar Kostyumi",
        price: 99000,
        originalPrice: 119000,
        image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "bolalar",
        badge: "Yangi"
    },
    {
        id: 4,
        title: "Sport Kiyimlari",
        price: 129000,
        originalPrice: 149000,
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "erkaklar",
        badge: "Trend"
    },
    {
        id: 5,
        title: "Ayollar Platfosi",
        price: 219000,
        originalPrice: 259000,
        image: "https://images.unsplash.com/photo-1542295669297-4d352b042bca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "ayollar",
        badge: "Premium"
    },
    {
        id: 6,
        title: "Erkaklar Shimlari",
        price: 159000,
        originalPrice: 189000,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "erkaklar",
        badge: "Yangi"
    },
    {
        id: 7,
        title: "Bolalar Ko'ylagi",
        price: 69000,
        originalPrice: 89000,
        image: "https://images.unsplash.com/photo-1503454536315-27eec8d5e7ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "bolalar",
        badge: "Chegirma"
    },
    {
        id: 8,
        title: "Zargarlik Buyumi",
        price: 89000,
        originalPrice: 109000,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "aksessuarlar",
        badge: "Yangi"
    },
    {
        id: 9,
        title: "Soat",
        price: 199000,
        originalPrice: 239000,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "aksessuarlar",
        badge: "Premium"
    },
    {
        id: 10,
        title: "Sumka",
        price: 129000,
        originalPrice: 159000,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "aksessuarlar",
        badge: "Trend"
    },
    {
        id: 11,
        title: "Erkaklar Kurtkasi",
        price: 299000,
        originalPrice: 359000,
        image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "erkaklar",
        badge: "Premium"
    },
    {
        id: 12,
        title: "Ayollar Palto",
        price: 349000,
        originalPrice: 399000,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "ayollar",
        badge: "Yangi"
    }
];

// Savat ma'lumotlari
let cart = [];
let cartCount = 0;
let cartTotal = 0;
let discountApplied = false;
let currentCategory = 'all';

// DOM elementlari
const productsGrid = document.getElementById('products-grid');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCountElement = document.querySelector('.cart-count');
const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');
const cartBtn = document.querySelector('.cart-btn');
const closeCart = document.querySelector('.close-cart');
const applyDiscountBtn = document.getElementById('apply-discount');
const discountText = document.getElementById('discount-text');
const discountAmount = document.getElementById('discount-amount');
const finalPrice = document.getElementById('final-price');
const finalPriceAmount = document.getElementById('final-price-amount');
const filterBtns = document.querySelectorAll('.filter-btn');
const navLinks = document.querySelectorAll('.nav-link');
const categoryCards = document.querySelectorAll('.category-card');

// Mahsulotlarni ekranga chiqarish
function displayProducts(category = 'all', searchTerm = '') {
    productsGrid.innerHTML = '';
    
    let filteredProducts = products;
    
    // Kategoriya bo'yicha filtrlash
    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    // Qidiruv bo'yicha filtrlash
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // Animatsiya bilan mahsulotlarni chiqarish
    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1}s`;
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    ${product.originalPrice ? `<span class="original-price">${product.originalPrice.toLocaleString()} so'm</span>` : ''}
                    <span>${product.price.toLocaleString()} so'm</span>
                </div>
                <button class="add-to-cart" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i> Savatga qo'shish
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
    
    // Savatga qo'shish tugmalariga event listener qo'shish
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    // Agar mahsulot topilmasa
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <h3>Mahsulot topilmadi</h3>
                <p>Boshqa kategoriya yoki qidiruv so'zini sinab ko'ring</p>
            </div>
        `;
    }
}

// Savatga mahsulot qo'shish
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (product) {
        // Mahsulot savatda bormi tekshirish
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        // Savatni yangilash
        updateCart();
        
        // Animatsiya effekti
        const button = document.querySelector(`.add-to-cart[data-id="${productId}"]`);
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Qo\'shildi!';
        button.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';
        
        // Tugma animatsiyasi
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = 'linear-gradient(45deg, #3498db, #9b59b6)';
        }, 2000);
        
        // Savat animatsiyasi
        cartBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartBtn.style.transform = 'scale(1)';
        }, 300);
    }
}

// Savatni yangilash
function updateCart() {
    // Savatdagi mahsulotlar soni
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = cartCount;
    
    // Savatdagi mahsulotlar jami narxi
    cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Chegirma mavjud bo'lsa
    let finalTotal = cartTotal;
    let discountValue = 0;
    
    if (discountApplied) {
        discountValue = cartTotal * 0.2; // 20% chegirma
        finalTotal = cartTotal - discountValue;
        
        discountText.style.display = 'block';
        finalPrice.style.display = 'block';
        discountAmount.textContent = `-${discountValue.toLocaleString()} so'm`;
        finalPriceAmount.textContent = `${finalTotal.toLocaleString()} so'm`;
    } else {
        discountText.style.display = 'none';
        finalPrice.style.display = 'none';
    }
    
    cartTotalPrice.textContent = `${cartTotal.toLocaleString()} so'm`;
    
    // Savatdagi mahsulotlarni ko'rsatish
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Savat bo'sh</h3>
                <p>Mahsulot qo'shish uchun "Savatga qo'shish" tugmasini bosing</p>
            </div>
        `;
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.style.animationDelay = `${index * 0.05}s`;
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <p class="cart-item-price">${item.price.toLocaleString()} so'm</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });
        
        // Miqdor tugmalariga event listener qo'shish
        const minusButtons = document.querySelectorAll('.quantity-btn.minus');
        const plusButtons = document.querySelectorAll('.quantity-btn.plus');
        const removeButtons = document.querySelectorAll('.cart-item-remove');
        
        minusButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                updateQuantity(productId, -1);
            });
        });
        
        plusButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                updateQuantity(productId, 1);
            });
        });
        
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
    }
}

// Mahsulot miqdorini yangilash
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        // Agar miqdor 0 bo'lsa, mahsulotni o'chirish
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

// Savatdan mahsulot olib tashlash
function removeFromCart(productId) {
    // Animatsiya effekti
    const itemElement = document.querySelector(`.cart-item-remove[data-id="${productId}"]`).closest('.cart-item');
    itemElement.style.animation = 'slideOutRight 0.3s ease forwards';
    
    setTimeout(() => {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    }, 300);
}

// Kategoriya bo'yicha filtrlash
function filterProducts(category) {
    currentCategory = category;
    
    // Filter tugmalarini yangilash
    filterBtns.forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Navigatsiya linklarini yangilash
    navLinks.forEach(link => {
        if (link.getAttribute('data-category') === category) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Mahsulotlarni ko'rsatish
    displayProducts(category);
    
    // Sahifani yuqoriga aylantirish
    window.scrollTo({
        top: products.offsetTop - 100,
        behavior: 'smooth'
    });
}

// Chegirma qo'llash
function applyDiscount() {
    if (cart.length === 0) {
        alert('Avval savatga mahsulot qoʻshing!');
        return;
    }
    
    if (!discountApplied) {
        discountApplied = true;
        applyDiscountBtn.textContent = 'Chegirma qoʻllandi';
        applyDiscountBtn.style.background = '#27ae60';
        applyDiscountBtn.disabled = true;
        
        // Animatsiya effekti
        applyDiscountBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            applyDiscountBtn.style.transform = 'scale(1)';
        }, 150);
        
        updateCart();
    }
}

// Dasturni ishga tushirish
document.addEventListener('DOMContentLoaded', function() {
    // Bosh sahifa mahsulotlari
    displayProducts();
    
    // Header scroll effekti
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            document.querySelector('header').classList.add('scrolled');
        } else {
            document.querySelector('header').classList.remove('scrolled');
        }
    });
    
    // Qidiruv qismini ochish/yopish
    searchBtn.addEventListener('click', function() {
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            searchInput.focus();
        }
    });
    
    // Real-time qidiruv
    searchInput.addEventListener('input', function() {
        displayProducts(currentCategory, this.value);
    });
    
    // Savat modali
    cartBtn.addEventListener('click', function() {
        cartModal.classList.add('active');
    });
    
    closeCart.addEventListener('click', function() {
        cartModal.classList.remove('active');
    });
    
    // Modal tashqarisiga bosilganda yopish
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
    
    // Filter tugmalari
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });
    
    // Navigatsiya linklari
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });
    
    // Kategoriya kartalari
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });
    
    // Chegirma tugmasi
    applyDiscountBtn.addEventListener('click', applyDiscount);
    
    // Buyurtma berish tugmasi
    document.querySelector('.checkout-btn').addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Savat boʻsh! Avval mahsulot qoʻshing.');
            return;
        }
        
        const finalAmount = discountApplied ? 
            (cartTotal - (cartTotal * 0.2)).toLocaleString() : 
            cartTotal.toLocaleString();
            
        alert(`Buyurtmangiz qabul qilindi! Jami: ${finalAmount} so'm\nTez orada siz bilan bog'lanamiz.`);
        
        // Savatni tozalash
        cart = [];
        discountApplied = false;
        updateCart();
        cartModal.classList.remove('active');
        
        // Chegirma tugmasini qayta tiklash
        applyDiscountBtn.textContent = 'Aksiyani oling';
        applyDiscountBtn.style.background = '';
        applyDiscountBtn.disabled = false;
    });
    
    // CTA tugmasi
    document.querySelector('.cta-button').addEventListener('click', function() {
        filterProducts('all');
    });
});

// CSS animatsiyalari qo'shish
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    .empty-cart, .no-products {
        text-align: center;
        padding: 40px 20px;
        color: #7f8c8d;
    }
    
    .empty-cart i, .no-products i {
        font-size: 3rem;
        margin-bottom: 15px;
        color: #bdc3c7;
    }
    
    .empty-cart h3, .no-products h3 {
        margin-bottom: 10px;
        color: #2c3e50;
    }
    
    .product-card {
        animation: fadeInUp 0.5s ease both;
    }
    
    .cart-item {
        animation: slideInRight 0.3s ease both;
    }
`;
document.head.appendChild(style);