const TrailMountainCard = ({
  title,
  subTitle,
  category
}) => {
  return (
    <div className='trail-mountain-card'>
      <div className='title'>{title}</div>
      <div className='sub-title'>{subTitle}</div>
      <div className='category'>{category}</div>
    </div>

  )
}

export default TrailMountainCard
