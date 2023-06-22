import React, {useState, useEffect, useCallback} from 'react';

import TickerService from '../services/TickerService';

import SelectDropdown from '../components/SelectDropdown';
import TradeData from '../components/TradeData';
import ChartData from '../components/ChartData';

import '../styles/ticker.css';
import Loader from '../components/Loader';

const Ticker = () => {
  const [tickers, setTickers] = useState([]);
  const [selectedTicker, setSelectedTicker] = useState('');
  const [tickerData, setTickerData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTickers = useCallback(() => {
    setLoading(true);
    try {
      const tickers = TickerService.getTicker();
      tickers.then((data) => {
        setTickers(data);
        if (data?.length === 0) return;

        setSelectedTicker(data[0]);
        TickerService.getTradesData(data[0])
          .then((data) => {
            setTickerData(data.data);
          })
          .then(() => {
            setLoading(false);
          });
      });
    } catch (error) {
      console.log(error);
      alert('Error fetching data get Ticker in app.js');
    }
  }, []);

  // Fetch available tickers from the API
  useEffect(() => {
    fetchTickers();
  }, [fetchTickers]);

  const handleTickerChange = (event) => {
    setLoading(true);
    setSelectedTicker(event.target.value);
    TickerService.getTradesData(event.target.value)
      .then((data) => {
        setTickerData(data.data);
      })
      .then(() => {
        setLoading(false);
      });
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title">Bitfinex Ticker Data</h1>

        <SelectDropdown
          selectedTicker={selectedTicker}
          handleTickerChange={handleTickerChange}
          tickers={tickers}
          loading={loading}
        />

        {loading || (
          <div style={{display: 'flex'}}>
            <TradeData
              selectedTicker={selectedTicker}
              tickerData={tickerData}
            />
            <br />
            <ChartData
              selectedTicker={selectedTicker}
              tickerData={tickerData}
            />
          </div>
        )}
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default Ticker;
