let opation = document.querySelector(".opation");
let opationcut = document.querySelector(".opationcut");
let boxa = document.querySelector(".boxa");

// ! quation answ funcation

function answ() {
  if (boxa.style.display === "none") {
    boxa.style.display = "flex";
    opation.style.display = "none";
    opationcut.style.display = "flex";
  } else {
    boxa.style.display = "none";
  }
}

// ! opation cut  answcut funcation

opation.addEventListener("click", function () {
  answ();
});

opationcut.addEventListener("click", function () {
  answcut();
});

function answcut() {
  if (boxa.style.display === "flex") {
    boxa.style.display = "none";
    opation.style.display = "flex";
    opationcut.style.display = "none";
  } else {
    boxa.style.display = "flex";
  }
}

// animation

function fadeOutBox() {
  let box = document.getElementById("boxa");
  box.classList.add("fade-out");

  box.addEventListener("animationend", function () {
    box.style.display = "none"; // Or any other action you want to perform
  });
}

// ! quationData
let quationData = [
  {
    id: "a",
    q: "How To On Dark Mode",
    video: "../image/darkmode.mp4",
    li1: "Go To Kitmo Home Page",
    img1: "../image/clicktop.png",
    li2: "Click On The Three Line",
    img2: "../image/turnon.png",
    li3: "Turn on dark mode toggle",
    img3: "../image/dark.png",
  },
  {
    id: "b",
    q: "How To Sign Up Kitmo",
    li1: "Go To Home Page",
    li2: "Click On Profile Button",
    li3: "Click On Sign Up Button",
    li4: "Fill Up The Form",
    li5: "Enter Your Name",
    li6: "Enter Your Phone Number",
    li7: "Enter Your Email",
    li8: "Enter Your Password",
    li9: "Click Next Button",
  },
  {
    id: "c",
    q: "How To Login Kitmo",
  },
  {
    id: "t",
    q: "How To Give Feedback",
  },
];

let question = document.querySelector(".question");

// ! generatequestion funcation

let generatequestion = () => {
  return (question.innerHTML = quationData
    .map((x) => {
      let { id, q, a } = x;
      //   let search = basket.find((x) => x.id === id) || [];
      return `
            <li class="option_b noactive" onclick="getAns(${id})" id="${id}" >${q} </li>
          `;
    })
    .join(""));
};

generatequestion();

let answe = document.querySelector(".answe");

let activeData;

let atv;

let getAns = (id) => {
  let selecteItam = id;
  if (activeData === undefined) {
    activeData = selecteItam.id;
    atv = document.getElementById(activeData);
    atv.classList.remove("noactive");
    atv.classList.add("active");
  } else {
    atv.classList.remove("active");
    atv.classList.add("noactive");
    atv = undefined;
    activeData = undefined;
    activeData = selecteItam.id;
    atv = document.getElementById(activeData);
    atv.classList.add("active");
  }
  generateAns(selecteItam.id);
  generateAnsLi(selecteItam.id);
};

// ! generateAns funcation

let generateAns = (id) => {
  let he = id;
  const search = quationData.find((y) => y.id == he) || [];

  return (answe.innerHTML = `
          ${search.q === undefined ? `` : `<div class="q">${search.q}</div>`}
          ${
            search.video === undefined
              ? ``
              : `<video src="${search.video}"  width="640" controls></video>`
          }
          <div class="ans">
            <ul id="ansli">
              ${search.li1 === undefined ? `` : `<li>${search.li1} </li>`}
              ${
                search.img1 === undefined
                  ? ``
                  : `<img src="${search.img1}" alt="">`
              }
              ${search.li2 === undefined ? `` : `<li>${search.li2} </li>`}
              ${
                search.img2 === undefined
                  ? ``
                  : `<img src="${search.img2}" alt="">`
              }
              ${search.li3 === undefined ? `` : `<li>${search.li3} </li>`}
              ${
                search.img3 === undefined
                  ? ``
                  : `<img src="${search.img3}" alt="">`
              }
              ${search.li4 === undefined ? `` : `<li>${search.li4}  </li>`}
              ${
                search.img4 === undefined
                  ? ``
                  : `<img src="${search.img4}" alt="">`
              }
              ${search.li5 === undefined ? `` : `<li>${search.li5} </li>`}
              ${
                search.img5 === undefined
                  ? ``
                  : `<img src="${search.img5}" alt="">`
              }
              ${search.li6 === undefined ? `` : `<li>${search.li6} </li>`}
              ${
                search.img6 === undefined
                  ? ``
                  : `<img src="${search.img6}" alt="">`
              }
              ${search.li7 === undefined ? `` : `<li>${search.li7}  </li>`}
              ${
                search.img7 === undefined
                  ? ``
                  : `<img src="${search.img7}" alt="">`
              }
              ${search.li8 === undefined ? `` : `<li>${search.li8}  </li>`}
              ${
                search.img8 === undefined
                  ? ``
                  : `<img src="${search.img8}" alt="">`
              }
              ${search.li9 === undefined ? `` : `<li>${search.li9}  </li>`}
              ${
                search.img9 === undefined
                  ? ``
                  : `<img src="${search.img9}" alt="">`
              }  
            </ul>
          </div>
         `);
};

//! home button
let home = () => {
  window.location.href = "/";
};

const generateAnsLi = (id) => {
  const lineLI = document.getElementById("ansli");
  let product = quationData.find((x) => x.id == id);
  let imageS = product.answ;

  const mappedKeys = Object.keys(imageS).map((key) => key);
};
