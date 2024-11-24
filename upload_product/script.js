const imageInputsContainer = document.getElementById("imageInputs");
const imagePreviewsContainer = document.getElementById("imagePreviews");
const addImageButton = document.getElementById("addImageButton");
const uploadForm = document.getElementById("uploadForm");
const imageButton = document.getElementById("image_Button");

//!   chanege name
let count = 1;

imageButton.addEventListener("change", () => {
  updatePreviews();
});

// ! Add a new image input when "Add Image" is clicked
addImageButton.addEventListener("click", function () {
  const imageInputDiv = document.createElement("div");
  imageInputDiv.classList.add("image-input");

  const imageInput = document.createElement("input");
  imageInput.setAttribute("type", "file");
  imageInput.setAttribute("name", `image${count}`);
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
  // console.log(count);
});

//! Remove an image input field
function removeImageInput(element) {
  element.remove();
  updatePreviews();
}

//! Preview images for all inputs
function previewImages() {
  updatePreviews();
}

function updatePreviews() {
  const imageInputs = document.querySelectorAll(".productImage");
  imagePreviewsContainer.innerHTML = "";
  imageInputs.forEach((input) => {
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = function (event) {
        const img = document.createElement("img");
        img.setAttribute("src", event.target.result);
        imagePreviewsContainer.appendChild(img);
        // console.log(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  });
}

// ! Form submission functionality
document
  .getElementById("uploadForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page refresh

    const url = `${urls}/product/uploadproduct`;

    let userdata = await sendproduct(url, this);
    console.log(userdata);

    document.getElementById("message").innerHTML =
      "Product uploaded successfully!";

    // Clear form fields
    this.reset();
    imagePreviewsContainer.innerHTML = "";
  });

let categoryData = [];

// ! geting product category

let getcatgory = async () => {
  let response = await fetch(`${urls}/product/getcatgory`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  categoryData = data.data;
  categoryGen();
};
getcatgory();

const productCategory = document.getElementById("productCategory");

const categoryGen = async () => {
  let catgory = await categoryData.map((item) => {
    return `<option value="${item._id}">${item.name}</option>`;
  });
  productCategory.innerHTML += catgory.join("");
};
