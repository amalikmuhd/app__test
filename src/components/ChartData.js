const ChartData = ({selectedTicker, tickerData}) => {
  return (
    <div className="ticker-data">
      <h2 className="ticker-heading">{selectedTicker} Data:</h2>
      <div className="chart">
        {tickerData.map((trade, index) => (
          <div
            key={index}
            className={`chart-item`}
            style={{
              height: `${Math.abs(trade[1] - trade[2])}%`,
              background: trade[1] - trade[2] > 0 ? 'red' : 'green',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ChartData;
