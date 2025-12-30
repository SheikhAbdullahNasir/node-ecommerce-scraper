<!-- # Node.js E-Commerce Scraper

A scalable web scraper built with Crawlee and Playwright. It recursively navigates a demo e-commerce site, handles pagination, extracts structured product data (SKU, Price, Stock), and exports results to CSV.


Tech Stack: Node.js, Crawlee, Playwright.

How to Run:
1. npm install
2. npm start -->



# Node.js E-Commerce Scraper (Crawlee + Playwright)

A scalable, production-grade web scraper built with **Node.js**, **Crawlee**, and **Playwright**.

This bot recursively navigates a demo e-commerce site ("Warehouse Store"), handles pagination, and extracts complex product data including **multi-variant products** (e.g., Size/Color combinations).

### 🚀 Key Features

* **Hybrid Scraping Strategy:**
    * **Primary Method:** Intercepts the site's hidden `window.meta.product` JSON object to extract 100% accurate data for all variants (Size, Color, Price, SKU) instantly without DOM interaction.
    * **Fallback Method:** Automatically switches to visual DOM scraping (CSS Selectors) if the JSON data is unavailable, ensuring high reliability.
* **Smart Navigation:** Uses a **Router** pattern to distinguish between Category pages, Pagination, and Product Details.
* **Data Export:** Automatically saves clean, structured data to CSV.
* **Concurrency:** Handles multiple requests in parallel with built-in queue management.

### 🛠️ Tech Stack
* **Runtime:** Node.js
* **Libraries:** Crawlee, Playwright
* **Architecture:** Request Queue, Router, Dataset

### 📦 How to Run

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Start the Crawler:**
    ```bash
    npm start
    ```
    *The crawler is configured to run visibly (`headless: false`) for demonstration purposes. You can change this in `src/main.mjs`.*

3.  **View Results:**
    Check the `storage` folder or the generated `results.csv` file.
