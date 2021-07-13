import './styles/root.sass';
import TrailMountainCard from 'components/molecules/trailMountainCard';
import TrailIndex from 'components/pages/trailIndex';
import LogoImg from 'images/logo.svg';

const ShowMyGear = () => {
  return (
    <div className='layout'>
    <div className='logo'>
      <a href='/'>
        <img src={LogoImg} alt='ShowMyGear' />
      </a>
    </div>
      <TrailIndex />
{/*      <TrailMountainCard
        title='Tongku Saveq'
        subTitle='布農語：最後的避難所'
        category='玉山群峰' />*/}
    </div>
  );
}

export default ShowMyGear;
