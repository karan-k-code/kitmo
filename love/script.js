const close_open = (url = "", id) => {
  const view_image = document.getElementById("view_image");
  if (view_image.style.display === "flex") {
    view_image.style.display = "none";

    try {
      document.getElementById("view_vi").pause();
    } catch (error) {}
  } else {
    view_image.style.display = "flex";

    if (url.match(/\.(jpeg|jpg|png|gif|webp)$/i)) {
      // Render image
      view_image.innerHTML = `<i class="fas fa-times" id="close_view_image" onclick="close_open()"></i>
      <img src="${url}" alt="" />
      <button onclick="delet_image('${id}')">Delete</button>
      `;
    } else if (url.match(/\.(mp4|webm|ogg)$/i)) {
      // Render video
      view_image.innerHTML = `<i class="fas fa-times" id="close_view_image" onclick="close_open()"></i>
      <video class="l_video" id="view_vi" controls loading="lazy">
        <source src="${url}" type="video/mp4">
       
      </video>
      <button onclick="delet_image('${id}')">Delete</button>
      `;
    }
  }
};

// const image_data = [
//   {
//     url: "./image/image_1.jpg",
//   },
//   {
//     url: "./image/image_2.jpg",
//   },
//   {
//     url: "./image/image_3.webp",
//   },
//   {
//     url: "./image/image_4.jpg",
//   },
//   {
//     url: "./image/image_5.jpg",
//   },
//   {
//     url: "./image/image_6.jpg",
//   },
//   {
//     url: "./image/image_7.jpg",
//   },
//   {
//     url: "./image/image_8.jpg",
//   },
//   {
//     url: "./image/image_9.jpg",
//   },
//   {
//     url: "./image/image_10.jpg",
//   },
//   {
//     url: "./image/image_11.jpg",
//   },
//   {
//     url: "./image/image_12.jpg",
//   },
//   {
//     url: "./image/image_13.jpg",
//   },
//   {
//     url: "./image/innp.jpg",
//   },
// ];

const gen_image = async () => {
  const password = document.getElementById("password").value;
  const password_c = document.getElementById("password_c");
  const image_uuu = document.getElementById("image_uuu");

  // Send data to the server
  const response = await fetch(`${urls}/save/love/p/${password}`, {
    method: "POST",
  });

  if (!response.ok) {
    alert("worng password");
  }

  if (response.ok) {
    password_c.style.display = "none";
    image_uuu.style.display = "flex";
  }

  const result = await response.json();
  const contenr = document.getElementById("contenr");
  return (contenr.innerHTML = result.data
    .map((x) => {
      if (x.url.match(/\.(jpeg|jpg|png|gif|webp)$/i)) {
        // Render image
        return `<img loading="lazy"
          src="${x.url}"
          onclick="close_open('${x.url}','${x._id}')"
        />`;
      } else if (x.url.match(/\.(mp4|webm|ogg)$/i)) {
        // Render video
        return `<span>
        <i class="fa-solid fa-play"></i>
        <video class="l_video" loading="lazy"
        onclick="close_open('${x.url}','${x._id}')">
           
          <source src="${x.url}" type="video/mp4">
        </video>
        </span>
        `;
      } else {
        // Skip unsupported file types
        return "";
      }
    })
    .join(""));
};

const delet_image = async (id) => {
  const delet_image_password = document.getElementById("delet_image_password");
  delet_image_password.style.display = "flex";
  close_open();

  const next_de = document.getElementById("next_de");

  next_de.addEventListener("click", async () => {
    const delet_password = document.getElementById("delet_password").value;
    const url = `${urls}/save/love/delete`;

    try {
      // Send data to the server
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: delet_password,
          id: id,
        }),
        credentials: "include",
      });

      if (response.ok) {
        document.getElementById("delet_password").value = "";
        delet_image_password.style.display = "none";
      }

      const result = await response.json();
      alert("image delete successfully!");
      console.log("Server response:", result);

      // Reset form (optional)
      // this.reset();
    } catch (error) {
      console.error("Error:", error);
      alert("worng password");
    }
    document.getElementById("delet_password").value = "";
  });
};

const cencel_btn_delete = () => {
  const delet_image_password = document.getElementById("delet_image_password");
  delet_image_password.style.display = "none";
};

const file = document.getElementById("file");

file.addEventListener("change", async (e) => {
  const fileInput = document.getElementById("file").files;

  const formData = new FormData();
  formData.append("image", fileInput[0]);

  const url = `${urls}/save/love/upload`;

  try {
    // Send data to the server
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      redirect: "follow",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to upload product. Please try again.");
    }

    const result = await response.json();
    alert("Image upload successfully!");

    // Reset form (optional)
    // this.reset();
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while submitting the upload.");
  }
});

const bgMusic = document.getElementById("bg-music");
bgMusic.volume = 0.4;

function playMusic() {
  bgMusic.play();
}

function pauseMusic() {
  bgMusic.pause();
}

const audio = document.getElementById("bg-music");

// Only trigger play once
let hasPlayed = false;

function tryPlayAudio() {
  if (hasPlayed) return;

  audio
    .play()
    .then(() => {
      hasPlayed = true;
      // Remove all listeners once played
      document.removeEventListener("click", tryPlayAudio);
      document.removeEventListener("scroll", tryPlayAudio);
      document.removeEventListener("keydown", tryPlayAudio);
      document.removeEventListener("touchstart", tryPlayAudio);
    })
    .catch((err) => {
      console.error("Audio play failed:", err);
    });
}

// Add listeners for various interactions
document.addEventListener("click", tryPlayAudio);
document.addEventListener("scroll", tryPlayAudio);
document.addEventListener("keydown", tryPlayAudio);
document.addEventListener("touchstart", tryPlayAudio);
