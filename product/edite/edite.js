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

  //   const caturl = urls + "/product/getcat/"+;

  //   const catgory = await apiCallGet(caturl);

  if (product) {
    proname.value = product.data.productName;
    prodec.value = product.data.productDescription;
    proprice.value = product.data.productPrice;
    proquntity.value = product.data.productQuntity;

    // procategory.childNodes.find((x) => {
    //   if (x.dataset.categoryid == product.data.productCategory) {
    //     x.checked = true;
    //   }
    // });

    const de = await getcatgory();
    // procategory.nodeValue;
    // de.map((x

    // // procategory) => {
    //   if (x._id == product.data.productCatgory) {
    //     // procategory.value = "Electronics";
    //     // selected;
    //     // procategory.value = "Electronics";
    //     console.log(procategory.childNodes);
    //   }
    // });
  }
  if (product.data.image) {
    genimage.innerHTML = product.data.image
      .map((x) => {
        return `
        <div class="col-md-3">

        <img src="${x.img}" class="imagegen">
      <button class="delateimg" onclick="deleteImage('${x._id}')">delete</button>
      </div>
      `;
        //   const img = document.createElement("img");
        //   img.setAttribute("src", x.img);
        //   genimage.appendChild(img);
      })
      .join("");
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

// getcatgory();

getp();

// ! delete image
const deleteImage = async (imageid) => {
  console.log(imageid);

  const data = {
    imageid: imageid,
  };

  const url = urls + "/dashboad/product/image/delete";
  const response = await apiCall(url, data);
  console.log(response);
};

// ! add image

document
  .getElementById("addimage")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page refresh

    const id = getQueryParam("id");

    const url = urls + "/dashboad/product/addimage/" + id;

    const userdata = await sendproduct(url, this);

    if (!userdata) {
      alert("Error edeting product");
      return;
    }
  });

// ! change image
const changeImage = async (id) => {
  const url = urls + "/dashboad/product/image/change/" + id;
  const response = await apiCall(url, data);
  console.log(response);
};
