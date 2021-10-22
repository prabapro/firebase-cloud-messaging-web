#!/bin/bash

# Replace this with the device token copied from the browser
DEVICE_REG_TOKEN='<YOUR_BROWSER_TOKEN_HERE'

#Replace this with the server key obtained from the Firebase UI
SERVER_KEY='<YOUR_SERVER_KEY_HERE>'

CMD=$(cat <<END
curl -X POST -H "Authorization: key=$SERVER_KEY" -H "Content-Type: application/json"
   -d '{
  "data": {
    "notification": {
        "title": "FCM - From Curl",
        "body": "Sample message from Curl",
        "icon": "/assets/img/dialog_logo.png",
    }
  },
  "to": "$DEVICE_REG_TOKEN"
}' https://fcm.googleapis.com/fcm/send
END
)

echo $CMD && eval $CMD