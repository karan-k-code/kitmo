document.addEventListener("DOMContentLoaded", function () {
  // Image upload functionality
  const dropArea = document.getElementById("dropArea");
  const fileInput = document.getElementById("fileInput");
  const imagePreview = document.getElementById("image-preview");

  // Prevent default drag behaviors
  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    dropArea.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // Highlight drop area when item is dragged over it
  ["dragenter", "dragover"].forEach((eventName) => {
    dropArea.addEventListener(eventName, highlight, false);
  });

  ["dragleave", "drop"].forEach((eventName) => {
    dropArea.addEventListener(eventName, unhighlight, false);
  });

  function highlight() {
    dropArea.style.borderColor = "#4361ee";
    dropArea.style.backgroundColor = "rgba(67, 97, 238, 0.1)";
  }

  function unhighlight() {
    dropArea.style.borderColor = "#ddd";
    dropArea.style.backgroundColor = "transparent";
  }

  // Handle dropped files
  dropArea.addEventListener("drop", handleDrop, false);

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
  }

  // Handle selected files
  fileInput.addEventListener("change", function () {
    handleFiles(this.files);
  });

  function handleFiles(files) {
    [...files].forEach(uploadFile);
  }

  function uploadFile(file) {
    if (!file.type.match("image.*")) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const preview = document.createElement("div");
      preview.className = "preview-image";

      const img = document.createElement("img");
      img.src = e.target.result;

      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-image";
      removeBtn.innerHTML = '<i class="fas fa-times"></i>';
      removeBtn.onclick = function () {
        preview.remove();
      };

      preview.appendChild(img);
      preview.appendChild(removeBtn);
      imagePreview.appendChild(preview);
    };
    reader.readAsDataURL(file);
  }

  // Variant functionality
  const addVariantBtn = document.getElementById("addVariant");
  const variantsContainer = document.getElementById("variants-container");

  addVariantBtn.addEventListener("click", function () {
    const variantItem = document.createElement("div");
    variantItem.className = "variant-item";
    variantItem.innerHTML = `
                    <div class="form-group">
                        <select class="form-control variant-type">
                            <option value="size">Size</option>
                            <option value="color">Color</option>
                            <option value="material">Material</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control variant-value" placeholder="e.g. Red, Large, etc.">
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control variant-price" placeholder="0.00">
                    </div>
                    <button type="button" class="remove-variant"><i class="fas fa-times"></i></button>
                `;

    variantItem
      .querySelector(".remove-variant")
      .addEventListener("click", function () {
        variantItem.remove();
      });

    variantsContainer.appendChild(variantItem);
  });

  // Remove variant buttons
  document.querySelectorAll(".remove-variant").forEach((button) => {
    button.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });

  // Status toggle
  const statusToggle = document.getElementById("productStatus");
  const statusText = document.getElementById("statusText");

  statusToggle.addEventListener("change", function () {
    statusText.textContent = this.checked ? "Active" : "Inactive";
  });

  // Form submission
  const productForm = document.getElementById("productForm");

  productForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Basic validation
    const productName = document.getElementById("productName").value;
    const productDescription =
      document.getElementById("productDescription").value;
    const productCategory = document.getElementById("productCategory").value;
    const productPrice = document.getElementById("productPrice").value;
    const productSKU = document.getElementById("productSKU").value;
    const productQuantity = document.getElementById("productQuantity").value;

    if (
      !productName ||
      !productDescription ||
      !productCategory ||
      !productPrice ||
      !productSKU ||
      !productQuantity
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // In a real application, you would send the form data to the server here
    alert("Product submitted successfully!");
    console.log("Form submitted:", {
      name: productName,
      description: productDescription,
      category: productCategory,
      price: productPrice,
      sku: productSKU,
      quantity: productQuantity,
      // Add other fields as needed
    });

    // Reset form (optional)
    // this.reset();
  });
});

// ! dark mode seting

let darkseting = localStorage.getItem("dark_seting");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
let dark;

// dark, light, system default
if (darkseting == "dark") {
  dark = true;
} else if (darkseting == "system") {
  if (systemPrefersDark.matches == true) {
    dark = true;
  } else {
    dark = false;
  }
} else if (darkseting == "light") {
  dark = false;
}

const root = document.documentElement;
if (dark) {
  root.style.setProperty("--dark-color", "white");
  root.style.setProperty("--card-color", "#1c1b1b");
  root.style.setProperty("--body-bg-color", "black");
} else {
  root.style.setProperty("--dark-color", "#212529");
  root.style.setProperty("--card-color", "white");
  root.style.setProperty("--body-bg-color", "#f5f7fb");
}
