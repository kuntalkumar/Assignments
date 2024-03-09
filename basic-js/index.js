// Function that returns a promise
function myAsyncFunction() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (e.g., fetching data from a server)
      setTimeout(() => {
        const success = false; // Simulating a successful operation
        if (success) {
          resolve('Operation completed successfully!');
        } else {
          reject(new Error('Operation failed!'));
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Using the promise
  myAsyncFunction()
    .then((result) => {
      console.log(result); // Output: Operation completed successfully!
    })
    .catch((error) => {
      console.error(error); // Output: Error: Operation failed!
    });
  