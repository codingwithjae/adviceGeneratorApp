// Get references to HTML elements with specific IDs
let adviceNumber = document.getElementById("advice__generator_h1");
let advicePhrase = document.getElementById("advice__generator_p");

// Add an event listener to the element with the ID "advice__generator_bottom"
// When this element is clicked, the fetchData function will be called
let bottom = document
  .getElementById("advice__generator_button")
  .addEventListener("click", fetchData);

// Define the fetchData function
function fetchData() {
  // Fetch advice data from the specified API endpoint
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      // Check if the response is successful (status code 200)
      if (!response.ok) {
        throw new Error("No advice for you");
      }
      // Parse the response as JSON and return the result
      return response.json();
    })
    .then((data) => {
      // Log the retrieved advice data to the console
      console.log("New advice", data);
      // Update the displayed advice number and phrase with the fetched data
      adviceNumber.innerText = "A D V I C E #" + data.slip.id;
      advicePhrase.innerText = '"' + data.slip.advice + '"';
    })
    .catch((error) => {
      // Log an error message if there's an issue fetching the advice
      console.error("No advice received:", error);
    });
}
