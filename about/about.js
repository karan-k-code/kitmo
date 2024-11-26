const showMore = () => {
  const moreBtn = document.querySelector("#more-info");
  //   moreBtn.style.display = moreBtn.style.display == "flex" ? "none" : "flex";

  if (moreBtn.style.display == "none") {
    moreBtn.classList.add("show_more_animation");
  } else {
    moreBtn.classList.remove("show_more_animation");
  }
};
