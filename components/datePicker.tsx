import { GetServerSideProps } from 'next'
const DatePicker = ({availableDates}: any) => {
  return (
    <div>
      <div>
        <h1>Influencers Id</h1>
      </div>
      <div>
        <ul>
          <li>{availableDates}</li>
        </ul>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const res = await fetch(`http://localhost:3000/api/freeBusy?id=${context.props.influencerId}`) 

  const availableDates = await res.json()

  return {
    props: {
      availableDates
    }
  }
}

export default DatePicker
