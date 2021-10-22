# Firebase Cloud Messaging For Web - Demo

### Firebase Documentation

- [Add Firebase JS SDK]
- [Cloud Messaging Overview]
- [Setup JS Client]

### How to use

1. Add the required Firebase config properties on both `firebase-messaging-sw.js` & `index.html`
2. Serve the app over HTTPS (Cloud messaging will **not** be served over non-secure HTTP)
3. Upon granting browser permission to receive notifications, copy the browser token
4. Now you're ready to send test message(s)
   4.1 Option 1 - using cURL. Or
   4.2 Option 2 - From Firebase Console

### Option 1 - Using cURL

1. Paste the copied browser token to the `curl-test.sh` (Key: `DEVICE_REG_TOKEN`)
2. Get the Server Key from Firebase console & update `SERVER_KEY`
3. Run `sh curl-test.sh`

![Send message using cURL](/assets/img/demo-curl.gif)

### Option 2 - From Firebase Console

1. Go to Firebase > Cloud Messaging > New notification
2. Enter Notification title, Notification text & the notification image (optional - you may use `https://localhost/assest/img/dialog_logo.png`)
3. Once the details are filled, press `Send test message`
4. Paste the browser token
5. Press `Test`

![Send message from Firebase Console](/assets/img/demo-fbc.gif)

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[cloud messaging overview]: https://firebase.google.com/docs/cloud-messaging
[setup js client]: https://firebase.google.com/docs/cloud-messaging/js/client
[add firebase js sdk]: https://firebase.google.com/docs/web/setup
