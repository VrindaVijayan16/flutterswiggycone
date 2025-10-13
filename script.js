// Swiggy Cone Web App Script

// Data Management with localStorage
class DataManager {
  static getProducts() {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : this.getSampleProducts();
  }

  static saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  static getCart(userEmail = 'guest') {
    const carts = JSON.parse(localStorage.getItem('carts') || '{}');
    return carts[userEmail] || [];
  }

  static saveCart(cart, userEmail = 'guest') {
    const carts = JSON.parse(localStorage.getItem('carts') || '{}');
    carts[userEmail] = cart;
    localStorage.setItem('carts', JSON.stringify(carts));
  }

  static getOrders() {
    const orders = localStorage.getItem('orders');
    return orders ? JSON.parse(orders) : [];
  }

  static saveOrders(orders) {
    localStorage.setItem('orders', JSON.stringify(orders));
  }

  static getFavorites(userEmail = 'guest') {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    return favorites[userEmail] || [];
  }

  static saveFavorites(favorites, userEmail = 'guest') {
    const favs = JSON.parse(localStorage.getItem('favorites') || '{}');
    favs[userEmail] = favorites;
    localStorage.setItem('favorites', JSON.stringify(favs));
  }

  static getSettings() {
    const settings = localStorage.getItem('settings');
    return settings ? JSON.parse(settings) : { darkMode: false, notifications: true, language: 'en' };
  }

  static saveSettings(settings) {
    localStorage.setItem('settings', JSON.stringify(settings));
  }

  static getSampleProducts() {
    return [
      { id: '1', flavor: 'Vanilla', price: 299, image: 'https://tse2.mm.bing.net/th/id/OIP.m81IWuQqz4HBSX9L44Jx8QHaLH?pid=Api&P=0&h=180', description: 'Pure. Creamy. Classic. — the original taste of happiness! 🍦✨' },
      { id: '2', flavor: 'Chocolate', price: 349, image: 'https://tse3.mm.bing.net/th/id/OIP._AXCyNN_TpsRCzl3UxayJAHaHa?pid=Api&P=0&h=180', description: 'Decadent. Creamy. Unforgettable. — pure chocolate bliss! 🍫🍦' },
      { id: '3', flavor: 'Strawberry', price: 329, image: 'https://tse1.mm.bing.net/th/id/OIP.wWk0y3UMyiDmIuTr9evbXQHaL0?pid=Api&P=0&h=180', description: 'Fresh. Fruity. Irresistible. — the scoop that makes you smile! 🍓🍦' },
      { id: '4', flavor: 'Mint', price: 319, image: 'https://tse4.mm.bing.net/th/id/OIP.2hcMnMQghrNYXi3JmTDs7AHaLH?pid=Api&P=0&h=180', description: 'Cool, refreshing flavor that freshens your day! 💚🍦' },
      { id: '5', flavor: 'Avocado', price: 99, image: 'https://thebigmansworld.com/wp-content/uploads/2024/04/avocado-ice-cream-1024x1536.jpg', description: 'A treat that’s as wholesome as it is delicious — refreshing, natural, and irresistibly smooth! 💚🥑🍦.' },
      { id: '6', flavor: 'Mango', price: 59, image: 'https://static.vecteezy.com/system/resources/previews/049/159/996/non_2x/delicious-mango-ice-cream-cone-with-fresh-mango-pieces-and-transparent-background-png.png', description: 'Fresh, fruity, and oh-so-creamy — the taste of summer, anytime! ☀️🥭🍦.' },
      { id: '7', flavor: 'Blueberry', price: 359, image: 'https://static.vecteezy.com/system/resources/previews/049/159/992/large_2x/refreshing-blueberry-ice-cream-cone-packed-with-blueberry-bits-png.png', description: 'A cool, fruity escape — sweet, creamy, and irresistibly blue! 🫐🍦✨.' },
      { id: '8', flavor: 'Cookies & Cream', price: 359, image: 'https://tse2.mm.bing.net/th/id/OIP.3kh8p2GxLKElnHat_1DSugAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3', description: 'Rich, creamy, and oh-so-dreamy — the cookie lover’s perfect scoop! 🍪🍦✨.' },
      { id: '9', flavor: 'Pistachio', price: 359, image: 'https://tse1.mm.bing.net/th/id/OIP.FyA1sKYtGswNORGD4Ryd9AAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3', description: 'Sophisticated, nutty, and oh-so-creamy — a timeless classic in every cone! 🌰🍦✨.' },
      { id: '10', flavor: 'Coconut', price: 359, image: 'https://tse4.mm.bing.net/th/id/OIP.4uWO9Bh_ifufpqHE6tETIgHaLH?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3', description: 'Tropical. Creamy. Blissful. — the island flavor you’ll crave! 🌴🍦🥥.' },
      { id: '11', flavor: 'Lemon', price: 359, image: 'https://tse4.mm.bing.net/th/id/OIP.4uWO9Bh_ifufpqHE6tETIgHaLH?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3', description: 'Zesty. Creamy. Refreshing. — the taste that wakes up your senses! ☀️🍋🍦.' },
      { id: '12', flavor: 'Cookie Dough', price: 359, image: 'https://tse4.mm.bing.net/th/id/OIP.4uWO9Bh_ifufpqHE6tETIgHaLH?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3', description: 'Sweet. Chunky. Irresistible. — the dough-licious flavor you can’t resist! 🍪🍦✨.' },
      { id: '13', flavor: 'Birthday Cake', price: 359, image: 'https://tse4.mm.bing.net/th/id/OIP.W4tWc-3_BNuGm0As3tFqkQHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3', description: 'Fun. Sweet. Festive. — the scoop that makes every moment a party! 🎉🍦✨.' },
      { id: '14', flavor: 'Moose Tracks', price: 359, image: 'https://tse2.mm.bing.net/th/id/OIP.MnYH4LHlvG-xatAsM3YzHwAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3', description: 'Chocolatey. Chunky. Wildly Delicious. — the scoop that leads the pack! 🍫🍦✨.' },
      { id: '15', flavor: 'Cotton Candy', price: 359, image: 'https://i.pinimg.com/originals/8d/14/01/8d1401339f55306702f555f5e5192b6b.png', description: 'Whimsical. Sweet. Magical. — the flavor that melts hearts! 🍭🍦✨.' },
      { id: '16', flavor: 'Cherry', price: 359, image: 'https://img.freepik.com/premium-photo/cherry-ice-cream-cone-with-cherry-top_852524-806.jpg?w=2000', description: 'Sweet. Juicy. Classic. — the cherry on top of every day! 🍒🍦✨' },
    ];
  }

  static initData() {
    if (!localStorage.getItem('products')) {
      this.saveProducts(this.getSampleProducts());
    }
  }
}

// Utility functions
function formatPrice(price) {
  return `₹${price}`;
}

function showMessage(message, type = 'info') {
  // Simple alert for now
  alert(message);
}

function navigateTo(page) {
  window.location.href = page;
}

// Initialize data on load
DataManager.initData();
