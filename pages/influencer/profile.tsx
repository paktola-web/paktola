import { supabase } from '../../src/utils/SupabaseClient';
import { AppProps } from 'next/app';
import {withRouter} from 'next/router';
import DatePicker from '../../components/datePicker';
import { GetServerSideProps } from 'next'

const Profile = withRouter((props) => {
  return (
    <div>
    <h1>{props.router.query.id}</h1>
    <DatePicker availableDates={props.router.query.id}></DatePicker>
    </div>
  )
})

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const res = await fetch(`http://localhost:3000/api/freeBusy?id=${context.params}`) 

  const availableDates = await res.json()

  return {
    props: {
      availableDates
    }
  }
}

export default Profile
