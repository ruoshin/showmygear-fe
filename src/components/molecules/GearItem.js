const GearItem = ({
  imgUrl,
  name,
  onClick
}) => {
  return <div className='gear-item' onClick={onClick}>
    <img src={imgUrl} alt={`gear-${name}`} />
    <div className='name'>{name}</div>
  </div>
}

export default GearItem;
