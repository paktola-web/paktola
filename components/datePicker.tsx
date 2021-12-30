
type Date = {
  date: string
  availableDates: string[]
}


const DatePicker = ({availableDates}: Date) => {
  return (
    <ul>
    {availableDates.map(date => <li>{date}</li>)}
    </ul>
  )
}

export const getServerSideProps = async (context: any) => {
  const res = await fetch(`http://localhost:3000/api/getAvailableDates?id=${context.id}`) 

  const availableDates = await res.json()

  return {
    props: {
      availableDates
    }
  }
}

export default DatePicker
