let shopItamsData = [
  {
    id: "headphones",
    name: "Headphones",
    price: 77,
    desc: "This Is Boat Headphones",
    image: {
      img1: "image/boat1.webp",
      img2: "image/boat2.jpg",
    },
    img: "image/boat3.jpg",
    catgory: "Electronics",
  },
  {
    id: "headphones2",
    name: "Headphones",
    price: 22,
    desc: "This Is Boat Headphones",
    image: {},
    img: "image/headphone.jpeg",
    catgory: "Electronics",
  },
  {
    id: "goggles",
    name: "Goggles",
    price: 9,
    desc: "Stylish Goggles New Year",
    img: "image/goggles.jpeg",
    image: {},
    catgory: "Fashion",
  },
  {
    id: "short",
    name: "Short",
    price: 25,
    desc: "Stylish Short For Man",
    img: "image/short.jpeg",
    image: {},
    catgory: "Cloths",

    cloths: {
      men: "men",
      women: "women",
    },
  },
  {
    id: "jeans",
    name: "Jeans",
    price: 30,
    desc: "Boy Jeans So Prime",
    img: "image/jeans.jpeg",
    image: {},
    catgory: "Fashion",
  },
  {
    id: "cup",
    name: "Cup",
    price: 9,
    desc: "This Is Stylish Cup",
    img: "image/cup.jpeg",
    image: {},
    catgory: "Home",
  },
  {
    id: "iPhone",
    name: "Mobile",
    price: 999,
    desc: "IPhone 15 Pro Max",
    img: "image/iphone.jpg",
    image: {},
    catgory: "Electronics",
  },
  {
    id: "sam",
    name: "Mobile",
    price: 677,
    desc: "samsung s24 256gb storge 5000mAh bettar prime tab best Quality ",
    img: "image/s24.jpg",
    image: {},
    catgory: "Electronics",
  },
  {
    id: "mo",
    name: "Mouse",
    price: 49,
    desc: "rgb wirless mouse prime qualilty ",
    img: "image/mouse.jpg",
    image: {},
    catgory: "Electronics",
  },
  {
    id: "shoe",
    name: "Shoe",
    price: 399,
    desc: "shoe best qualilty",
    img: "image/shoe.jpg",
    image: {
      img1: "image/shoe1.jpg",
      img2: "image/shoe2.jpg",
    },
    catgory: "fashion",
  },
  {
    id: "hfkjas",
    name: "Saree",
    price: 1299,
    desc: "saree best qualilty",
    img: "image/saree2.jpg",
    image: {},
    catgory: "Cloths",

    cloths: {
      women: "women",
    },
  },
  {
    id: "hfks",
    name: "Tshirt",
    price: 199,
    desc: "tshirt best qualilty",
    img: "image/tshirt1.jpg",
    image: {},
    catgory: "Cloths",

    cloths: {
      man: "men",
    },
  },
  {
    id: "hhgjs",
    name: "skirt",
    price: 1399,
    desc: "skirt best qualilty",
    img: "image/skirt.jpg",
    image: {
      img1: "image/skirt3.jpg",
    },
    catgory: "cloths",

    cloths: {
      woman: "women",
    },
  },
  {
    id: "hgjs",
    name: "skirt",
    price: 1199,
    desc: "skirt best qualilty",
    img: "image/skirt2.jpg",
    image: {},
    catgory: "cloths",

    cloths: {
      woman: "women",
    },
  },
  {
    id: "hhgjs65",
    name: "skirt",
    price: 1899,
    desc: "skirt best qualilty",
    img: "image/skirt4.jpg",
    image: {},
    catgory: "cloths",

    cloths: {
      woman: "women",
    },
  },
  {
    id: "sho2e",
    name: "shoe",
    price: 349,
    desc: "shoe best qualilty",
    img: "image/shoeb1.jpg",
    image: {
      img1: "image/shoe2.1.jpg",
      img2: "image/shoe2.2.jpg",
    },
    catgory: "fashion",
  },
  {
    id: "weyiyi3",
    name: "chair",
    price: 4599,
    desc: "chair best qualilty",
    img: "image/chair.jpg",
    image: {},
    catgory: "home",
  },
];

let dataApi = async () => {
  let response = await fetch(`${urls}/api/v1/product/product`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  shopItamsData = await data.data;
  if (data) {
    generateShop;
  }
  console.log(shopItamsData);
};

dataApi();
