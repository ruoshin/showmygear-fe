import { useState } from 'react';
import './styles/root.sass';
import TrailMountainCard from 'components/molecules/TrailMountainCard';
import TrailIndex from 'components/pages/trailIndex';
import ProfileIndex from 'components/pages/profileIndex';
import LogoImg from 'images/logo.svg';

const ShowMyGear = () => {
  const [active, setActive] = useState(0);

  return (
    <div className='layout'>
    <div className='logo'>
      <a href='/'>
        <img src={LogoImg} alt='ShowMyGear' />
      </a>
    </div>
    {
      active == 1 ? <ProfileIndex /> : <TrailIndex onClick={setActive} />
    }

{/*      <TrailMountainCard
        title='Tongku Saveq'
        subTitle='布農語：最後的避難所'
        category='玉山群峰' />*/}
    </div>
  );
}

export default ShowMyGear;
