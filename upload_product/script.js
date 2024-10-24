// Select elements
const imageInputsContainer = document.getElementById("imageInputs");
const imagePreviewsContainer = document.getElementById("imagePreviews");
const addImageButton = document.getElementById("addImageButton");
const uploadForm = document.getElementById("uploadForm");

//   chanege name
let count = 1;

// Add a new image input when "Add Image" is clicked
addImageButton.addEventListener("click", function () {
  const imageInputDiv = document.createElement("div");
  imageInputDiv.classList.add("image-input");

  const imageInput = document.createElement("input");
  imageInput.setAttribute("type", "file");
  imageInput.setAttribute("name", `productImages${count}`);
  imageInput.setAttribute("accept", "image/*");
  imageInput.classList.add("productImage");
  imageInput.addEventListener("change", previewImages);

  const removeButton = document.createElement("button");
  removeButton.setAttribute("type", "button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-image");
  removeButton.addEventListener("click", function () {
    removeImageInput(imageInputDiv);
  });

  imageInputDiv.appendChild(imageInput);
  imageInputDiv.appendChild(removeButton);

  imageInputsContainer.appendChild(imageInputDiv);

  count++;
  console.log(count);
});

// Remove an image input field
function removeImageInput(element) {
  element.remove();
  updatePreviews();
}

// Preview images for all inputs
function previewImages() {
  updatePreviews();
}

function updatePreviews() {
  imagePreviewsContainer.innerHTML = ""; // Clear previous previews

  const imageInputs = document.querySelectorAll(".productImage");

  imageInputs.forEach((input) => {
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = function (event) {
        const img = document.createElement("img");
        img.setAttribute("src", event.target.result);
        imagePreviewsContainer.appendChild(img);
      };

      reader.readAsDataURL(file);
    }
  });
}

// Form submission functionality
document
  .getElementById("uploadForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    const formData = new FormData(this);

    let data = Object.fromEntries(formData);
    console.log(data);

    // You can send formData to the server using an AJAX request
    document.getElementById("message").innerHTML =
      "Product uploaded successfully!";

    // Clear form fields
    // this.reset();
    imagePreviewsContainer.innerHTML = "";
  });
