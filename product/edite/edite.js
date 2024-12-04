const proname = document.getElementById("productName");
const prodec = document.getElementById("productDescription");
const proprice = document.getElementById("productPrice");
const procategory = document.getElementById("productCategory");
const proquntity = document.getElementById("productQuantity");
const genimage = document.getElementById("genimage");

let categoryData = [];

const getp = async () => {
  const id = getQueryParam("id");
  const product = await findProduct(id);

  console.log(product);

  //   const caturl = urls + "/product/getcat/"+;

  //   const catgory = await apiCallGet(caturl);

  if (product) {
    proname.value = product.data.productName;
    prodec.value = product.data.productDescription;
    proprice.value = product.data.productPrice;
    proquntity.value = product.data.productQuntity;
    procategory.value = product.data.productCatgory;
  }
  if (product.data.image) {
    product.data.image.map((x) => {
      const img = document.createElement("img");
      img.setAttribute("src", x.img);
      genimage.appendChild(img);
    });
  }
};

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

    const id = getQueryParam("id");

    const url = `${urls}/dashboad/product/edite/${id}`;

    const userdata = await sendproduct(url, this);

    if (!userdata) {
      alert("Error edeting product");
      return;
    }

    document.getElementById("message").innerHTML = "Product save successfully!";

    // Clear form fields
  });

getcatgory();

getp();
