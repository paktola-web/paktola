import { supabase } from '../../src/utils/SupabaseClient';
import { AppProps } from 'next/app';
import {withRouter} from 'next/router';
import {DatePicker} from '../../components/DatePicker';

const Profile = withRouter((props) => {
  return (
    <div>
    <h1>{props.router.query.id}</h1>
    <DatePicker influencerId={props.router.query.id}></DatePicker>
    </div>
  )
})

export default Profile
