// Edit profile
function editProfile() {
  alert("wait for next update");
}

// generete Profile
const generateProfile = async () => {
  const profileDetailes = document.getElementById("profile_detailes");
  const response = await apiCallGet(`${urls}/users/user`);
  const { full_name, mobile, email, address, image } = response?.data;

  let addressdata = ``;

  if (address?.lenght !== 0) {
    address.map((x) => {
      addressdata = `${x.address}, ${x.city}, ${x.zip}`;
    });
  }

  if (response?.data.lenght !== 0) {
    return (profileDetailes.innerHTML = `      
    <div class="image">
       <form id="imgdata">
        <img
          src="${image}"
          alt="Profile Picture"
          class="profile-img"
        />
        <input type="file" id="image_user"  name="image" accept="image/*"">
        </form>

      </div>

      <h1 class="name">${full_name}</h1>
      <button onclick="editProfile()">Edit Profile</button>
      <div class="show_more" id="more-info">
        <p>Additional information</p>
        <div class="phone">
          <span>phone number :</span><span>${mobile}</span>
        </div>
        <div class="email"><span>Email :</span><span>${email}</span></div>
        <div class="address">
          <span>Address :</span>
          <address>${addressdata}</address>
        </div>
    </div>`);
  }
};

// change user image
const changeImage = async () => {
  const iImage = document.getElementById("image_user");
  const imgdata = document.getElementById("imgdata");

  iImage.addEventListener("change", async (x) => {
    // image.src = URL.createObjectURL(x.target.files[0]);

    const file = x.target.files[0];

    const url = `${urls}/users/addimage`;

    try {
      let userdata = await sendproduct(url, imgdata);
      if (userdata.success) {
        show_mess(userdata.message);
      }
    } catch (error) {}

    // console.log(response);
    const reader = new FileReader();

    reader.onload = () => {
      const image = document.querySelector(".profile-img");
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
};

const show_mess = (message) => {
  const alart_jjj = document.getElementById("alart_jjj");
  alart_jjj.style.display = "flex";
  alart_jjj.innerText = message;
  setTimeout(() => {
    alart_jjj.style.display = "none";
  }, 3000);
};
