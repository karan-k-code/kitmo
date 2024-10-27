let timeString;

let timeNow = () => {
  let now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM"; // Determine AM or PM
  hours = hours % 12 || 12; // Convert to 12-hour format; 0 becomes 12

  // Format minutes and seconds to have leading zeros
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  // Final time string in hh:mm:ss AM/PM format
  timeString = `${hours}:${formattedMinutes} ${ampm}`;
  // console.log(timeString); // e.g., "2:05:09 PM"
};

timeNow();
