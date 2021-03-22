import characterImg from './images/character.png';
import './styles/root.sass';

const ShowMyGear = () => {
  return (
    <div>
      <img src={characterImg} alt="character" />
      <h1>曬裝備</h1>
    </div>
  );
}

export default ShowMyGear;
