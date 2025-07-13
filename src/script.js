// async function fetchProducts() {
//   try {
//     let response = await fetch("https://fakestoreapi.com/products");
//     let products = await response.json();
//     console.log(products);

//     const container = document.getElementById("productContainer");

//     products.forEach((product) => {
//       const card = document.createElement("div");
//       card.className = "card";

//       card.innerHTML = `
//         <img src="${product.image}" alt="product image" />
//         <div class="title">${product.title}</div>
//         <div class="category"><strong>Category:</strong> ${product.category}</div>
//         <div class="description">${product.description}</div>
//         <div class="price"><strong>Price:</strong> $${product.price}</div>
//         <div class="rating">
//           <strong>Rating:</strong> ${product.rating.rate} ⭐ (${product.rating.count} reviews)
//         </div>
//       `;

//       // Title styling
//       const titleDiv = card.querySelector(".title");
//       titleDiv.style.color = "#333";
//       titleDiv.style.fontSize = "18px";
//       titleDiv.style.fontWeight = "bold";
//       titleDiv.style.fontFamily = "Arial";
//       titleDiv.style.marginTop = "10px";

//       // Additional styling (optional)
//       const descriptionDiv = card.querySelector(".description");
//       descriptionDiv.style.fontSize = "14px";
//       descriptionDiv.style.margin = "10px 0";
//       descriptionDiv.style.color = "#555";

//       const priceDiv = card.querySelector(".price");
//       priceDiv.style.marginTop = "10px";
//       priceDiv.style.fontWeight = "bold";
//       priceDiv.style.color = "#222";

//       const categoryDiv = card.querySelector(".category");
//       categoryDiv.style.marginTop = "8px";
//       categoryDiv.style.fontSize = "14px";
//       categoryDiv.style.color = "#666";

//       const ratingDiv = card.querySelector(".rating");
//       ratingDiv.style.marginTop = "8px";
//       ratingDiv.style.fontSize = "14px";
//       ratingDiv.style.color = "#444";

//       container.appendChild(card);
//     });
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// }

// fetchProducts();

// // const heading = document.querySelector(".mainHeading");
// //   const heading = document.getElementsByClassName("mainHeading")[0];
// //   heading.style.color = "red";

// // heading.style.color = "red";
// //   heading.style.textAlign = "center";
// //   heading.style.fontSize = "30px";
// //   heading.style.fontFamily = "Verdana";
// //   heading.style.textTransform = "uppercase";

// // const titleDiv = card.querySelector(".title");

// // titleDiv.style.color = "#333";
// // titleDiv.style.fontSize = "18px";
// // titleDiv.style.fontWeight = "bold";
// // titleDiv.style.fontFamily = "Arial";
// // titleDiv.style.marginTop = "10px";

// console.log("object");

// document.addEventListener("DOMContentLoaded", () => {
//   const path = window.location.pathname;

//   if (path.includes("about.html")) {
//     const content = document.getElementById("content");

//     if (content) {
//       const heading = document.createElement("h2");
//       heading.textContent = "Welcome to the About Page!";
//       heading.className = "text-2xl font-bold text-red-600";

//       const paragraph = document.createElement("p");
//       paragraph.textContent =
//         "This paragraph was added dynamically with JavaScript.";
//       paragraph.className = "text-gray-700 mt-2";

//       content.appendChild(heading);
//       content.appendChild(paragraph);
//     }
//   }

//   // You can add more conditions for other pages like:
//   // if (path.includes("index.html")) { ... }
// });

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  // ✅ ABOUT PAGE
  if (path.includes("about.html")) {
    const content = document.getElementById("content");

    if (content) {
      const heading = document.createElement("h2");
      heading.textContent = "Welcome to the About Page!";
      heading.className = "text-2xl font-bold text-red-600";

      const paragraph = document.createElement("p");
      paragraph.textContent =
        "This paragraph was added dynamically with JavaScript.";
      paragraph.className = "text-gray-700 mt-2";

      content.appendChild(heading);
      content.appendChild(paragraph);
    }
  }

  // ✅ PRODUCTS PAGE
  const productContainer = document.getElementById("productContainer");

  if (productContainer) {
    fetchProducts(productContainer); // pass container safely
  }

  async function fetchProducts(container) {
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      let products = await response.json();
      console.log(products);

      products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <img src="${product.image}" alt="product image" />
          <div class="title">${product.title}</div>
          <div class="category"><strong>Category:</strong> ${product.category}</div>
          <div class="description">${product.description}</div>
          <div class="price"><strong>Price:</strong> $${product.price}</div>
          <div class="rating">
            <strong>Rating:</strong> ${product.rating.rate} ⭐ (${product.rating.count} reviews)
          </div>
        `;

        // Title styling
        const titleDiv = card.querySelector(".title");
        titleDiv.style.color = "#333";
        titleDiv.style.fontSize = "18px";
        titleDiv.style.fontWeight = "bold";
        titleDiv.style.fontFamily = "Arial";
        titleDiv.style.marginTop = "10px";

        const descriptionDiv = card.querySelector(".description");
        descriptionDiv.style.fontSize = "14px";
        descriptionDiv.style.margin = "10px 0";
        descriptionDiv.style.color = "#555";

        const priceDiv = card.querySelector(".price");
        priceDiv.style.marginTop = "10px";
        priceDiv.style.fontWeight = "bold";
        priceDiv.style.color = "#222";

        const categoryDiv = card.querySelector(".category");
        categoryDiv.style.marginTop = "8px";
        categoryDiv.style.fontSize = "14px";
        categoryDiv.style.color = "#666";

        const ratingDiv = card.querySelector(".rating");
        ratingDiv.style.marginTop = "8px";
        ratingDiv.style.fontSize = "14px";
        ratingDiv.style.color = "#444";

        container.appendChild(card);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
});
