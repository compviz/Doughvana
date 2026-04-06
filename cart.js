/**
 * Doughvana Global Cart Management
 * Uses localStorage to persist cart state across independent HTML pages.
 */

const Cart = {
  get() {
    const cart = localStorage.getItem('doughvana_cart');
    return cart ? JSON.parse(cart) : [];
  },

  save(cart) {
    localStorage.setItem('doughvana_cart', JSON.stringify(cart));
    // Dispatch a custom event to notify other parts of the page (e.g. mini-cart pings)
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: cart }));
  },

  add(item) {
    const cart = this.get();
    const existing = cart.find(i => i.name === item.name);
    
    if (existing) {
      existing.quantity += (item.quantity || 1);
    } else {
      cart.push({
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: item.quantity || 1
      });
    }
    
    this.save(cart);
    this.showToast(`Added ${item.name} to cart! 🍩`);
  },

  remove(name) {
    let cart = this.get();
    cart = cart.filter(i => i.name !== name);
    this.save(cart);
  },

  updateQuantity(name, newQty) {
    const cart = this.get();
    const item = cart.find(i => i.name === name);
    if (item) {
      item.quantity = Math.max(1, newQty);
      this.save(cart);
    }
  },

  getTotal() {
    return this.get().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  clear() {
    localStorage.removeItem('doughvana_cart');
    this.save([]);
  },

  // Helper for simple visual feedback
  showToast(message) {
    let toast = document.getElementById('cart-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cart-toast';
            toast.className = 'fixed bottom-28 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-6 py-3 rounded-full font-bold shadow-2xl z-[100] transition-all opacity-0 pointer-events-none transform translate-y-4';
      document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    }, 2500);
  }
};

// Initialize listeners if needed
document.addEventListener('DOMContentLoaded', () => {
    // We could auto-update cart counters here if we had any
});
