import { supabase } from '../../src/utils/SupabaseClient';
import { AppProps } from 'next/app';
import {withRouter} from 'next/router'
import GoogleCalendar from '../../components/GoogleCalendar'

const Profile = withRouter((props) => {
  return (
    <div>
    <h1>{props.router.query.id}</h1>
    <GoogleCalendar></GoogleCalendar>
    </div>
  )
})

export default Profile
