// Step 1: Define fetchData function
function fetchData(callback) {
    console.log("Fetching data... Please wait.");
  
    // Step 2: Simulate 2 seconds delay using setTimeout
    setTimeout(() => {
      const mockData = [
        { id: 1, name: "Vignesh" },
        { id: 2, name: "John" },
        { id: 3, name: "Priya" }
      ];
  
      // Step 3: Call the callback with mock data
      callback(mockData);
    }, 2000);
  }
  
  // Step 4: Define a function to handle received data
  function handleData(data) {
    console.log("Data received:", data);
  }
  
  // Step 5: Call fetchData and pass handleData as the callback
  fetchData(handleData);
  