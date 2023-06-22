const SelectDropdown = ({
  selectedTicker,
  handleTickerChange,
  tickers,
  loading,
}) => {
  return (
    <div className="ticker-selection">
      <label htmlFor="ticker" className="label">
        Select a ticker:
      </label>
      <select
        id="ticker"
        value={selectedTicker}
        onChange={handleTickerChange}
        className="select"
      >
        {loading && <option value="">loading data</option>}
        <option value="">-- Select Ticker --</option>
        {tickers?.map((ticker, index) => (
          <option key={index} value={ticker}>
            {ticker}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
