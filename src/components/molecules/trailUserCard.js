import Character from 'components/atoms/character'

const TrailUserCard = ({
  id,
  name,
  mountain = {},
  date,
  burden
}) => {
  return <div className='trail-user-card'>
    <div className='user-name'>{name}</div>
    <div className='trail-data'>
      <div className='trail-info'>
        <div className='m-name'>{mountain.name}</div>
        <div className='m-mname'>{mountain.mandarinName}</div>
        <div className='date'>{date}</div>
        <div className='burden'>負重 {burden} kg</div>
      </div>
      <div className='c-wrapper'>
        <Character />
      </div>
    </div>
  </div>
}

export default TrailUserCard
