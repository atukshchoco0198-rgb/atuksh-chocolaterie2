/**
 * ATUKSH – CHOCOLATERIE PANCHKULA
 * Handcrafted with Love by Atul & Diksha
 * Complete Dynamic Store, Real-Time Cloud Sync & Full Admin Control Panel
 */

// Default Brand Settings
const defaultBrandSettings = {
    brandName: 'ATUKSH',
    brandSub: 'CHOCOLATERIE • PANCHKULA',
    tagline: 'A Little Pahadi Love in Every Bite.',
    pageTitle: 'Atuksh Chocolaterie Panchkula | Freshly Handcrafted Chocolates',
    whatsapp: '919876543210',
    customLogo: 'atuksh-emblem.png'
};

// Initial Products Catalog (Featuring user's real handmade chocolate photo)
const defaultProducts = [
    {
        id: 'signature-heart-1',
        title: 'Heart-Shaped Dark Dry Fruit Chocolate',
        titleFont: 'font-serif',
        category: 'bonbons',
        categoryLabel: 'Signature Handcrafted',
        price: 149,
        unit: 'Handcrafted Heart Slab (65g)',
        tag: 'Founders Special',
        image: 'Heart-Shaped-Dark-Dry-Fruit-Chocolate.jpg',
        description: 'Made with love by Atul & Diksha in Panchkula. Rich Belgian dark chocolate packed with roasted almonds, cashews, raisins, and mountain crunch in a signature heart mold.',
        descFont: 'font-sans',
        descSize: 'text-sm',
        flavorNotes: ['Roasted Dry Fruits', 'Single Origin Dark', 'Heart Mold']
    },
    {
        id: 'bonbon-1',
        title: 'Himalayan Salted Caramel Bonbon',
        titleFont: 'font-serif',
        category: 'bonbons',
        categoryLabel: 'Artisanal Bonbon',
        price: 99,
        unit: 'per piece',
        tag: 'Bestseller',
        image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=600&auto=format&fit=crop',
        description: '60% dark chocolate shell filled with slow-cooked mountain cream caramel and a dusting of Himalayan pink salt.',
        descFont: 'font-sans',
        descSize: 'text-sm',
        flavorNotes: ['60% Dark Cocoa', 'Mountain Sea Salt', 'Liquid Caramel']
    },
    {
        id: 'bonbon-2',
        title: 'Roasted Pahadi Walnut & Coffee Bonbon',
        titleFont: 'font-cormorant',
        category: 'bonbons',
        categoryLabel: 'Artisanal Bonbon',
        price: 110,
        unit: 'per piece',
        tag: 'Pahadi Special',
        image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=600&auto=format&fit=crop',
        description: 'Hand-toasted Kashmiri & Pahadi walnuts folded into a rich single-origin espresso chocolate ganache.',
        descFont: 'font-sans',
        descSize: 'text-sm',
        flavorNotes: ['Pahadi Walnut', 'Espresso Ganache', 'Crisp Shell']
    },
    {
        id: 'bar-1',
        title: 'Pahadi Honeycomb Crunch Milk Bar',
        titleFont: 'font-cinzel',
        category: 'bars',
        categoryLabel: 'Pahadi Gourmet Bar',
        price: 249,
        unit: '85g Artisan Bar',
        tag: 'Popular',
        image: 'https://images.unsplash.com/photo-1582176604856-e824b4736522?q=80&w=600&auto=format&fit=crop',
        description: 'Creamy artisanal milk chocolate loaded with generous chunks of airy, homemade golden honeycomb.',
        descFont: 'font-sans',
        descSize: 'text-sm',
        flavorNotes: ['Crispy Honeycomb', 'Creamy Milk', 'Caramel Notes']
    },
    {
        id: 'hamper-1',
        title: 'Pahadi Warmth Keepsake Gift Hamper',
        titleFont: 'font-serif',
        category: 'hampers',
        categoryLabel: 'Celebration Hamper',
        price: 1499,
        unit: 'Luxury Keepsake Box',
        tag: 'Festive Signature',
        image: 'https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?q=80&w=600&auto=format&fit=crop',
        description: 'Assorted handcrafted bonbons and artisan bars packed in our bespoke gift box with satin ribbon and calligraphy note.',
        descFont: 'font-sans',
        descSize: 'text-sm',
        flavorNotes: ['Handcrafted Assortment', 'Satin Ribbon', 'Keepsake Box']
    }
];

// Initial Customer Reviews
const defaultReviews = [
    {
        id: 'rev-1',
        name: 'Pooja Sharma',
        rating: 5,
        occasion: 'Birthday Gift in Panchkula',
        text: 'You can literally taste that they were made fresh for you! The Heart-Shaped Dark Dry Fruit chocolate had this incredible rich melt. Atul & Diksha wrote the warmest handwritten card for my sister’s birthday.'
    },
    {
        id: 'rev-2',
        name: 'Rohit Rawat',
        rating: 5,
        occasion: 'Anniversary Celebration in Chandigarh',
        text: 'The Pahadi inspiration is felt in every detail. The packaging with pine green ribbon and custom wax seal made it feel like a luxury boutique gift from the Alps, but with genuine Indian warmth. 10/10!'
    },
    {
        id: 'rev-3',
        name: 'Shweta Verma',
        rating: 5,
        occasion: 'Regular Customer in Sector 20, Panchkula',
        text: 'I was so tired of factory chocolates packed with sugar. Atuksh chocolates have this rich, silky cocoa texture that feels homemade with real love. My family adores the Roasted Walnut Bonbons!'
    }
];

// Available Flavors for Custom Hamper Studio
const hamperFlavors = [
    { id: 'f-heart', name: 'Heart Dark Dry Fruit' },
    { id: 'f-caramel', name: 'Salted Caramel' },
    { id: 'f-honeycomb', name: 'Pahadi Honeycomb' },
    { id: 'f-walnut', name: 'Roasted Walnut' },
    { id: 'f-rose', name: 'Wildberry Rose' },
    { id: 'f-espresso', name: 'Espresso Dark' },
    { id: 'f-almond', name: 'Almond Praline' },
    { id: 'f-cinnamon', name: 'Spiced Cinnamon' },
];

// Global Application State
let brandSettings = { ...defaultBrandSettings };
let products = [];
let reviews = [];
let orders = [];
let cart = [];
let currentFilter = 'all';

// Admin Auth State
const DEFAULT_ADMIN_PASSWORD = 'you are great';
let adminPassword = DEFAULT_ADMIN_PASSWORD;
let isAdminLoggedIn = false;

// Real-Time Cloud Sync State
let firebaseApp = null;
let firestoreDb = null;
let rtdbInstance = null;
let rtdbRef = null;
let realtimeUnsubscribe = null;
let isCloudConnected = false;
let realtimeBroadcastChannel = null;

// Custom Hamper Studio State
let hamperState = {
    boxName: 'Petite Mountain Box (4 pcs)',
    boxSlots: 4,
    boxPrice: 399,
    selectedFlavors: [],
    ribbon: 'Himalayan Pine Green',
    to: '',
    from: '',
    message: ''
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initBroadcastChannel();
    loadStorageData();
    applyBrandSettings();
    renderProducts();
    renderReviews();
    renderAdminOrdersList();
    initCategoryFilters();
    initHamperStudio();
    initCartSystem();
    initFAQ();
    initContactForm();
    initMobileNav();
    initAdminSystem();
    initFirebaseRealtimeSync();
});

// Setup Instant Cross-Tab Broadcast Channel (Works immediately without any server!)
function initBroadcastChannel() {
    try {
        if ('BroadcastChannel' in window) {
            realtimeBroadcastChannel = new BroadcastChannel('atuksh_realtime_sync');
            realtimeBroadcastChannel.onmessage = (event) => {
                if (event.data && event.data.type === 'DATA_UPDATED') {
                    console.log('⚡ Real-time update received from another tab!');
                    loadStorageData(false);
                    applyBrandSettings();
                    renderProducts();
                    renderReviews();
                    renderAdminOrdersList();
                    showToast('Real-Time Update', 'Website refreshed with latest changes from another tab/device.');
                }
            };
        }

        // Native browser storage event listener for instant multi-tab sync
        window.addEventListener('storage', (e) => {
            if (e.key === 'atuksh_brand') {
                console.log('⚡ Real-time brand/logo update received via storage event!');
                loadStorageData(false);
                applyBrandSettings();
            } else if (e.key === 'atuksh_products') {
                loadStorageData(false);
                renderProducts();
            } else if (e.key === 'atuksh_reviews') {
                loadStorageData(false);
                renderReviews();
            }
        });
    } catch (e) {
        console.warn('BroadcastChannel not supported', e);
    }
}

function broadcastLocalChange() {
    if (realtimeBroadcastChannel) {
        try {
            realtimeBroadcastChannel.postMessage({ type: 'DATA_UPDATED', timestamp: Date.now() });
        } catch (e) {
            console.warn(e);
        }
    }
}

// Load Data from LocalStorage with Fallbacks
function loadStorageData(checkSignature = true) {
    // 1. Password
    const savedPwd = localStorage.getItem('atuksh_admin_pwd');
    adminPassword = savedPwd ? savedPwd : DEFAULT_ADMIN_PASSWORD;

    // 2. Brand Settings
    const savedBrand = localStorage.getItem('atuksh_brand');
    if (savedBrand) {
        try {
            brandSettings = { ...defaultBrandSettings, ...JSON.parse(savedBrand) };
            if (!brandSettings.customLogo || brandSettings.customLogo === 'atuksh-logo.jpg') {
                brandSettings.customLogo = 'atuksh-emblem.png';
            }
        } catch (e) {
            brandSettings = { ...defaultBrandSettings };
        }
    } else {
        brandSettings = { ...defaultBrandSettings };
    }

    // 3. Products
    const savedProducts = localStorage.getItem('atuksh_products');
    if (savedProducts) {
        try {
            products = JSON.parse(savedProducts);
            // Ensure Heart-Shaped Dry Fruit Chocolate is present if user has the image
            if (checkSignature && !products.some(p => p.image && p.image.includes('Heart-Shaped'))) {
                products.unshift(defaultProducts[0]);
                saveProductsToStorage(false);
            }
        } catch (e) {
            products = [...defaultProducts];
        }
    } else {
        products = [...defaultProducts];
        saveProductsToStorage(false);
    }

    // 4. Reviews
    const savedReviews = localStorage.getItem('atuksh_reviews');
    if (savedReviews) {
        try {
            reviews = JSON.parse(savedReviews);
        } catch (e) {
            reviews = [...defaultReviews];
        }
    } else {
        reviews = [...defaultReviews];
        saveReviewsToStorage(false);
    }

    // 5. Orders Log
    const savedOrders = localStorage.getItem('atuksh_orders');
    if (savedOrders) {
        try {
            orders = JSON.parse(savedOrders);
        } catch (e) {
            orders = [];
        }
    }

    // 6. Cart
    const savedCart = localStorage.getItem('atuksh_cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartUI();
        } catch (e) {
            cart = [];
        }
    }
}

// Apply Brand Settings across Website
function applyBrandSettings() {
    const pageTitleEl = document.getElementById('page-title');
    if (pageTitleEl) pageTitleEl.textContent = brandSettings.pageTitle || `${brandSettings.brandName} – ${brandSettings.brandSub}`;

    const headerNameEl = document.getElementById('brand-name-header');
    const headerSubEl = document.getElementById('brand-sub-header');
    const headerTaglineEl = document.getElementById('brand-tagline-header');
    if (headerNameEl) headerNameEl.textContent = brandSettings.brandName;
    if (headerSubEl) headerSubEl.textContent = brandSettings.brandSub;
    if (headerTaglineEl) headerTaglineEl.textContent = brandSettings.tagline;

    const heroNameEl = document.getElementById('brand-name-hero');
    const heroTitleEl = document.getElementById('brand-hero-title');
    if (heroNameEl) heroNameEl.textContent = `${brandSettings.brandName} – ${brandSettings.brandSub}`;
    if (heroTitleEl) heroTitleEl.innerHTML = `A Little <span class="text-pahadi-pine italic font-normal">Pahadi Love</span> in Every Bite.`;

    const footerNameEl = document.getElementById('brand-name-footer');
    const footerSubEl = document.getElementById('brand-sub-footer');
    const footerTaglineEl = document.getElementById('brand-tagline-footer');
    const copyrightEl = document.getElementById('copyright-text');
    if (footerNameEl) footerNameEl.textContent = brandSettings.brandName;
    if (footerSubEl) footerSubEl.textContent = brandSettings.brandSub;
    if (footerTaglineEl) footerTaglineEl.textContent = `"${brandSettings.tagline}"`;
    if (copyrightEl) copyrightEl.textContent = `© ${new Date().getFullYear()} ${brandSettings.brandName} – ${brandSettings.brandSub}. All rights reserved.`;

    updateWhatsAppLinks();
    applyLogoToUI();
}

function applyLogoToUI() {
    const logoContainer = document.getElementById('brand-logo-container');
    const footerLogoContainer = document.getElementById('brand-logo-footer');

    const defaultSvg = `
        <div id="default-logo-svg" class="w-full h-full rounded-full bg-cocoa-950 flex items-center justify-center border border-pahadi-gold/30">
            <svg class="w-7 h-7 sm:w-8 sm:h-8 text-pahadi-gold group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor">
                <path d="M6 34L18 16L28 30L34 22L42 34H6Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24 10C21 14 20 20 24 24C28 20 27 14 24 10Z" fill="#D4AF37" stroke="#D4AF37" stroke-width="1.5"/>
                <path d="M14 38C20 40 28 40 34 38" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </div>
    `;

    const defaultFooterInit = `<span class="font-cinzel font-bold text-lg">${brandSettings.brandName.charAt(0) || 'A'}</span>`;

    if (brandSettings.customLogo && brandSettings.customLogo.trim().length > 0) {
        const logoSrc = brandSettings.customLogo.trim();
        if (logoContainer) {
            logoContainer.innerHTML = `<img src="${logoSrc}" alt="${brandSettings.brandName} Logo" class="w-full h-full object-cover rounded-full" onerror="this.onerror=null; this.parentElement.innerHTML = \`${defaultSvg.replace(/`/g, '\\`')}\`;">`;
        }
        if (footerLogoContainer) {
            footerLogoContainer.innerHTML = `<img src="${logoSrc}" alt="${brandSettings.brandName} Logo" class="w-full h-full object-cover rounded-full" onerror="this.onerror=null; this.parentElement.innerHTML = \`${defaultFooterInit}\`;">`;
        }
    } else {
        if (logoContainer) {
            logoContainer.innerHTML = defaultSvg;
        }
        if (footerLogoContainer) {
            footerLogoContainer.innerHTML = defaultFooterInit;
        }
    }
}

function updateWhatsAppLinks() {
    const phone = brandSettings.whatsapp || '919876543210';
    const formattedPhone = phone.startsWith('+') ? phone : `+${phone}`;

    const helplineText = document.getElementById('helpline-text');
    const contactPhoneDisplay = document.getElementById('contact-phone-display');
    const footerPhoneDisplay = document.getElementById('footer-phone-display');
    if (helplineText) helplineText.textContent = `Order Helpline: ${formattedPhone}`;
    if (contactPhoneDisplay) contactPhoneDisplay.textContent = formattedPhone;
    if (footerPhoneDisplay) footerPhoneDisplay.textContent = `WhatsApp: ${formattedPhone}`;

    const helplineLink = document.getElementById('helpline-link');
    const headerWhatsAppBtn = document.getElementById('header-whatsapp-btn');
    const mobileWhatsAppBtn = document.getElementById('mobile-whatsapp-btn');
    const heroWhatsAppBtn = document.getElementById('hero-whatsapp-btn');
    const contactWhatsAppBtn = document.getElementById('contact-whatsapp-btn');
    const footerWhatsAppLink = document.getElementById('footer-whatsapp-link');
    const customChatLink = document.getElementById('custom-whatsapp-chat-link');

    const defaultMsg = encodeURIComponent(`Hi Atul & Diksha! I'd like to inquire about fresh handcrafted chocolates from ${brandSettings.brandName} Panchkula.`);
    const waUrl = `https://wa.me/${phone}?text=${defaultMsg}`;

    [helplineLink, headerWhatsAppBtn, mobileWhatsAppBtn, heroWhatsAppBtn, contactWhatsAppBtn, footerWhatsAppLink, customChatLink].forEach(link => {
        if (link) link.href = waUrl;
    });
}

// Render Products Catalog
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const filtered = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category === currentFilter);

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12 bg-white rounded-3xl border border-cocoa-200 p-8 space-y-3">
                <i data-lucide="cookie" class="w-10 h-10 text-cocoa-400 mx-auto"></i>
                <h4 class="font-serif text-lg font-bold text-cocoa-950">No chocolates found in this category</h4>
                <p class="text-xs text-cocoa-600">You can add your own creations with custom photos and fonts in the Admin Panel.</p>
                <button onclick="openAdminModal('products')" class="px-5 py-2 rounded-full bg-cocoa-950 text-white text-xs font-semibold hover:bg-pahadi-pine transition-colors">
                    + Add Chocolate in Admin
                </button>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    grid.innerHTML = filtered.map(product => {
        const titleFontClass = product.titleFont || 'font-serif';
        const descFontClass = product.descFont || 'font-sans';
        const descSizeClass = product.descSize || 'text-sm';

        return `
            <div class="product-card bg-white rounded-3xl overflow-hidden border border-cocoa-200 shadow-sm flex flex-col justify-between group">
                <div>
                    <!-- Image Container -->
                    <div class="relative aspect-[4/3] overflow-hidden bg-cocoa-100">
                        <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute top-3 left-3 bg-cocoa-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                            ${product.categoryLabel || product.category}
                        </div>
                        ${product.tag ? `
                            <div class="absolute top-3 right-3 bg-pahadi-gold text-cocoa-950 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                                ${product.tag}
                            </div>
                        ` : ''}
                    </div>

                    <!-- Product Body -->
                    <div class="p-6">
                        <div class="flex items-baseline justify-between mb-2">
                            <span class="font-bold text-xl text-cocoa-950 flex items-center">
                                <span class="text-pahadi-gold font-sans mr-0.5">₹</span>${product.price}
                            </span>
                            <span class="text-[11px] text-cocoa-600">${product.unit || 'per piece'}</span>
                        </div>

                        <!-- Title with Admin-Selected Font -->
                        <h3 class="${titleFontClass} text-xl sm:text-2xl font-bold text-cocoa-950 group-hover:text-pahadi-pine transition-colors leading-snug mb-2">
                            ${product.title}
                        </h3>

                        <!-- Description with Admin-Selected Font and Size -->
                        <p class="${descFontClass} ${descSizeClass} text-cocoa-700 leading-relaxed mb-4 line-clamp-3">
                            ${product.description}
                        </p>

                        <!-- Flavor Notes -->
                        ${product.flavorNotes && product.flavorNotes.length > 0 ? `
                            <div class="flex flex-wrap gap-1.5 mb-2">
                                ${product.flavorNotes.map(note => `
                                    <span class="text-[10px] bg-cocoa-50 text-cocoa-800 px-2 py-0.5 rounded-md border border-cocoa-100">
                                        ${note}
                                    </span>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="p-6 pt-0 space-y-2">
                    <button onclick="addToCart('${product.id}')" class="w-full py-2.5 rounded-full bg-cocoa-950 hover:bg-pahadi-pine text-white text-xs font-semibold transition-all shadow-sm flex items-center justify-center gap-2 group-btn">
                        <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
                        <span>Add to Basket</span>
                    </button>
                    <a href="https://wa.me/${brandSettings.whatsapp}?text=${encodeURIComponent(`Hi Atul & Diksha! I'd like to order ${product.title} (₹${product.price}) from Panchkula.`)}" target="_blank" class="w-full py-2 rounded-full border border-emerald-500 text-emerald-800 hover:bg-emerald-50 text-xs font-medium transition-colors flex items-center justify-center gap-1.5">
                        <i data-lucide="message-circle" class="w-3.5 h-3.5 text-[#25D366]"></i>
                        <span>Quick Order on WhatsApp</span>
                    </a>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

function initCategoryFilters() {
    const filterButtons = document.querySelectorAll('.cat-filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active-tab'));
            btn.classList.add('active-tab');
            currentFilter = btn.dataset.category;
            renderProducts();
        });
    });
}

// Render Reviews Section
function renderReviews() {
    const grid = document.getElementById('reviews-grid');
    if (!grid) return;

    if (reviews.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-10 bg-white rounded-3xl border border-cocoa-200 p-8 space-y-3">
                <i data-lucide="message-square" class="w-8 h-8 text-cocoa-400 mx-auto"></i>
                <p class="font-serif text-base font-bold text-cocoa-950">No customer reviews published yet.</p>
                <p class="text-xs text-cocoa-600">You can add your reviews and testimonials from the Admin Panel.</p>
                <button onclick="openAdminModal('reviews')" class="px-4 py-2 rounded-full bg-cocoa-950 text-white text-xs font-semibold hover:bg-pahadi-pine transition-colors">
                    Add Review in Admin
                </button>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    grid.innerHTML = reviews.map(rev => {
        const stars = '★'.repeat(rev.rating || 5) + '☆'.repeat(5 - (rev.rating || 5));
        const initial = (rev.name || 'C').charAt(0).toUpperCase();

        return `
            <div class="bg-white rounded-3xl p-8 border border-cocoa-200 shadow-sm flex flex-col justify-between group hover:border-pahadi-gold/60 transition-all">
                <div class="space-y-4">
                    <div class="flex text-pahadi-gold text-base tracking-wider">
                        ${stars}
                    </div>
                    <p class="text-cocoa-800 text-sm leading-relaxed italic">
                        "${rev.text}"
                    </p>
                </div>
                <div class="pt-6 border-t border-cocoa-100 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-pahadi-mist text-pahadi-pine font-bold flex items-center justify-center font-serif text-sm">
                            ${initial}
                        </div>
                        <div>
                            <h5 class="text-sm font-bold text-cocoa-950">${rev.name}</h5>
                            <p class="text-[11px] text-cocoa-600">${rev.occasion || 'Verified Customer'}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

// Hamper Studio Setup
function initHamperStudio() {
    const boxCards = document.querySelectorAll('.box-card');
    boxCards.forEach(card => {
        card.addEventListener('click', () => {
            boxCards.forEach(c => c.classList.remove('selected-box'));
            card.classList.add('selected-box');
            hamperState.boxSlots = parseInt(card.dataset.slots, 10);
            hamperState.boxName = card.dataset.name;
            hamperState.boxPrice = parseInt(card.dataset.price, 10);

            if (hamperState.selectedFlavors.length > hamperState.boxSlots) {
                hamperState.selectedFlavors = hamperState.selectedFlavors.slice(0, hamperState.boxSlots);
            }
            updateHamperPreview();
        });
    });

    const flavorOptionsContainer = document.getElementById('flavor-options');
    if (flavorOptionsContainer) {
        flavorOptionsContainer.innerHTML = hamperFlavors.map(flavor => `
            <button type="button" class="flavor-pick-btn p-2.5 rounded-xl border border-cocoa-200 bg-white hover:border-pahadi-pine hover:bg-pahadi-mist/30 transition-all text-left flex items-center justify-between group" data-flavor="${flavor.name}">
                <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-cocoa-700 group-hover:bg-pahadi-pine"></span>
                    <span class="text-xs font-semibold text-cocoa-900">${flavor.name}</span>
                </div>
                <span class="text-xs font-bold text-cocoa-400 group-hover:text-pahadi-pine">+</span>
            </button>
        `).join('');

        flavorOptionsContainer.querySelectorAll('.flavor-pick-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const flavorName = btn.dataset.flavor;
                if (hamperState.selectedFlavors.length < hamperState.boxSlots) {
                    hamperState.selectedFlavors.push(flavorName);
                    updateHamperPreview();
                    showToast(`Added ${flavorName} to Hamper`, 'Box assortment updated');
                } else {
                    showToast(`Box is full (${hamperState.boxSlots}/${hamperState.boxSlots})`, 'Select a bigger box or reset flavors', true);
                }
            });
        });
    }

    const ribbonButtons = document.querySelectorAll('.ribbon-btn');
    ribbonButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            ribbonButtons.forEach(b => b.classList.remove('active-ribbon'));
            btn.classList.add('active-ribbon');
            hamperState.ribbon = btn.dataset.ribbon;
            updateHamperPreview();
        });
    });

    const noteToInput = document.getElementById('note-to');
    const noteFromInput = document.getElementById('note-from');
    const noteMsgInput = document.getElementById('note-message');

    if (noteToInput && noteFromInput && noteMsgInput) {
        const updateNote = () => {
            hamperState.to = noteToInput.value.trim();
            hamperState.from = noteFromInput.value.trim();
            hamperState.message = noteMsgInput.value.trim();
            updateHamperPreview();
        };

        noteToInput.addEventListener('input', updateNote);
        noteFromInput.addEventListener('input', updateNote);
        noteMsgInput.addEventListener('input', updateNote);
    }

    const resetBtn = document.getElementById('reset-hamper-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            hamperState.selectedFlavors = [];
            updateHamperPreview();
            showToast('Hamper Cleared', 'You can pick your flavors afresh.');
        });
    }

    const addHamperCartBtn = document.getElementById('add-hamper-to-cart-btn');
    if (addHamperCartBtn) {
        addHamperCartBtn.addEventListener('click', () => {
            if (hamperState.selectedFlavors.length === 0) {
                showToast('Please select flavors', 'Add at least one chocolate flavor to your box', true);
                return;
            }

            const customHamperItem = {
                id: 'custom-hamper-' + Date.now(),
                title: hamperState.boxName,
                price: hamperState.boxPrice,
                categoryLabel: 'Custom Studio Hamper',
                image: 'Heart-Shaped-Dark-Dry-Fruit-Chocolate.jpg',
                customDetails: {
                    flavors: [...hamperState.selectedFlavors],
                    ribbon: hamperState.ribbon,
                    to: hamperState.to,
                    from: hamperState.from,
                    note: hamperState.message
                }
            };

            cart.push(customHamperItem);
            saveCartToStorage();
            updateCartUI();
            openCartDrawer();
            showToast('Hamper Added to Basket!', 'Your custom creation is ready.');
        });
    }

    const orderHamperWhatsAppBtn = document.getElementById('order-hamper-whatsapp-btn');
    if (orderHamperWhatsAppBtn) {
        orderHamperWhatsAppBtn.addEventListener('click', () => {
            let msg = `*🍫 NEW ATUKSH CUSTOM HAMPER ORDER*\n`;
            msg += `----------------------------------------\n`;
            msg += `*Box Style:* ${hamperState.boxName} (₹${hamperState.boxPrice})\n`;
            msg += `*Ribbon:* ${hamperState.ribbon}\n\n`;

            msg += `*Selected Flavors (${hamperState.selectedFlavors.length}/${hamperState.boxSlots}):*\n`;
            if (hamperState.selectedFlavors.length > 0) {
                const counts = {};
                hamperState.selectedFlavors.forEach(f => counts[f] = (counts[f] || 0) + 1);
                for (const [flavor, count] of Object.entries(counts)) {
                    msg += `• ${flavor} x ${count}\n`;
                }
            } else {
                msg += `• (Surprise Chef's Assortment)\n`;
            }

            if (hamperState.to || hamperState.from || hamperState.message) {
                msg += `\n*Handwritten Pahadi Note:*\n`;
                if (hamperState.to) msg += `To: ${hamperState.to}\n`;
                if (hamperState.from) msg += `From: ${hamperState.from}\n`;
                if (hamperState.message) msg += `"${hamperState.message}"\n`;
            }

            msg += `\n*Total:* ₹${hamperState.boxPrice}\n`;
            msg += `*Note:* Handcrafted fresh post-order by Atul & Diksha, Panchkula ❤️`;

            // Record into orders log
            logNewOrder({
                customerName: hamperState.from || 'Gift Customer',
                customerAddress: 'Via Direct Hamper Order',
                specialNote: `To: ${hamperState.to || 'Recipient'} - "${hamperState.message || 'No note'}"`,
                items: [{
                    title: hamperState.boxName,
                    price: hamperState.boxPrice,
                    quantity: 1,
                    customDetails: {
                        ribbon: hamperState.ribbon,
                        flavors: hamperState.selectedFlavors
                    }
                }],
                total: hamperState.boxPrice
            });

            const url = `https://wa.me/${brandSettings.whatsapp}?text=${encodeURIComponent(msg)}`;
            window.open(url, '_blank');
        });
    }

    updateHamperPreview();
}

function updateHamperPreview() {
    const boxNameEl = document.getElementById('preview-box-name');
    const ribbonNameEl = document.getElementById('preview-ribbon-name');
    const slotsCounterEl = document.getElementById('slots-counter');
    const summarySlotsStatusEl = document.getElementById('summary-slots-status');
    const visualSlotsEl = document.getElementById('box-visual-slots');
    const totalPriceEl = document.getElementById('preview-total-price');
    const noteContainerEl = document.getElementById('preview-note-container');
    const noteTextEl = document.getElementById('preview-note-text');

    if (boxNameEl) boxNameEl.textContent = hamperState.boxName;
    if (ribbonNameEl) ribbonNameEl.textContent = `Ribbon: ${hamperState.ribbon}`;
    if (totalPriceEl) totalPriceEl.textContent = `₹${hamperState.boxPrice}`;

    const filledCount = hamperState.selectedFlavors.length;
    const totalSlots = hamperState.boxSlots;

    if (slotsCounterEl) slotsCounterEl.textContent = `Selected: ${filledCount} / ${totalSlots}`;
    if (summarySlotsStatusEl) summarySlotsStatusEl.textContent = `${filledCount} / ${totalSlots} chocolates filled`;

    if (visualSlotsEl) {
        let cols = 'grid-cols-4';
        if (totalSlots === 9) cols = 'grid-cols-3';
        if (totalSlots === 16) cols = 'grid-cols-4';
        
        visualSlotsEl.className = `mt-4 grid ${cols} gap-2.5 max-w-xs mx-auto`;

        let slotsHTML = '';
        for (let i = 0; i < totalSlots; i++) {
            if (i < filledCount) {
                const flavor = hamperState.selectedFlavors[i];
                slotsHTML += `
                    <div class="slot-ball filled cursor-pointer" title="${flavor} (Click to remove)" onclick="removeHamperSlotFlavor(${i})">
                        <span>🍫</span>
                    </div>
                `;
            } else {
                slotsHTML += `
                    <div class="slot-ball empty">
                        <span>${i + 1}</span>
                    </div>
                `;
            }
        }
        visualSlotsEl.innerHTML = slotsHTML;
    }

    if (noteContainerEl && noteTextEl) {
        if (hamperState.to || hamperState.from || hamperState.message) {
            noteContainerEl.classList.remove('hidden');
            let text = '';
            if (hamperState.to) text += `Dear ${hamperState.to}, `;
            if (hamperState.message) text += `"${hamperState.message}" `;
            if (hamperState.from) text += `— With love, ${hamperState.from}`;
            noteTextEl.textContent = text;
        } else {
            noteContainerEl.classList.add('hidden');
        }
    }
}

window.removeHamperSlotFlavor = function(index) {
    if (index >= 0 && index < hamperState.selectedFlavors.length) {
        const removed = hamperState.selectedFlavors.splice(index, 1);
        updateHamperPreview();
        showToast('Flavor Removed', `${removed} was removed from the box.`);
    }
};

// Cart System
function initCartSystem() {
    const openBtn = document.getElementById('open-cart-btn');
    const closeBtn = document.getElementById('close-cart-btn');
    const overlay = document.getElementById('cart-drawer-overlay');
    const checkoutBtn = document.getElementById('checkout-whatsapp-btn');

    if (openBtn) openBtn.addEventListener('click', openCartDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeCartDrawer();
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleWhatsAppCheckout);
    }
}

function openCartDrawer() {
    const overlay = document.getElementById('cart-drawer-overlay');
    const drawer = document.getElementById('cart-drawer');
    if (overlay && drawer) {
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        overlay.classList.add('opacity-100');
        drawer.classList.remove('translate-x-full');
    }
}

function closeCartDrawer() {
    const overlay = document.getElementById('cart-drawer-overlay');
    const drawer = document.getElementById('cart-drawer');
    if (overlay && drawer) {
        overlay.classList.add('opacity-0', 'pointer-events-none');
        overlay.classList.remove('opacity-100');
        drawer.classList.add('translate-x-full');
    }
}

window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateCartUI();
    showToast(`Added ${product.title}`, 'Freshly prepared upon order confirmation');
};

function updateCartUI() {
    const countBadge = document.getElementById('cart-count-badge');
    const itemsContainer = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');

    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    if (countBadge) countBadge.textContent = totalCount;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
    if (totalEl) totalEl.textContent = `₹${subtotal}`;

    if (!itemsContainer) return;

    if (cart.length === 0) {
        itemsContainer.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-center p-8 space-y-4 text-cocoa-500">
                <div class="w-16 h-16 rounded-full bg-cocoa-100 flex items-center justify-center text-cocoa-700">
                    <i data-lucide="shopping-bag" class="w-8 h-8"></i>
                </div>
                <div>
                    <h4 class="font-serif text-lg font-bold text-cocoa-950">Your basket is empty</h4>
                    <p class="text-xs text-cocoa-600 mt-1 max-w-xs">
                        Treat yourself or a loved one to freshly handcrafted Pahadi chocolates from Panchkula.
                    </p>
                </div>
                <a href="#collections" onclick="closeCartDrawer()" class="px-5 py-2.5 rounded-full bg-cocoa-950 text-white text-xs font-semibold hover:bg-pahadi-pine transition-colors">
                    Explore Chocolates
                </a>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    itemsContainer.innerHTML = cart.map((item, index) => {
        const isCustom = item.customDetails !== undefined;
        return `
            <div class="p-3.5 rounded-2xl border border-cocoa-200 bg-white shadow-sm flex gap-3 items-start">
                <img src="${item.image}" alt="${item.title}" class="w-14 h-14 rounded-xl object-cover bg-cocoa-100 flex-shrink-0">
                <div class="flex-1 min-w-0">
                    <div class="flex justify-between items-start">
                        <h5 class="text-xs font-bold text-cocoa-950 truncate">${item.title}</h5>
                        <button onclick="removeFromCart(${index})" class="text-cocoa-400 hover:text-red-600 transition-colors p-1" title="Remove item">
                            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>

                    ${isCustom ? `
                        <div class="text-[10px] text-cocoa-600 mt-0.5 space-y-0.5">
                            <p><strong>Ribbon:</strong> ${item.customDetails.ribbon}</p>
                            <p><strong>Flavors:</strong> ${item.customDetails.flavors.join(', ')}</p>
                            ${item.customDetails.note ? `<p class="italic text-cocoa-800">"${item.customDetails.note}"</p>` : ''}
                        </div>
                    ` : `
                        <p class="text-[11px] text-cocoa-600 font-medium">₹${item.price} each</p>
                    `}

                    <div class="flex justify-between items-center mt-2 pt-1 border-t border-cocoa-100">
                        <span class="text-xs font-bold text-cocoa-950">₹${item.price * (item.quantity || 1)}</span>
                        
                        ${!isCustom ? `
                            <div class="flex items-center gap-2 border border-cocoa-200 rounded-lg px-2 py-0.5 bg-cocoa-50">
                                <button onclick="changeItemQty(${index}, -1)" class="text-xs font-bold text-cocoa-700 hover:text-black">-</button>
                                <span class="text-xs font-semibold text-cocoa-950">${item.quantity || 1}</span>
                                <button onclick="changeItemQty(${index}, 1)" class="text-xs font-bold text-cocoa-700 hover:text-black">+</button>
                            </div>
                        ` : `
                            <span class="text-[10px] bg-pahadi-mist text-pahadi-pine px-2 py-0.5 rounded font-semibold">1 Custom Box</span>
                        `}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    saveCartToStorage();
    updateCartUI();
};

window.changeItemQty = function(index, delta) {
    if (!cart[index]) return;
    const newQty = (cart[index].quantity || 1) + delta;
    if (newQty <= 0) {
        cart.splice(index, 1);
    } else {
        cart[index].quantity = newQty;
    }
    saveCartToStorage();
    updateCartUI();
};

function handleWhatsAppCheckout() {
    if (cart.length === 0) {
        showToast('Basket is Empty', 'Add chocolates before confirming order', true);
        return;
    }

    const nameInput = document.getElementById('order-customer-name');
    const addressInput = document.getElementById('order-customer-address');
    const noteInput = document.getElementById('order-special-note');

    const customerName = nameInput ? nameInput.value.trim() : '';
    const customerAddress = addressInput ? addressInput.value.trim() : '';
    const specialNote = noteInput ? noteInput.value.trim() : '';

    if (!customerName || !customerAddress) {
        showToast('Missing Details', 'Please enter your Name & City/Address', true);
        if (!customerName && nameInput) nameInput.focus();
        else if (!customerAddress && addressInput) addressInput.focus();
        return;
    }

    let msg = `*🍫 NEW ATUKSH CHOCOLATERIE ORDER (PANCHKULA)*\n`;
    msg += `----------------------------------------\n`;
    msg += `*Customer:* ${customerName}\n`;
    msg += `*Delivery Location:* ${customerAddress}\n`;
    if (specialNote) msg += `*Special Occasion/Note:* ${specialNote}\n`;
    msg += `----------------------------------------\n\n`;

    msg += `*ORDER ITEMS:*\n`;
    let subtotal = 0;
    const orderItems = [];

    cart.forEach((item, i) => {
        const qty = item.quantity || 1;
        const itemTotal = item.price * qty;
        subtotal += itemTotal;

        orderItems.push({
            title: item.title,
            price: item.price,
            quantity: qty,
            customDetails: item.customDetails || null
        });

        if (item.customDetails) {
            msg += `${i + 1}. *${item.title}* x ${qty} = ₹${itemTotal}\n`;
            msg += `   • Ribbon: ${item.customDetails.ribbon}\n`;
            msg += `   • Flavors: ${item.customDetails.flavors.join(', ')}\n`;
            if (item.customDetails.to) msg += `   • Card To: ${item.customDetails.to}\n`;
            if (item.customDetails.from) msg += `   • Card From: ${item.customDetails.from}\n`;
            if (item.customDetails.note) msg += `   • Note: "${item.customDetails.note}"\n`;
        } else {
            msg += `${i + 1}. *${item.title}* x ${qty} = ₹${itemTotal}\n`;
        }
    });

    msg += `\n----------------------------------------\n`;
    msg += `*Total Amount:* ₹${subtotal}\n`;
    msg += `*Freshly Prepared Post-Order by Atul & Diksha, Panchkula ❤️*\n\n`;
    msg += `Please confirm my order and share payment details (UPI/GPay/Bank).`;

    // Automatically record in Admin Orders Log
    logNewOrder({
        customerName,
        customerAddress,
        specialNote,
        items: orderItems,
        total: subtotal
    });

    const whatsappUrl = `https://wa.me/${brandSettings.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
}

// Order Logging
function logNewOrder(orderData) {
    const newOrder = {
        id: 'ORD-' + Date.now().toString().slice(-6),
        timestamp: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
        customerName: orderData.customerName,
        customerAddress: orderData.customerAddress,
        specialNote: orderData.specialNote || '',
        items: orderData.items,
        total: orderData.total,
        status: 'New'
    };

    orders.unshift(newOrder);
    saveOrdersToStorage();
    renderAdminOrdersList();
}

function saveOrdersToStorage() {
    try {
        localStorage.setItem('atuksh_orders', JSON.stringify(orders));
        syncToCloudIfEnabled('orders', orders);
    } catch (e) {
        console.warn(e);
    }
}

function renderAdminOrdersList() {
    const tableEl = document.getElementById('admin-orders-table');
    const countEl = document.getElementById('admin-orders-count');
    const tabCountEl = document.getElementById('admin-orders-tab-count');

    if (countEl) countEl.textContent = orders.length;
    if (tabCountEl) tabCountEl.textContent = orders.length;
    if (!tableEl) return;

    if (orders.length === 0) {
        tableEl.innerHTML = `
            <div class="text-center py-8 text-cocoa-500 space-y-2">
                <i data-lucide="inbox" class="w-8 h-8 mx-auto text-cocoa-400"></i>
                <p class="text-xs font-semibold text-cocoa-800">No orders logged yet.</p>
                <p class="text-[11px] text-cocoa-500">Customer orders generated via the shopping basket will appear here automatically.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    tableEl.innerHTML = orders.map((ord, idx) => {
        const statusColors = {
            'New': 'bg-blue-100 text-blue-800 border-blue-300',
            'Preparing': 'bg-amber-100 text-amber-800 border-amber-300',
            'Dispatched': 'bg-purple-100 text-purple-800 border-purple-300',
            'Delivered': 'bg-emerald-100 text-emerald-800 border-emerald-300'
        };

        const currentClass = statusColors[ord.status] || 'bg-gray-100 text-gray-800 border-gray-300';

        const itemsSummary = ord.items.map(it => `• ${it.title} (x${it.quantity})`).join('<br>');

        return `
            <div class="p-4 rounded-2xl border border-cocoa-200 bg-[#FCFAF6] hover:bg-white transition-colors space-y-3">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cocoa-100 pb-2.5">
                    <div class="flex items-center gap-2">
                        <span class="font-mono text-xs font-bold text-cocoa-900">${ord.id}</span>
                        <span class="text-[10px] text-cocoa-500">• ${ord.timestamp}</span>
                    </div>

                    <div class="flex items-center gap-2">
                        <select onchange="updateOrderStatus(${idx}, this.value)" class="text-[11px] font-bold px-2 py-1 rounded-lg border ${currentClass} focus:outline-none cursor-pointer">
                            <option value="New" ${ord.status === 'New' ? 'selected' : ''}>New</option>
                            <option value="Preparing" ${ord.status === 'Preparing' ? 'selected' : ''}>Preparing</option>
                            <option value="Dispatched" ${ord.status === 'Dispatched' ? 'selected' : ''}>Dispatched</option>
                            <option value="Delivered" ${ord.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                        </select>
                        <button onclick="deleteOrder(${idx})" class="p-1.5 rounded-lg text-cocoa-400 hover:text-red-600 hover:bg-red-50" title="Delete Order">
                            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                </div>

                <div class="grid sm:grid-cols-12 gap-3 text-xs">
                    <div class="sm:col-span-5 space-y-1">
                        <p class="font-bold text-cocoa-950">${ord.customerName}</p>
                        <p class="text-cocoa-600 text-[11px]">📍 ${ord.customerAddress}</p>
                        ${ord.specialNote ? `<p class="italic text-[11px] text-cocoa-700">"${ord.specialNote}"</p>` : ''}
                    </div>

                    <div class="sm:col-span-5 text-[11px] text-cocoa-800 leading-relaxed">
                        ${itemsSummary}
                    </div>

                    <div class="sm:col-span-2 text-right flex flex-col justify-between">
                        <span class="font-serif font-bold text-base text-cocoa-950">₹${ord.total}</span>
                        <a href="https://wa.me/${brandSettings.whatsapp}?text=${encodeURIComponent(`Hi ${ord.customerName}! Following up on your Atuksh Chocolaterie order #${ord.id}.`)}" target="_blank" class="inline-flex items-center justify-end gap-1 text-[10px] font-semibold text-emerald-700 hover:underline">
                            <i data-lucide="message-circle" class="w-3 h-3 text-[#25D366]"></i>
                            <span>Chat</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

window.updateOrderStatus = function(idx, newStatus) {
    if (orders[idx]) {
        orders[idx].status = newStatus;
        saveOrdersToStorage();
        renderAdminOrdersList();
        showToast('Status Updated', `Order marked as ${newStatus}.`);
    }
};

window.deleteOrder = function(idx) {
    if (confirm('Delete this order record?')) {
        orders.splice(idx, 1);
        saveOrdersToStorage();
        renderAdminOrdersList();
        showToast('Order Deleted', 'Record was removed.');
    }
};

window.clearOrdersLog = function() {
    if (orders.length === 0) return;
    if (confirm('Are you sure you want to clear all order logs?')) {
        orders = [];
        saveOrdersToStorage();
        renderAdminOrdersList();
        showToast('Orders Cleared', 'All order logs have been reset.');
    }
};

window.exportOrdersToCSV = function() {
    if (orders.length === 0) {
        showToast('No Orders', 'There are no orders to export.', true);
        return;
    }

    let csv = 'Order ID,Date,Customer Name,Address,Special Note,Items,Total,Status\n';
    orders.forEach(o => {
        const items = o.items.map(it => `${it.title} (x${it.quantity})`).join('; ');
        csv += `"${o.id}","${o.timestamp}","${o.customerName}","${o.customerAddress.replace(/"/g, '""')}","${(o.specialNote||'').replace(/"/g, '""')}","${items}","₹${o.total}","${o.status}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Atuksh_Orders_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('CSV Downloaded', 'Orders exported successfully.');
};

// Storage Helpers
function saveCartToStorage() {
    try {
        localStorage.setItem('atuksh_cart', JSON.stringify(cart));
    } catch (e) {
        console.warn('Storage unavailable', e);
    }
}

function saveProductsToStorage(shouldSync = true) {
    try {
        localStorage.setItem('atuksh_products', JSON.stringify(products));
        broadcastLocalChange();
        if (shouldSync) syncToCloudIfEnabled('products', products);
    } catch (e) {
        console.warn('Storage unavailable', e);
    }
}

function saveReviewsToStorage(shouldSync = true) {
    try {
        localStorage.setItem('atuksh_reviews', JSON.stringify(reviews));
        broadcastLocalChange();
        if (shouldSync) syncToCloudIfEnabled('reviews', reviews);
    } catch (e) {
        console.warn('Storage unavailable', e);
    }
}

function saveBrandToStorage(shouldSync = true) {
    try {
        localStorage.setItem('atuksh_brand', JSON.stringify(brandSettings));
    } catch (e) {
        console.warn('LocalStorage brand save warning (likely quota):', e);
    }
    // Always trigger cross-tab & cloud sync
    broadcastLocalChange();
    if (shouldSync) {
        syncToCloudIfEnabled('brandSettings', brandSettings);
    }
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const toggle = item.querySelector('.faq-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        }
    });
}

// Quick Inquiry Form
function initContactForm() {
    const form = document.getElementById('quick-inquiry-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('inq-name').value.trim();
        const occasion = document.getElementById('inq-occasion').value;
        const details = document.getElementById('inq-details').value.trim();

        let msg = `*🍫 INQUIRY FOR ${brandSettings.brandName.toUpperCase()} PANCHKULA*\n`;
        msg += `Hello Atul & Diksha,\n\n`;
        msg += `*Name:* ${name}\n`;
        msg += `*Occasion:* ${occasion}\n`;
        if (details) msg += `*Details/Message:* ${details}\n\n`;
        msg += `I would love to discuss custom fresh handcrafted chocolates in Panchkula / Tricity.`;

        // Record inquiry in Orders Log as well!
        logNewOrder({
            customerName: name,
            customerAddress: 'Via Quick Inquiry Form',
            specialNote: `${occasion}: ${details}`,
            items: [{ title: `Inquiry (${occasion})`, price: 0, quantity: 1 }],
            total: 0
        });

        const url = `https://wa.me/${brandSettings.whatsapp}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        form.reset();
        showToast('Inquiry Ready', 'WhatsApp is opening to connect with Atul & Diksha.');
    });
}

// Mobile Nav Toggle
function initMobileNav() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileBtn && mobileNav) {
        mobileBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
            mobileNav.classList.toggle('open');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.add('hidden');
                mobileNav.classList.remove('open');
            });
        });
    }
}

// Toast Notifications
let toastTimeout;
function showToast(title, desc, isWarning = false) {
    const toast = document.getElementById('toast');
    const titleEl = document.getElementById('toast-title');
    const descEl = document.getElementById('toast-desc');
    const iconEl = document.getElementById('toast-icon');

    if (!toast || !titleEl || !descEl) return;

    titleEl.textContent = title;
    descEl.textContent = desc;

    if (isWarning) {
        iconEl.innerHTML = `<i data-lucide="alert-circle" class="w-5 h-5 text-amber-400"></i>`;
    } else {
        iconEl.innerHTML = `<i data-lucide="check-circle" class="w-5 h-5 text-pahadi-gold"></i>`;
    }
    lucide.createIcons();

    toast.classList.add('toast-visible');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('toast-visible');
    }, 3500);
}

/* ==========================================================================
   ADMIN PANEL CONTROLLER & REAL-TIME CLOUD ENGINE
   ========================================================================== */

let pendingAdminTab = 'tab-products';
let currentUploadedImageData = '';
let currentUploadedLogoData = '';

// Compress and optimize images to ensure rapid real-time cloud sync and avoid LocalStorage quotas
function compressImage(file, maxDimension = 300, quality = 0.85) {
    return new Promise((resolve, reject) => {
        if (!file || !file.type.startsWith('image/')) {
            return reject(new Error('Invalid image file'));
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                let width = img.width;
                let height = img.height;
                if (width > maxDimension || height > maxDimension) {
                    if (width > height) {
                        height = Math.round((height * maxDimension) / width);
                        width = maxDimension;
                    } else {
                        width = Math.round((width * maxDimension) / height);
                        height = maxDimension;
                    }
                }
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL('image/jpeg', quality));
            };
            img.onerror = () => reject(new Error('Canvas image load error'));
            img.src = e.target.result;
        };
        reader.onerror = () => reject(new Error('FileReader error'));
        reader.readAsDataURL(file);
    });
}

function initAdminSystem() {
    const navAdminBtn = document.getElementById('nav-admin-btn');
    const mobileAdminBtn = document.getElementById('mobile-admin-btn');
    if (navAdminBtn) navAdminBtn.addEventListener('click', () => openAdminModal('products'));
    if (mobileAdminBtn) mobileAdminBtn.addEventListener('click', () => openAdminModal('products'));

    const loginForm = document.getElementById('admin-login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const entered = document.getElementById('admin-password-input').value;
            if (entered === adminPassword) {
                isAdminLoggedIn = true;
                closeAdminLoginModal();
                openAdminDashboardDirect(pendingAdminTab);
                showToast('Admin Unlocked', 'Welcome to Atuksh Studio!');
            } else {
                showToast('Incorrect Password', 'Please check the admin password and try again.', true);
            }
        });
    }

    const tabButtons = document.querySelectorAll('.admin-tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            switchAdminTab(tabId);
        });
    });

    const prodFileInput = document.getElementById('prod-image-file');
    const prodUrlInput = document.getElementById('prod-image-url');
    if (prodFileInput) {
        prodFileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    currentUploadedImageData = await compressImage(file, 650, 0.85);
                } catch (err) {
                    const reader = new FileReader();
                    reader.onload = (event) => { currentUploadedImageData = event.target.result; };
                    reader.readAsDataURL(file);
                }
                showProductImagePreview(currentUploadedImageData);
                if (prodUrlInput) prodUrlInput.value = '';
            }
        });
    }
    if (prodUrlInput) {
        prodUrlInput.addEventListener('input', (e) => {
            const url = e.target.value.trim();
            if (url) {
                currentUploadedImageData = url;
                showProductImagePreview(url);
            }
        });
    }

    const logoFileInput = document.getElementById('setting-logo-file');
    const logoUrlInput = document.getElementById('setting-logo-url');
    if (logoFileInput) {
        logoFileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    // Auto-compress logo to clean ~280px square so it fits LocalStorage and syncs across devices in 30ms!
                    currentUploadedLogoData = await compressImage(file, 280, 0.88);
                } catch (err) {
                    const reader = new FileReader();
                    reader.onload = (event) => { currentUploadedLogoData = event.target.result; };
                    reader.readAsDataURL(file);
                }
                showLogoPreview(currentUploadedLogoData);
                if (logoUrlInput) logoUrlInput.value = '';
            }
        });
    }
    if (logoUrlInput) {
        logoUrlInput.addEventListener('input', (e) => {
            const url = e.target.value.trim();
            if (url) {
                currentUploadedLogoData = url;
                showLogoPreview(url);
                if (logoFileInput) logoFileInput.value = '';
            }
        });
    }

    const productForm = document.getElementById('admin-product-form');
    if (productForm) productForm.addEventListener('submit', handleProductFormSubmit);

    const reviewForm = document.getElementById('admin-review-form');
    if (reviewForm) reviewForm.addEventListener('submit', handleReviewFormSubmit);

    const brandForm = document.getElementById('admin-brand-form');
    if (brandForm) brandForm.addEventListener('submit', handleBrandFormSubmit);

    const passwordForm = document.getElementById('admin-password-form');
    if (passwordForm) passwordForm.addEventListener('submit', handlePasswordFormSubmit);

    const realtimeForm = document.getElementById('admin-realtime-form');
    if (realtimeForm) realtimeForm.addEventListener('submit', handleRealtimeConfigSubmit);
}

function showProductImagePreview(src) {
    const imgEl = document.getElementById('prod-image-preview');
    const placeholderEl = document.getElementById('prod-image-placeholder');
    if (imgEl && placeholderEl) {
        imgEl.src = src;
        imgEl.classList.remove('hidden');
        placeholderEl.classList.add('hidden');
    }
}

function showLogoPreview(src) {
    const imgEl = document.getElementById('setting-logo-preview');
    const defaultIcon = document.getElementById('setting-logo-default-icon');
    if (imgEl && defaultIcon) {
        imgEl.src = src;
        imgEl.classList.remove('hidden');
        defaultIcon.classList.add('hidden');
    }
}

window.resetToDefaultLogo = function() {
    currentUploadedLogoData = '';
    const fileInput = document.getElementById('setting-logo-file');
    if (fileInput) fileInput.value = '';
    const imgEl = document.getElementById('setting-logo-preview');
    const defaultIcon = document.getElementById('setting-logo-default-icon');
    if (imgEl && defaultIcon) {
        imgEl.classList.add('hidden');
        defaultIcon.classList.remove('hidden');
    }
    showToast('Default Logo Set', 'Save changes to update website.');
};

window.openAdminModal = function(tabName = 'products') {
    let tabId = 'tab-products';
    if (tabName === 'orders') tabId = 'tab-orders';
    if (tabName === 'reviews') tabId = 'tab-reviews';
    if (tabName === 'brand') tabId = 'tab-brand';
    if (tabName === 'realtime') tabId = 'tab-realtime';
    if (tabName === 'security' || tabName === 'password') tabId = 'tab-security';

    pendingAdminTab = tabId;

    if (isAdminLoggedIn) {
        openAdminDashboardDirect(tabId);
    } else {
        openAdminLoginModal();
    }
};

function openAdminLoginModal() {
    const modal = document.getElementById('admin-login-modal');
    const pwdInput = document.getElementById('admin-password-input');
    if (modal) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100');
        if (pwdInput) {
            pwdInput.value = '';
            setTimeout(() => pwdInput.focus(), 150);
        }
    }
}

window.closeAdminLoginModal = function() {
    const modal = document.getElementById('admin-login-modal');
    if (modal) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.classList.remove('opacity-100');
    }
};

function openAdminDashboardDirect(targetTabId = 'tab-products') {
    const modal = document.getElementById('admin-dashboard-modal');
    if (modal) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100');
        switchAdminTab(targetTabId);
        renderAdminProductsList();
        renderAdminReviewsList();
        renderAdminOrdersList();
        loadBrandFormValues();
        loadRealtimeConfigForm();
    }
}

window.closeAdminDashboard = function() {
    const modal = document.getElementById('admin-dashboard-modal');
    if (modal) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.classList.remove('opacity-100');
    }
};

window.logoutAdmin = function() {
    isAdminLoggedIn = false;
    closeAdminDashboard();
    showToast('Logged Out', 'Admin session ended.');
};

function switchAdminTab(targetTabId) {
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        if (btn.dataset.tab === targetTabId) {
            btn.classList.add('active', 'border-cocoa-950', 'text-cocoa-950');
            btn.classList.remove('border-transparent', 'text-cocoa-600');
        } else {
            btn.classList.remove('active', 'border-cocoa-950', 'text-cocoa-950');
            btn.classList.add('border-transparent', 'text-cocoa-600');
        }
    });

    document.querySelectorAll('.admin-tab-content').forEach(content => {
        if (content.id === targetTabId) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    });
}

// Product Management
function handleProductFormSubmit(e) {
    e.preventDefault();

    const editId = document.getElementById('prod-edit-id').value;
    const title = document.getElementById('prod-title').value.trim();
    const titleFont = document.getElementById('prod-title-font').value;
    const price = parseInt(document.getElementById('prod-price').value, 10);
    const unit = document.getElementById('prod-unit').value.trim() || 'per piece';
    const category = document.getElementById('prod-category').value;
    const tag = document.getElementById('prod-tag').value.trim();
    const desc = document.getElementById('prod-desc').value.trim();
    const descFont = document.getElementById('prod-desc-font').value;
    const descSize = document.getElementById('prod-desc-size').value;
    const notesRaw = document.getElementById('prod-notes').value.trim();
    const flavorNotes = notesRaw ? notesRaw.split(',').map(n => n.trim()).filter(Boolean) : [];

    let image = currentUploadedImageData;
    if (!image) {
        image = 'Heart-Shaped-Dark-Dry-Fruit-Chocolate.jpg';
    }

    const categoryLabels = {
        'bonbons': 'Artisanal Bonbon',
        'bars': 'Pahadi Gourmet Bar',
        'hampers': 'Celebration Hamper',
        'barks': 'Barks & Bites'
    };

    if (editId) {
        const index = products.findIndex(p => p.id === editId);
        if (index > -1) {
            products[index] = {
                ...products[index],
                title,
                titleFont,
                price,
                unit,
                category,
                categoryLabel: categoryLabels[category] || 'Specialty',
                tag,
                description: desc,
                descFont,
                descSize,
                flavorNotes,
                image
            };
            showToast('Chocolate Updated!', `${title} saved.`);
        }
    } else {
        const newProduct = {
            id: 'prod-' + Date.now(),
            title,
            titleFont,
            price,
            unit,
            category,
            categoryLabel: categoryLabels[category] || 'Specialty',
            tag,
            description: desc,
            descFont,
            descSize,
            flavorNotes,
            image
        };
        products.unshift(newProduct);
        showToast('Chocolate Added!', `${title} is now live in the collection.`);
    }

    saveProductsToStorage();
    renderProducts();
    renderAdminProductsList();
    resetProductForm();
}

window.editProduct = function(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;

    document.getElementById('prod-edit-id').value = prod.id;
    document.getElementById('prod-title').value = prod.title;
    document.getElementById('prod-title-font').value = prod.titleFont || 'font-serif';
    document.getElementById('prod-price').value = prod.price;
    document.getElementById('prod-unit').value = prod.unit || '';
    document.getElementById('prod-category').value = prod.category || 'bonbons';
    document.getElementById('prod-tag').value = prod.tag || '';
    document.getElementById('prod-desc').value = prod.description;
    document.getElementById('prod-desc-font').value = prod.descFont || 'font-sans';
    document.getElementById('prod-desc-size').value = prod.descSize || 'text-sm';
    document.getElementById('prod-notes').value = prod.flavorNotes ? prod.flavorNotes.join(', ') : '';

    currentUploadedImageData = prod.image;
    showProductImagePreview(prod.image);

    document.getElementById('product-form-title').textContent = `Editing: ${prod.title}`;
    document.getElementById('prod-submit-btn').innerHTML = `<i data-lucide="check" class="w-4 h-4 text-pahadi-gold"></i><span>Update Chocolate Changes</span>`;
    document.getElementById('cancel-edit-btn').classList.remove('hidden');
    lucide.createIcons();

    document.getElementById('admin-product-form').scrollIntoView({ behavior: 'smooth' });
};

window.resetProductForm = function() {
    const form = document.getElementById('admin-product-form');
    if (form) form.reset();
    document.getElementById('prod-edit-id').value = '';
    currentUploadedImageData = '';

    const imgEl = document.getElementById('prod-image-preview');
    const placeholderEl = document.getElementById('prod-image-placeholder');
    if (imgEl && placeholderEl) {
        imgEl.classList.add('hidden');
        placeholderEl.classList.remove('hidden');
    }

    document.getElementById('product-form-title').textContent = 'Add New Chocolate to Collection';
    document.getElementById('prod-submit-btn').innerHTML = `<i data-lucide="check" class="w-4 h-4 text-pahadi-gold"></i><span>Save Chocolate to Collection</span>`;
    document.getElementById('cancel-edit-btn').classList.add('hidden');
    lucide.createIcons();
};

window.deleteProduct = function(id) {
    const prod = products.find(p => p.id === id);
    const title = prod ? prod.title : 'Item';

    if (confirm(`Are you sure you want to delete "${title}" from the collection?`)) {
        products = products.filter(p => p.id !== id);
        saveProductsToStorage();
        renderProducts();
        renderAdminProductsList();
        showToast('Deleted', `"${title}" was removed.`);
    }
};

function renderAdminProductsList() {
    const countEl = document.getElementById('admin-product-count');
    const tableEl = document.getElementById('admin-products-table');
    if (countEl) countEl.textContent = products.length;
    if (!tableEl) return;

    if (products.length === 0) {
        tableEl.innerHTML = `<p class="text-xs text-cocoa-500 py-4 text-center">No chocolates currently in collection. Add one above!</p>`;
        return;
    }

    tableEl.innerHTML = products.map(prod => `
        <div class="p-3 rounded-2xl border border-cocoa-200 bg-[#FCFAF6] flex items-center justify-between gap-3 hover:bg-white transition-colors">
            <div class="flex items-center gap-3 min-w-0">
                <img src="${prod.image}" alt="${prod.title}" class="w-12 h-12 rounded-xl object-cover bg-cocoa-200 flex-shrink-0">
                <div class="min-w-0">
                    <div class="flex items-center gap-2">
                        <h5 class="text-xs font-bold text-cocoa-950 truncate">${prod.title}</h5>
                        <span class="text-[9px] bg-cocoa-100 text-cocoa-700 px-1.5 py-0.5 rounded font-mono">${prod.titleFont || 'serif'}</span>
                    </div>
                    <p class="text-[11px] text-cocoa-600 font-semibold">
                        <span class="text-pahadi-pine">₹${prod.price}</span> • ${prod.category} • ${prod.unit || 'unit'}
                    </p>
                </div>
            </div>

            <div class="flex items-center gap-2 flex-shrink-0">
                <button onclick="editProduct('${prod.id}')" class="p-2 rounded-xl bg-cocoa-100 hover:bg-cocoa-200 text-cocoa-800 text-xs font-semibold transition-colors flex items-center gap-1" title="Edit Chocolate">
                    <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                    <span class="hidden sm:inline">Edit</span>
                </button>
                <button onclick="deleteProduct('${prod.id}')" class="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold transition-colors flex items-center gap-1" title="Delete Chocolate">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                    <span class="hidden sm:inline">Delete</span>
                </button>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// Reviews Management
function handleReviewFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('rev-name').value.trim();
    const rating = parseInt(document.getElementById('rev-rating').value, 10);
    const occasion = document.getElementById('rev-occasion').value.trim();
    const text = document.getElementById('rev-text').value.trim();

    const newRev = {
        id: 'rev-' + Date.now(),
        name,
        rating,
        occasion,
        text
    };

    reviews.unshift(newRev);
    saveReviewsToStorage();
    renderReviews();
    renderAdminReviewsList();
    document.getElementById('admin-review-form').reset();
    showToast('Review Added!', 'New review is now displayed on website.');
}

window.deleteReview = function(id) {
    if (confirm('Are you sure you want to delete this review from the website?')) {
        reviews = reviews.filter(r => r.id !== id);
        saveReviewsToStorage();
        renderReviews();
        renderAdminReviewsList();
        showToast('Review Deleted', 'Review was removed.');
    }
};

function renderAdminReviewsList() {
    const countEl = document.getElementById('admin-review-count');
    const tableEl = document.getElementById('admin-reviews-table');
    if (countEl) countEl.textContent = reviews.length;
    if (!tableEl) return;

    if (reviews.length === 0) {
        tableEl.innerHTML = `<p class="text-xs text-cocoa-500 py-4 text-center">No reviews on website. You can add customer feedback above!</p>`;
        return;
    }

    tableEl.innerHTML = reviews.map(rev => {
        const stars = '★'.repeat(rev.rating || 5);
        return `
            <div class="p-3.5 rounded-2xl border border-cocoa-200 bg-[#FCFAF6] flex items-start justify-between gap-3 hover:bg-white transition-colors">
                <div class="space-y-1 min-w-0">
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-bold text-cocoa-950">${rev.name}</span>
                        <span class="text-xs text-pahadi-gold">${stars}</span>
                        ${rev.occasion ? `<span class="text-[10px] text-cocoa-500 bg-white px-2 py-0.5 rounded border border-cocoa-200">${rev.occasion}</span>` : ''}
                    </div>
                    <p class="text-xs text-cocoa-700 italic">"${rev.text}"</p>
                </div>

                <button onclick="deleteReview('${rev.id}')" class="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold transition-colors flex items-center gap-1 flex-shrink-0" title="Delete Review">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                    <span>Delete</span>
                </button>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

// Brand Settings
function loadBrandFormValues() {
    const brandNameInput = document.getElementById('setting-brand-name');
    const brandSubInput = document.getElementById('setting-brand-sub');
    const pageTitleInput = document.getElementById('setting-page-title');
    const taglineInput = document.getElementById('setting-brand-tagline');
    const waInput = document.getElementById('setting-whatsapp-num');

    if (brandNameInput) brandNameInput.value = brandSettings.brandName;
    if (brandSubInput) brandSubInput.value = brandSettings.brandSub;
    if (pageTitleInput) pageTitleInput.value = brandSettings.pageTitle;
    if (taglineInput) taglineInput.value = brandSettings.tagline;
    if (waInput) waInput.value = brandSettings.whatsapp;
}

function handleBrandFormSubmit(e) {
    e.preventDefault();

    brandSettings.brandName = document.getElementById('setting-brand-name').value.trim() || 'ATUKSH';
    brandSettings.brandSub = document.getElementById('setting-brand-sub').value.trim() || 'CHOCOLATERIE • PANCHKULA';
    brandSettings.pageTitle = document.getElementById('setting-page-title').value.trim() || `${brandSettings.brandName} – ${brandSettings.brandSub}`;
    brandSettings.tagline = document.getElementById('setting-brand-tagline').value.trim() || 'A Little Pahadi Love in Every Bite.';
    brandSettings.whatsapp = document.getElementById('setting-whatsapp-num').value.trim().replace(/[^0-9]/g, '') || '919876543210';
    brandSettings.customLogo = 'atuksh-emblem.png';

    saveBrandToStorage();
    applyBrandSettings();
    showToast('Brand Settings Saved!', 'Website title, tagline, and helpline updated.');
}

// Password Change
function handlePasswordFormSubmit(e) {
    e.preventDefault();
    const current = document.getElementById('pwd-current').value;
    const newPwd = document.getElementById('pwd-new').value;
    const confirmPwd = document.getElementById('pwd-confirm').value;

    if (current !== adminPassword) {
        showToast('Password Error', 'Current password does not match.', true);
        return;
    }

    if (newPwd.length < 4) {
        showToast('Password Weak', 'New password must have at least 4 characters.', true);
        return;
    }

    if (newPwd !== confirmPwd) {
        showToast('Mismatch', 'New password and confirmation do not match.', true);
        return;
    }

    adminPassword = newPwd;
    localStorage.setItem('atuksh_admin_pwd', newPwd);
    document.getElementById('admin-password-form').reset();
    showToast('Password Changed!', 'Your new admin password is saved.');
}

/* ==========================================================================
   REAL-TIME FIREBASE FIRESTORE & RTDB SYNC ENGINE
   ========================================================================== */

// Official Firebase configuration for Atuksh Chocolaterie
const defaultFirebaseConfig = {
    apiKey: "AIzaSyA0kQh82xHG_xG7cqVR-aioiu2G6EFJZdU",
    authDomain: "atuksh-chocolaterie.firebaseapp.com",
    databaseURL: "https://atuksh-chocolaterie-default-rtdb.firebaseio.com",
    projectId: "atuksh-chocolaterie",
    storageBucket: "atuksh-chocolaterie.firebasestorage.app",
    messagingSenderId: "65676546604",
    appId: "1:65676546604:web:9522e32bb163bbd03d7789",
    measurementId: "G-EKM2Q6SDBM",
    collection: "atuksh_store"
};

function loadRealtimeConfigForm() {
    const savedConfig = localStorage.getItem('atuksh_fb_config');
    let cfg = defaultFirebaseConfig;
    if (savedConfig) {
        try { cfg = { ...defaultFirebaseConfig, ...JSON.parse(savedConfig) }; } catch (e) {}
    }

    if (document.getElementById('fb-apiKey')) document.getElementById('fb-apiKey').value = cfg.apiKey || '';
    if (document.getElementById('fb-projectId')) document.getElementById('fb-projectId').value = cfg.projectId || '';
    if (document.getElementById('fb-appId')) document.getElementById('fb-appId').value = cfg.appId || '';
    if (document.getElementById('fb-collection')) document.getElementById('fb-collection').value = cfg.collection || 'atuksh_store';

    updateCloudStatusUI();
}

function initFirebaseRealtimeSync() {
    if (typeof firebase === 'undefined') {
        console.warn('Firebase SDK not yet loaded.');
        updateCloudStatusUI(false);
        return;
    }

    const savedConfig = localStorage.getItem('atuksh_fb_config');
    let config = defaultFirebaseConfig;
    if (savedConfig) {
        try { config = { ...defaultFirebaseConfig, ...JSON.parse(savedConfig) }; } catch (e) {}
    }

    try {
        if (!firebase.apps.length) {
            firebaseApp = firebase.initializeApp(config);
        } else {
            firebaseApp = firebase.app();
        }

        const collectionName = config.collection || 'atuksh_store';

        // 1. Initialize Realtime Database (Primary for lightning-fast RTDB sync)
        if (firebase.database && (config.databaseURL || config.projectId)) {
            try {
                rtdbInstance = firebase.database();
                rtdbRef = rtdbInstance.ref('atuksh_store');

                rtdbRef.on('value', (snapshot) => {
                    const cloudData = snapshot.val();
                    if (cloudData) {
                        console.log('⚡ Real-time update received from Realtime Database:', cloudData);

                        if (cloudData.products && Array.isArray(cloudData.products)) {
                            products = cloudData.products;
                            localStorage.setItem('atuksh_products', JSON.stringify(products));
                            renderProducts();
                            renderAdminProductsList();
                        }

                        if (cloudData.reviews && Array.isArray(cloudData.reviews)) {
                            reviews = cloudData.reviews;
                            localStorage.setItem('atuksh_reviews', JSON.stringify(reviews));
                            renderReviews();
                            renderAdminReviewsList();
                        }

                        if (cloudData.brandSettings) {
                            brandSettings = { ...defaultBrandSettings, ...cloudData.brandSettings };
                            localStorage.setItem('atuksh_brand', JSON.stringify(brandSettings));
                            applyBrandSettings();
                            loadBrandFormValues();
                        }

                        if (cloudData.orders && Array.isArray(cloudData.orders)) {
                            orders = cloudData.orders;
                            localStorage.setItem('atuksh_orders', JSON.stringify(orders));
                            renderAdminOrdersList();
                        }

                        isCloudConnected = true;
                        updateCloudStatusUI(true);
                    } else {
                        // RTDB is currently empty/null (fresh setup) -> Seed local data
                        console.log('RTDB root is null; seeding initial data to cloud...');
                        pushLocalDataToCloud(false);
                    }
                }, (err) => {
                    console.warn('RTDB permission/sync notice:', err);
                });

                isCloudConnected = true;
                updateCloudStatusUI(true);
            } catch (rtdbErr) {
                console.warn('RTDB initialization notice:', rtdbErr);
            }
        }

        // 2. Also attach Firestore if enabled
        if (firebase.firestore) {
            try {
                firestoreDb = firebase.firestore();

                realtimeUnsubscribe = firestoreDb.collection(collectionName).doc('main_data').onSnapshot((docSnapshot) => {
                    if (docSnapshot.exists) {
                        const cloudData = docSnapshot.data();
                        console.log('⚡ Real-time cloud sync payload received from Firestore:', cloudData);

                        if (cloudData.products && Array.isArray(cloudData.products)) {
                            products = cloudData.products;
                            localStorage.setItem('atuksh_products', JSON.stringify(products));
                            renderProducts();
                            renderAdminProductsList();
                        }

                        if (cloudData.reviews && Array.isArray(cloudData.reviews)) {
                            reviews = cloudData.reviews;
                            localStorage.setItem('atuksh_reviews', JSON.stringify(reviews));
                            renderReviews();
                            renderAdminReviewsList();
                        }

                        if (cloudData.brandSettings) {
                            brandSettings = { ...defaultBrandSettings, ...cloudData.brandSettings };
                            localStorage.setItem('atuksh_brand', JSON.stringify(brandSettings));
                            applyBrandSettings();
                            loadBrandFormValues();
                        }

                        if (cloudData.orders && Array.isArray(cloudData.orders)) {
                            orders = cloudData.orders;
                            localStorage.setItem('atuksh_orders', JSON.stringify(orders));
                            renderAdminOrdersList();
                        }

                        isCloudConnected = true;
                        updateCloudStatusUI(true);
                    }
                }, (error) => {
                    console.warn('Firestore notice (RTDB remains primary):', error.message);
                });
            } catch (fsErr) {
                console.warn('Firestore init notice:', fsErr);
            }
        }
    } catch (e) {
        console.warn('Firebase Realtime Init Error:', e);
        updateCloudStatusUI(false);
    }
}

function updateCloudStatusUI(connected = isCloudConnected) {
    const statusPill = document.getElementById('realtime-status-pill');
    const statusDot = document.getElementById('realtime-status-dot');
    const statusText = document.getElementById('realtime-status-text');
    const cloudBadge = document.getElementById('cloud-connection-status-badge');
    const cloudStatusLabel = document.getElementById('cloud-status-label');

    if (connected) {
        if (statusPill) statusPill.className = 'text-[10px] bg-emerald-100 text-emerald-900 border border-emerald-300 px-2.5 py-0.5 rounded-full font-sans font-semibold flex items-center gap-1.5 shadow-sm';
        if (statusDot) statusDot.className = 'w-2 h-2 rounded-full bg-emerald-500 animate-ping';
        if (statusText) statusText.textContent = '⚡ Real-Time Cloud: Connected';
        if (cloudBadge) cloudBadge.className = 'text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center gap-1.5';
        if (cloudStatusLabel) cloudStatusLabel.textContent = '🟢 Cloud Sync: Live Online';
    } else {
        if (statusPill) statusPill.className = 'text-[10px] bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded-full font-sans font-semibold flex items-center gap-1.5 shadow-sm';
        if (statusDot) statusDot.className = 'w-2 h-2 rounded-full bg-amber-500 animate-pulse';
        if (statusText) statusText.textContent = 'Local Mode';
        if (cloudBadge) cloudBadge.className = 'text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-300 flex items-center gap-1.5';
        if (cloudStatusLabel) cloudStatusLabel.textContent = 'Local Storage Mode';
    }
}

function handleRealtimeConfigSubmit(e) {
    e.preventDefault();

    const apiKey = document.getElementById('fb-apiKey').value.trim();
    const projectId = document.getElementById('fb-projectId').value.trim();
    const appId = document.getElementById('fb-appId').value.trim();
    const collection = document.getElementById('fb-collection').value.trim() || 'atuksh_store';

    if (!apiKey || !projectId) {
        showToast('Missing Config', 'Please provide at least API Key and Project ID.', true);
        return;
    }

    const config = { ...defaultFirebaseConfig, apiKey, projectId, appId, collection };
    localStorage.setItem('atuksh_fb_config', JSON.stringify(config));

    showToast('Connecting...', 'Initializing real-time cloud connection.');
    initFirebaseRealtimeSync();

    setTimeout(() => {
        pushLocalDataToCloud(true);
    }, 1500);
}

window.pushLocalDataToCloud = function(showAlert = true) {
    if (!rtdbRef && !firestoreDb) {
        if (showAlert) showToast('Not Connected', 'Please enter your Firebase config and connect first.', true);
        return;
    }

    const payload = {
        products,
        reviews,
        brandSettings,
        orders,
        lastUpdated: new Date().toISOString()
    };

    let pushSuccessCount = 0;

    // Push to Realtime Database
    if (rtdbRef) {
        rtdbRef.set(payload)
            .then(() => {
                isCloudConnected = true;
                updateCloudStatusUI(true);
                pushSuccessCount++;
                if (showAlert && pushSuccessCount === 1) {
                    showToast('Cloud Synchronized!', 'All chocolates, orders, reviews & brand settings pushed to Realtime Database.');
                }
            })
            .catch(err => {
                console.error('RTDB sync error:', err);
                if (showAlert && pushSuccessCount === 0) {
                    showToast('Permission Notice', 'Please set Realtime Database Rules to allow read & write.', true);
                }
            });
    }

    // Push to Firestore if available
    if (firestoreDb) {
        const savedConfig = localStorage.getItem('atuksh_fb_config');
        let collectionName = 'atuksh_store';
        if (savedConfig) {
            try { collectionName = JSON.parse(savedConfig).collection || 'atuksh_store'; } catch (e) {}
        }

        firestoreDb.collection(collectionName).doc('main_data').set(payload)
            .then(() => {
                isCloudConnected = true;
                updateCloudStatusUI(true);
                pushSuccessCount++;
                if (showAlert && pushSuccessCount === 1) {
                    showToast('Cloud Synchronized!', 'All chocolates, orders, reviews & brand settings pushed to cloud.');
                }
            })
            .catch(err => {
                console.warn('Firestore sync note:', err.message);
            });
    }
};

function syncToCloudIfEnabled(dataType, data) {
    if (!isCloudConnected) return;
    try {
        if (rtdbRef) {
            rtdbRef.child(dataType).set(data).catch(err => console.warn('RTDB background sync error:', err));
            rtdbRef.child('lastUpdated').set(new Date().toISOString()).catch(() => {});
        }

        if (firestoreDb) {
            const savedConfig = localStorage.getItem('atuksh_fb_config');
            let collectionName = 'atuksh_store';
            if (savedConfig) {
                try { collectionName = JSON.parse(savedConfig).collection || 'atuksh_store'; } catch (e) {}
            }

            const updateObj = { [dataType]: data, lastUpdated: new Date().toISOString() };
            firestoreDb.collection(collectionName).doc('main_data').set(updateObj, { merge: true })
                .catch(err => console.warn('Firestore background sync error:', err));
        }
    } catch (e) {
        console.warn('Sync error:', e);
    }
}

window.disconnectCloudSync = function() {
    if (confirm('Disconnect real-time cloud sync and revert to local storage?')) {
        if (realtimeUnsubscribe) {
            try { realtimeUnsubscribe(); } catch (e) {}
        }
        if (rtdbRef) {
            try { rtdbRef.off(); } catch (e) {}
        }
        localStorage.removeItem('atuksh_fb_config');
        firestoreDb = null;
        rtdbRef = null;
        rtdbInstance = null;
        isCloudConnected = false;
        updateCloudStatusUI(false);
        showToast('Disconnected', 'Real-time cloud sync disabled. Data remains saved locally.');
    }
};
