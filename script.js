// Mobile menu toggle
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Cart functionality using localStorage
class CartManager {
    static getCart() {
        return JSON.parse(localStorage.getItem('cart') || '[]');
    }

    static saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        this.updateCartIcon();
    }

    static addToCart(product) {
        const cart = this.getCart();
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += product.quantity || 1;
        } else {
            cart.push({
                ...product,
                quantity: product.quantity || 1
            });
        }
        
        this.saveCart(cart);
        this.showNotification('Product added to cart!');
    }

    static removeFromCart(productId) {
        const cart = this.getCart().filter(item => item.id !== productId);
        this.saveCart(cart);
        if (window.location.pathname.includes('cart.html')) {
            location.reload(); // Reload to update cart display
        }
    }

    static updateQuantity(productId, quantity) {
        const cart = this.getCart();
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, parseInt(quantity) || 1);
            this.saveCart(cart);
            if (window.location.pathname.includes('cart.html')) {
                location.reload();
            }
        }
    }

    static getTotal() {
        const cart = this.getCart();
        return cart.reduce((total, item) => total + (parseFloat(item.price) || 0) * (item.quantity || 1), 0);
    }

    static updateCartIcon() {
        const cart = this.getCart();
        const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        // You can add cart count badge here if needed
        console.log(`Cart has ${count} items`);
    }

    static showNotification(message) {
        // Simple notification
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 10000;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }
}

// Initialize cart icon on page load
document.addEventListener('DOMContentLoaded', () => {
    CartManager.updateCartIcon();
    
    // Handle add to cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productCard = btn.closest('.pro') || btn.closest('.single-pro-details');
            if (productCard) {
                const product = {
                    id: productCard.dataset.productId || Date.now().toString(),
                    name: productCard.querySelector('h5')?.textContent || 'Product',
                    price: productCard.querySelector('h4')?.textContent.replace(/[^0-9.]/g, '') || '0',
                    image: productCard.querySelector('img')?.src || '',
                    quantity: parseInt(productCard.querySelector('input[type="number"]')?.value || '1')
                };
                CartManager.addToCart(product);
            }
        });
    });

    // Load and display cart items if on cart page
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
    }
});

// Load cart items and display them
function loadCartItems() {
    const cart = CartManager.getCart();
    const tbody = document.querySelector('#cart tbody');
    const subtotalElement = document.querySelector('#subtotal table tr:first-child td:last-child');
    const totalElement = document.querySelector('#subtotal table tr:last-child td:last-child strong');
    
    if (!tbody) return;
    
    if (cart.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 40px;">Your cart is empty. <a href="shop.html">Start Shopping</a></td></tr>';
        if (subtotalElement) subtotalElement.textContent = '$0';
        if (totalElement) totalElement.textContent = '$0';
        return;
    }
    
    tbody.innerHTML = cart.map(item => {
        const price = parseFloat(item.price) || 0;
        const quantity = item.quantity || 1;
        const subtotal = (price * quantity).toFixed(2);
        return `
            <tr>
                <td><a href="#" onclick="CartManager.removeFromCart('${item.id}'); return false;">✕</a></td>
                <td><img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover;"></td>
                <td>${item.name}</td>
                <td>$${price.toFixed(2)}</td>
                <td><input type="number" value="${quantity}" min="1" onchange="CartManager.updateQuantity('${item.id}', this.value)"></td>
                <td>$${subtotal}</td>
            </tr>
        `;
    }).join('');
    
    const total = CartManager.getTotal();
    if (subtotalElement) subtotalElement.textContent = `$${total.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
}

// Make CartManager available globally
window.CartManager = CartManager;