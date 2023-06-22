import Loader from './Loader';

import '../styles/SelectDropdown.css';

const SelectDropdown = ({
  setShowDropdown,
  tickers,
  loading,
  handleTickerChange,
}) => {
  return (
    <div className="dropdown-container" onClick={() => setShowDropdown(false)}>
      <div className="dropdown-inner-container ">
        {loading ? (
          <Loader />
        ) : (
          tickers?.map((ticker, index) => (
            <div
              key={index}
              value={ticker}
              onClick={() => handleTickerChange(ticker)}
            >
              <p>{ticker.toUpperCase()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SelectDropdown;
