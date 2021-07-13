import Character from 'components/atoms/character';
import GearItem from 'components/molecules/GearItem';
import ImgBackpack from 'images/gear-backpack.svg';
import ImgBrimHat from 'images/gear-brim-hat.svg';


const gearItems = {
  0: { img: ImgBackpack, text: 'Backpack'},
  1: { img: ImgBrimHat, text: 'Brim Hat'},
}

const getItems = () => {
  let items = [];
  const q = Math.floor(Math.random() * 10);
  for (let i = 0; i <= q; i++) {
    const g = Math.floor(Math.random() * 2);
      items.push(
        <div className='item'>
          <GearItem
            imgUrl={gearItems[g].img}
            name={gearItems[g].text} />
        </div>
      )
  }
  items[1] = <div className='item'>
    <Character id={100} />
  </div>
  return items
}

const ProfileIndex = () => {
  return <div className='profile-index'>
    <div className='profile-user-name'>鹿野忠雄</div>
    <div className='profile-gear-list'>
      {getItems()}
    </div>
  </div>
}

export default ProfileIndex;
