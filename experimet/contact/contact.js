if ("contacts" in navigator) {
  const props = ["name", "tel"];
  const opts = { multiple: true };

  navigator.contacts
    .select(props, opts)
    .then((contacts) => {
      contacts.forEach((contact) => alert(contact.name, contact.tel));
    })
    .catch((error) => console.error("Error accessing contacts:", error));
} else {
  console.log("Contacts API not supported in this browser.");
}

if ("contacts" in navigator) {
  navigator.contacts
    .select(["name", "email", "tel"], { multiple: true })
    .then((contacts) => {
      console.log("Selected contacts:", contacts);
    })
    .catch((error) => console.error("Error accessing contacts:", error));
} else {
  console.log("Contacts API not supported in this browser.");
}
