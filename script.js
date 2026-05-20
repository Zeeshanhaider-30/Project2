
 // --- 20 Object Apparel Database Array ---
        const productsDataset = [
            // MEN'S APPAREL - 10 Products
            { id: 1, name: "Premium Slim-Fit Denim Jacket", price: 79.99, category: "men", img: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=400&auto=format&fit=crop&q=80" },
            { id: 2, name: "Classic Organic Cotton Crewneck", price: 24.99, category: "men", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&auto=format&fit=crop&q=80" },
            { id: 3, name: "Vintage Oversized Plaid Flannel", price: 39.99, category: "men", img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&auto=format&fit=crop&q=80" },
            { id: 4, name: "Urban Cargo Workwear Pants", price: 54.99, category: "men", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&auto=format&fit=crop&q=80" },
            { id: 5, name: "Minimalist Lightweight Bomber", price: 89.99, category: "men", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop&q=80" },
            { id: 6, name: "Linen Summer Button-Down Shirt", price: 44.99, category: "men", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80" },
            { id: 7, name: "Athletic-Fit Fleece Joggers", price: 34.99, category: "men", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&auto=format&fit=crop&q=80" },
            { id: 8, name: "Tailored Smart Casual Blazer", price: 129.99, category: "men", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80" },
            { id: 9, name: "Heavyweight Box-Fit Graphic Hoodie", price: 49.99, category: "men", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&auto=format&fit=crop&q=80" },
            { id: 10, name: "Chino Performance Stretch Shorts", price: 29.99, category: "men", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&auto=format&fit=crop&q=80" },

            // WOMEN'S APPAREL - 10 Products
            { id: 11, name: "Floral Wrap Summer Midi Dress", price: 64.99, category: "women", img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&auto=format&fit=crop&q=80" },
            { id: 12, name: "High-Waisted Classic Wide Leg Jeans", price: 59.99, category: "women", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&auto=format&fit=crop&q=80" },
            { id: 13, name: "Cozy Knit Oversized Sweater", price: 45.00, category: "women", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format&fit=crop&q=80" },
            { id: 14, name: "Sleek Tailored Double-Breasted Trench", price: 149.99, category: "women", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&auto=format&fit=crop&q=80" },
            { id: 15, name: "Ribbed Knit Crop Top & Skirt Set", price: 38.00, category: "women", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop&q=80" },
            { id: 16, name: "Boho Pleated Casual Blouse", price: 34.99, category: "women", img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=400&auto=format&fit=crop&q=80" },
            { id: 17, name: "Active Silhouette Stretch Leggings", price: 42.00, category: "women", img: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=400&auto=format&fit=crop&q=80" },
            { id: 18, name: "Satin Evening Slip Dress", price: 85.00, category: "women", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&auto=format&fit=crop&q=80" },
            { id: 19, name: "Casual Denim Utility Romper", price: 69.99, category: "women", img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&auto=format&fit=crop&q=80" },
            { id: 20, name: "Faux-Leather Accent Motorbike Jacket", price: 95.00, category: "women", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop&q=80" }
        ];

        let virtualCart = [];

        // --- Core Application Logic Initialization ---
        document.addEventListener("DOMContentLoaded", () => {
            renderProductGrid(productsDataset);
        });

        // --- SPA Page Router Module ---
        function switchPage(sectionId) {
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(sec => sec.classList.remove('active'));

            const targetSection = document.getElementById(sectionId);
            if(targetSection) targetSection.classList.add('active');

            const menuButtons = document.querySelectorAll('.nav-item');
            menuButtons.forEach(btn => {
                btn.classList.remove('active');
                if(btn.id === `link-${sectionId}`) btn.classList.add('active');
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // --- Product Rendering Engine ---
        function renderProductGrid(itemsList) {
            const container = document.getElementById('product-list-target');
            container.innerHTML = ""; 

            if(itemsList.length === 0) {
                container.innerHTML = "<p>No matching apparel items found.</p>";
                return;
            }

            itemsList.forEach(item => {
                const card = document.createElement('div');
                card.className = "product-card";
                card.innerHTML = `
                    <div>
                        <div class="product-img-holder">
                            <img src="${item.img}" alt="${item.name}">
                        </div>
                        <div class="product-details">
                            <span class="category-tag">${item.category}'s wear</span>
                            <h4>${item.name}</h4>
                        </div>
                    </div>
                    <div>
                        <div class="product-price">$${item.price.toFixed(2)}</div>
                        <button class="buy-now-btn small" onclick="addToCartContainer(${item.id})">Add to Bag</button>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // --- Catalog Filtering Systems ---
        function filterProducts(filterType) {
            // Update UI filter button views
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById(`filter-${filterType}`).classList.add('active');

            if(filterType === 'all') {
                renderProductGrid(productsDataset);
            } else {
                const filtered = productsDataset.filter(p => p.category === filterType);
                renderProductGrid(filtered);
            }
        }

        function filterCategoryFromSelection(catType) {
            switchPage('products');
            filterProducts(catType);
        }

        // --- Shopping Cart Processing Engine ---
        function addToCartContainer(productId) {
            const itemMatch = productsDataset.find(p => p.id === productId);
            if(itemMatch) {
                virtualCart.push(itemMatch);
                document.getElementById('cart-count').innerText = virtualCart.length;
                buildCartInterface();
                alert(`"${itemMatch.name}" has been added to your shopping bag!`);
            }
        }

        function buildCartInterface() {
            const displayBox = document.getElementById('cart-wrapper-box');
            if(virtualCart.length === 0) {
                displayBox.innerHTML = "<p>Your shopping bag is currently empty.</p>";
                return;
            }

            let calculatedTotal = 0;
            let structuredHtml = `
                <table class="cart-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            virtualCart.forEach(item => {
                calculatedTotal += item.price;
                structuredHtml += `
                    <tr>
                        <td><strong>${item.name}</strong></td>
                        <td style="text-transform: uppercase;">${item.category}</td>
                        <td>$${item.price.toFixed(2)}</td>
                    </tr>
                `;
            });

            structuredHtml += `
                        <tr>
                            <td><strong>Total Basket Cost</strong></td>
                            <td></td>
                            <td><strong>$${calculatedTotal.toFixed(2)}</strong></td>
                        </tr>
                    </tbody>
                </table>
                <button class="buy-now-btn" style="margin-top: 25px; font-size:1.1rem; padding:10px 30px;" onclick="alert('Proceeding to Checkout mock system...')">Checkout</button>
            `;
            displayBox.innerHTML = structuredHtml;
        }

        // --- Security Authentication Tab Toggles ---
        function toggleAuthForm(mode) {
            const loginF = document.getElementById('login-form');
            const signupF = document.getElementById('signup-form');
            const loginT = document.getElementById('login-tab-btn');
            const signupT = document.getElementById('signup-tab-btn');

            if(mode === 'login') {
                loginF.classList.add('active');
                signupF.classList.remove('active');
                loginT.classList.add('active');
                signupT.classList.remove('active');
            } else {
                signupF.classList.add('active');
                loginF.classList.remove('active');
                signupT.classList.add('active');
                loginT.classList.remove('active');
            }
        }

        function handleAuth(event, actionMode) {
            event.preventDefault();
            if(actionMode === 'signup') {
                const name = document.getElementById('signup-name').value;
                alert(`Account created successfully for ${name}! Please login now.`);
                toggleAuthForm('login');
            } else {
                const email = document.getElementById('login-email').value;
                alert(`Welcome back! Successfully logged in as ${email}`);
                switchPage('home');
            }
        }