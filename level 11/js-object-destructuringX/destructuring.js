// Object Destructuring: Extracting and Using Object Properties

// Step 1: Create a product object
const product = {
    name: "Wireless Headphones",
    price: 99.99,
    category: "Electronics",
    inStock: true
  };
  
  // Step 2: Destructure the object into individual variables
  const { name, price, category, inStock } = product;
  
  // Step 3: Print destructured values
  console.log("Destructured Values:");
  console.log(`Name: ${name}`);
  console.log(`Price: $${price}`);
  console.log(`Category: ${category}`);
  console.log(`In Stock: ${inStock ? "Yes" : "No"}`);
  
  // Step 4: Create function with destructured parameters
  function getProductInfo({ name, price, category, inStock }) {
    return `
    Product Details:
    --------------
    Name: ${name}
    Price: $${price.toFixed(2)}
    Category: ${category}
    Availability: ${inStock ? "In Stock" : "Out of Stock"}
    `;
  }
  
  // Step 5: Call the function and print result
  console.log("\nFormatted Product Info:");
  console.log(getProductInfo(product));
  
  // Step 6: Bonus - Destructuring with default values
  const { warranty = "1 year" } = product;
  console.log(`\nBonus - Warranty: ${warranty}`); // Uses default since warranty doesn't exist