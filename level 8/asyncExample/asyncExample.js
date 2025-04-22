// Step 1: Create the fetchDataPromise function that returns a Promise
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const mockData = [
          { id: 1, name: "Vignesh" },
          { id: 2, name: "John" },
          { id: 3, name: "Priya" }
        ];
  
        // Resolve the Promise
        resolve(mockData);
  
        // Optional: Uncomment to simulate an error
        // reject("Something went wrong while fetching data!");
      }, 2000);
    });
  }
  
  // Step 2: Create an async function to use await
  async function fetchDataAsync() {
    console.log("Fetching data... Please wait.");
  
    try {
      // Step 3: Wait for fetchDataPromise to resolve
      const data = await fetchDataPromise();
  
      // Step 4: Log the resolved data
      console.log("Data received:", data);
    } catch (error) {
      // Step 5: Handle errors
      console.error("Error:", error);
    }
  }
  
  // Step 6: Call the async function
  fetchDataAsync();
  