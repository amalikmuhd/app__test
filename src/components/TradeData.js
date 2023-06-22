const TradeData = ({ selectedTicker, tickerData }) => {
  return (
    <div className="ticker-data">
      <h2 className="ticker-heading">{selectedTicker} Data:</h2>
      <ul className="trade-list">
        {tickerData.map((trade, index) => (
          <li key={index} className="trade-item">
            Trade #{index + 1}: Price: {trade[2]}, Volume: {trade[3]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TradeData;
