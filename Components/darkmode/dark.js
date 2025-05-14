const darkModeToggle = document.getElementById("dark-mode-toggle-checkbox");

// !chackbox deta store hoclocal storege"
let darkd = localStorage.getItem("darkModeToggle");
let darkseting = localStorage.getItem("dark_seting");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

// ! dark mode seting
// dark, light, system default
if (darkseting == "dark") {
  document.documentElement.style.setProperty("--bgc-color", "#000");

  darkModeToggle.checked = true;
} else if (darkseting == "system") {
  if (systemPrefersDark.matches == true) {
    darkModeToggle.checked = true;
    document.documentElement.style.setProperty("--bgc-color", "#000");
  } else {
    darkModeToggle.checked = false;
    document.documentElement.style.setProperty("--bgc-color", "#fff");
  }
} else if (darkseting == "light") {
  darkModeToggle.checked = false;
  document.documentElement.style.setProperty("--bgc-color", "#fff");
}

// ! all class selecat function
let classal = (classas) => {
  return document.querySelectorAll(classas);
};
darkModeToggle.addEventListener("change", function dark() {
  let buttons = classal(".light"),
    nav_bar = classal(".dark_box"),
    opt_dark = classal(".option_b"),
    black = classal(".black"),
    menu_dark = classal(".coman"),
    box_shadow = classal(".box_shadow"),
    shadow_darkmode = classal(".shadow_darkmode");
  // Iterate over each button and add the 'dark-mode' class

  buttons.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.add("dark-mode");
      btn.classList.remove("no_dark");
    } else {
      btn.classList.remove("dark-mode");
      btn.classList.add("no_dark");
    }
  });
  nav_bar.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.remove("nav_light");
      btn.classList.add("nav_dark");
    } else {
      btn.classList.remove("nav_dark");
      btn.classList.add("nav_light");
    }
  });
  opt_dark.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.remove("option_h");
      btn.classList.add("dark_option_h");
    } else {
      btn.classList.remove("dark_option_h");
      btn.classList.add("option_h");
    }
  });
  box_shadow.forEach(function (btn) {
    if (darkModeToggle.checked) {
      // btn.classList.remove("box_no_dark_shadow");
      btn.classList.add("box_dark_shadow");
    } else {
      btn.classList.add("box_no_dark_shadow");
      btn.classList.remove("box_dark_shadow");
    }
  });
  shadow_darkmode.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.add("darkmode_box_shadow");
    } else {
      btn.classList.remove("darkmode_box_shadow");
      btn.classList.add("box_shadow_light");
    }
  });
  black.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.add("darkbox");
      btn.classList.remove("blackD");
    } else {
      btn.classList.remove("darkbox");
      btn.classList.add("blackD");
    }
  });
  menu_dark.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.add("menu_dark");
      btn.classList.remove("menu_dark_ff");
    } else {
      btn.classList.remove("menu_dark");
      btn.classList.add("menu_dark_ff");
    }
  });
  fanc();
});

let fanc = () => {
  if (darkModeToggle.checked) {
    localStorage.setItem("darkModeToggle", "true");
    localStorage.setItem("dark_seting", "dark");
  } else {
    localStorage.setItem("darkModeToggle", "false");
    localStorage.setItem("dark_seting", "light");
  }
};

{
  let buttons = classal(".light");
  let nav_bar = classal(".dark_box");
  let opt_dark = classal(".option_b");
  let menu_dark = classal(".coman");
  let black = classal(".black");
  let box_shadow = classal(".box_shadow");
  let shadow_darkmode = classal(".shadow_darkmode");

  buttons.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.add("dark-mode");
      btn.classList.remove("no_dark");
    } else {
      btn.classList.remove("dark-mode");
      btn.classList.add("no_dark");
    }
  });
  nav_bar.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.remove("nav_light");
      btn.classList.add("nav_dark");
    } else {
      btn.classList.remove("nav_dark");
      btn.classList.add("nav_light");
    }
  });
  opt_dark.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.remove("option_h");
      btn.classList.add("dark_option_h");
    } else {
      btn.classList.remove("dark_option_h");
      btn.classList.add("option_h");
    }
  });
  box_shadow.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.remove("box_no_dark_shadow");
      btn.classList.add("box_dark_shadow");
    } else {
      btn.classList.add("box_no_dark_shadow");
      btn.classList.remove("box_dark_shadow");
    }
  });
  shadow_darkmode.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.add("darkmode_box_shadow");
    } else {
      btn.classList.remove("darkmode_box_shadow");
      btn.classList.add("box_shadow_light");
    }
  });
  black.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.add("darkbox");
      btn.classList.remove("blackD");
    } else {
      btn.classList.remove("darkbox");
      btn.classList.add("blackD");
    }
  });
  menu_dark.forEach(function (btn) {
    if (darkModeToggle.checked) {
      btn.classList.add("menu_dark");
      btn.classList.remove("menu_dark_ff");
    } else {
      btn.classList.remove("menu_dark");
      btn.classList.add("menu_dark_ff");
    }
  });
}
