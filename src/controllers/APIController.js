// Defines an asynchronous function named postMessage
// that sends a POST request to a specific path on a local server
export const postMessage = async (path, body) => {
    let data = false; // Variable to store the response data, initialized as false
    let payload = JSON.stringify(body); // Convert the request body to a JSON string
  
    try {
      // Send a POST request to the specified path on the local server
      data = await fetch(`http://localhost:8080/${path}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: payload, // Include the JSON payload in the request body
      });
      if (data) {
        // If the response is received successfully (i.e., data is truthy)
        // Try parsing the response data as JSON
        return await data.json().catch((err) => {
          console.log(
            `error in parsing json ${data.statusText}, error: ${err.message}`
          );
          return null; // Return null if parsing fails
        });
      }
    } catch (err) {
      // Catch any errors that occur during the fetch operation
      alert(`${err}, path:  ${path}, data ${data}`);
    }
  };
  
  // Defines an asynchronous function named
  // getMessage that sends a GET request to a specific path on a local server
  export const getMessage = async (path) => {
    let data = false; // Variable to store the response data, initialized as false
    try {
      // Send a GET request to the specified path on the local server
      data = await fetch(`http://localhost:8080/${path}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
  
      if (data) {
        // If the response is received successfully (i.e., data is truthy)
        // Try parsing the response data as JSON
        return await data.json().catch((err) => {
          console.log(`error in parsing json ${data}, error: ${err.message}`);
          return null; // Return null if parsing fails
        });
      }
    } catch (err) {
      // Catch any errors that occur during the fetch operation
      alert(`${data}, path: ${path}`);
    }
  };