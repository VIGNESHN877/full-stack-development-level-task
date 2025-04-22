// Step 1: Define fetchDataPromise that returns a Promise
function fetchDataPromise() {
    console.log("Fetching data... Please wait.");
  
    return new Promise((resolve, reject) => {
      // Step 2: Simulate a 2-second delay
      setTimeout(() => {
        const mockData = [
          { id: 1, name: "Vignesh" },
          { id: 2, name: "John" },
          { id: 3, name: "Priya" }
        ];
  
        // Step 3: Resolve the promise with mockData
        resolve(mockData);
  
        // For error simulation (optional):
        // reject("Something went wrong!");
      }, 2000);
    });
  }
  
  // Step 4: Use .then() to handle the resolved promise
  fetchDataPromise()
    .then((data) => {
      console.log("Data received:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  