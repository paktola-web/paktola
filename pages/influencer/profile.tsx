import { supabase } from '../../src/utils/SupabaseClient';
import { AppProps } from 'next/app';
import {withRouter} from 'next/router'

const Profile = withRouter((props) => {
  return (
    <div><h1>{props.router.query.id}</h1></div>
  )
})

export default Profile
