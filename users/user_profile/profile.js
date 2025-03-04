function editProfile() {
  alert("wait for next update");
}

const generateProfile = async () => {
  const profileDetailes = document.getElementById("profile_detailes");
  const response = await apiCallGet(`${urls}/users/user`);
  const { username, mobile, email, address } = response?.data;

  let addressdata = ``;

  if (address?.lenght !== 0) {
    address.map((x) => {
      addressdata = `${x.address}, ${x.city}, ${x.zip}`;
    });
  }

  if (response?.data.lenght !== 0) {
    return (profileDetailes.innerHTML = `      
    <div class="image">
       <form id="imgdata" method="post">
        <img
          src="../../image/userimage.jpg"
          alt="Profile Picture"
          class="profile-img"
        />
        </form>
        <input type="file" id="image_user"  name="image" accept="image/*"">
      </div>

      <h1 class="name">${username}</h1>
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

const changeImage = async () => {
  const iImage = document.getElementById("image_user");
  const imgdata = document.getElementById("imgdata");
  iImage.addEventListener("change", async (x) => {
    // image.src = URL.createObjectURL(x.target.files[0]);

    let formData = new FormData(imgdata);
    let data = Object.fromEntries(formData);

    const file = x.target.files[0];

    const url = urls + "/users/addimage";
    console.log(data);
    const response = await apiCall(url, data);
    console.log(response);
    if (response?.success) {
      alert("image add success");
    } else {
      alert(response.errors);
    }

    // console.log(response);
    const reader = new FileReader();
    reader.onload = () => {
      const image = document.querySelector(".profile-img");
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
};
