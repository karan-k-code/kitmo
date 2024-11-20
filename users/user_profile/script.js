document.getElementById("edit-btn").addEventListener("click", function () {
  let name = prompt(
    "Enter your name:",
    document.getElementById("user-name").textContent
  );
  let title = prompt(
    "Enter your title:",
    document.getElementById("user-title").textContent
  );
  let about = prompt(
    "Enter about you:",
    document.getElementById("user-about").textContent
  );
  let email = prompt(
    "Enter your email:",
    document.getElementById("user-email").textContent
  );
  let phone = prompt(
    "Enter your phone:",
    document.getElementById("user-phone").textContent
  );

  if (name) document.getElementById("user-name").textContent = name;
  if (title) document.getElementById("user-title").textContent = title;
  if (about) document.getElementById("user-about").textContent = about;
  if (email) document.getElementById("user-email").textContent = email;
  if (phone) document.getElementById("user-phone").textContent = phone;
});
