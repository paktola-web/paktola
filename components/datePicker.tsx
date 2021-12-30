import {FC} from 'react'
const {google} = require('googleapis');
const calendar = google.calendar('v3');

interface DateProps {
  //dateAvailable: boolean;
}

const DatePicker:FC<DateProps> = () => {

// Before running the sample:
// - Enable the API at:
//   https://console.developers.google.com/apis/api/calendar.googleapis.com
// - Login into gcloud by running:
//   `$ gcloud auth application-default login`
// - Install the npm module by running:
//   `$ npm install googleapis`


async function freeBusy() {
  const auth = new google.auth.GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: [
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.readonly',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options({auth: authClient});

  // Do the magic
  const res = await calendar.freebusy.query({
    // Request body metadata
    requestBody: {
      // request body parameters
      // {
      //   "calendarExpansionMax": 0,
      //   "groupExpansionMax": 0,
      //   "items": [],
         "timeMax": "2021-04-23T18:25:43.511Z",
         "timeMin": "2021-07-23T18:25:43.511Z",
      //   "timeZone": "my_timeZone"
      // }
    },
  });
  console.log(res.data);

  // Example response
  // {
  //   "calendars": {},
  //   "groups": {},
  //   "kind": "my_kind",
  //   "timeMax": "my_timeMax",
  //   "timeMin": "my_timeMin"
  // }
}

freeBusy().catch(e => {
  console.error(e);
  throw e;
});



  return (
  <div></div>    
  )
}

export default DatePicker
