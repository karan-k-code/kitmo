// Request permission for notifications
async function requestNotificationPermission() {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    console.log("Notification permission granted.");
  } else {
    console.log("Notification permission denied.");
  }
}

// requestNotificationPermission();

// Register a service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
      // return registration.pushManager.getSubscription();
    })
    .then((subscription) => {
      if (!subscription) {
        // Subscribe the user to push notifications
        // return subscribeUserToPush();
      }
      // return subscription;
    })
    .then((subscription) => {
      // Send the subscription to the backend
      // sendSubscriptionToBackend(subscription);
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}

// Subscribe the user to push notifications
async function subscribeUserToPush() {
  const registration = await navigator.serviceWorker.ready;
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(
      "BBCNh8SVk9Qas0sv2rQ7dMVraoYK6Eq3KP6WEv2KXoV1INdyUctBZcwE99mGubhtZ8_uIwWgwTu6H5nqNlTcKpE"
    ),
  });
  return subscription;
}

// Convert VAPID key to Uint8Array
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  // return outputArray;
}

// Send subscription to the backend
function sendSubscriptionToBackend(subscription) {
  fetch(urls + "/notification/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(subscription),
  });
}
function testNotification() {
  fetch(urls + "/notification/send-notification", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  }).then((response) => {
    console.log(response);
  });
}

// testNotification();
