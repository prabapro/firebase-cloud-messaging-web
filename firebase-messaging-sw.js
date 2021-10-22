importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
	"https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js"
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
	"https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js"
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
// TODO: Update below values obtained from the Firebase console
firebase.initializeApp({
	messagingSenderId: "<MESSAGE_SENDER_ID>",
	apiKey: "<API_KEY>",
	projectId: "<FIREBASE_PROJECT_ID>",
	appId: "<FIREBASE_APP_ID>",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
	console.log(
		"[firebase-messaging-sw.js] Received background message ",
		payload
	);
	// Customize notification here
	const notificationTitle = "FCM Demo";
	const notificationOptions = {
		body: "This is a test notification from Dialog.lk",
		icon: "/assets/img/dialog_logo.png",
	};

	return self.registration.showNotification(
		notificationTitle,
		notificationOptions
	);
});
