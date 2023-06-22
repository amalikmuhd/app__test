import diamondHands from '../assets/images/diamondHands.svg';
import {AiOutlineArrowDown} from 'react-icons/ai';
import '../styles/TradeToday.css';

const TradeToday = ({setShowDropdown, showDropdown, selectedTicker}) => {
  return (
    <div className="trade-today-container">
      <img src={diamondHands} />
      <h2>Trade Bitcoin today</h2>
      <p>
        Create a Apptest account to buy and sell Bitcoin on the most secure
        crypto exchange.
      </p>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        {selectedTicker ? selectedTicker.toUpperCase() : 'Select Token'}
        <AiOutlineArrowDown />
      </button>
    </div>
  );
};

export default TradeToday;
