<template>
  <div class="app-container">
    <!-- Header Section -->
    <header class="header">
      <div class="container header-content">
        <div class="logo">
          <h1>Renty</h1>
        </div>
        <nav class="nav-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <main>
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h2>Discover Amazing Products</h2>
            <p>Shop now and enjoy exclusive discounts!</p>
            <button class="cta-btn">Shop Now</button>
          </div>
        </div>
      </section>

      <!-- Featured Categories -->
      <section class="categories">
        <div class="container">
          <h2 class="section-title">Shop by Category</h2>
          <div class="category-grid">
            <div class="category-card">
              <img src="https://via.placeholder.com/300" alt="Category 1" />
              <h3>Category 1</h3>
            </div>
            <div class="category-card">
              <img src="https://via.placeholder.com/300" alt="Category 2" />
              <h3>Category 2</h3>
            </div>
            <div class="category-card">
              <img src="https://via.placeholder.com/300" alt="Category 3" />
              <h3>Category 3</h3>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Products -->
      <section class="products">
        <div class="container">
          <h2 class="section-title">Featured Products</h2>
          <div class="product-grid">
            <div class="product-card">
              <img src="https://via.placeholder.com/300" alt="Product 1" />
              <div class="product-info">
                <h3>Product 1</h3>
                <p class="price">$29.99</p>
                <button class="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div class="product-card">
              <img src="https://via.placeholder.com/300" alt="Product 2" />
              <div class="product-info">
                <h3>Product 2</h3>
                <p class="price">$39.99</p>
                <button class="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div class="product-card">
              <img src="https://via.placeholder.com/300" alt="Product 3" />
              <div class="product-info">
                <h3>Product 3</h3>
                <p class="price">$49.99</p>
                <button class="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-content">
        <p>&copy; 2025 ShopEase. All Rights Reserved.</p>
        <div class="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Base Styles */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header Styles */
.header {
  background: #2c3e50;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  color: white;
  font-size: 2rem;
  font-weight: 700;
}

.nav-menu ul {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-menu a:hover {
  color: #3498db;
}

/* Hero Section */
.hero {
  background: #3498db;
  color: white;
  padding: 6rem 0;
  flex: 1;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.cta-btn {
  background: #e74c3c;
  color: white;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.cta-btn:hover {
  background: #c0392b;
}

/* Categories Section */
.categories {
  padding: 4rem 0;
  background: #f8f9fa;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.category-card h3 {
  text-align: center;
  padding: 1.5rem;
  color: #2c3e50;
}

/* Products Section */
.products {
  padding: 4rem 0;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.product-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.product-info {
  padding: 1.5rem;
  text-align: center;
}

.price {
  color: #e74c3c;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 1rem 0;
}

.add-to-cart {
  background: #3498db;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  transition: background 0.3s ease;
}

.add-to-cart:hover {
  background: #2980b9;
}

/* Footer Styles */
.footer {
  background: #2c3e50;
  color: white;
  padding: 2rem 0;
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #3498db;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-menu ul {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .hero h2 {
    font-size: 2rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>