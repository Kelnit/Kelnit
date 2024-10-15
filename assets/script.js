function GetYear() {
  let year = new Date();
  document.getElementById("yearly").innerHTML = year.getFullYear()
}
  
// GetYear()

function loadGradients() {
  fetch("/assets/opener.json")
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector(".row"); // Assuming there is a parent .row div
      container.innerHTML = ''; // Clear any existing content

      data.gradients.forEach((gradient) => {
        // Create the div and p elements
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-12", "col-md-4", "gradient-box");

        // Apply gradient background
        colDiv.style.background = `linear-gradient(to right, ${gradient.color1}, ${gradient.color2})`;

        const a = document.createElement("a");
        // p.classList.add("lead");
        a.textContent = gradient.text;
        a.href = gradient.url;
        a.target = "_blank";

        // Append p to the colDiv
        colDiv.appendChild(a);

        // Append colDiv to the container
        container.appendChild(colDiv);
      });
    })
    .catch(error => console.error("Error loading gradients.json:", error));
}

// Call the function to load gradients when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadGradients);
