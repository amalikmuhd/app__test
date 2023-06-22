import React, {useState, useEffect, useCallback} from 'react';

import Layout from '../components/Layout';
import SelectDropdown from '../components/SelectDropdown';
import Market from '../components/Market';
import TradeToday from '../components/TradeToday';
import ChartData from '../components/ChartData';

import TickerService from '../services/TickerService';

import '../styles/Content.css';

const Ticker = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [tickers, setTickers] = useState([]);
  const [selectedTicker, setSelectedTicker] = useState('');
  const [tickerTableData, setTickerTableData] = useState([]);
  const [tickerGraphData, setTickerGraphData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Process data for the chart
  const processData = (data) => {
    return data.map((item) => {
      return {
        timestamp: item.timestamp,
        price: item.price,
      };
    });
  };

  // Fetch ticker data from the API
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
            const series = processData(data.data);
            setTickerGraphData(series);
            setTickerTableData(data.data);
          })
          .then(() => {
            setLoading(false);
          });
      });
    } catch (error) {
      console.log(error);
      alert('Error fetching data get Ticker in app.js');
    }
    setLoading(false);
  }, []);

  // Fetch available tickers from the API
  useEffect(() => {
    fetchTickers();
  }, [fetchTickers]);

  // Handle ticker change
  const handleTickerChange = (ticker) => {
    setLoading(true);
    setSelectedTicker(ticker);
    TickerService.getTradesData(ticker)
      .then((data) => {
        const series = processData(data.data);
        setTickerGraphData(series);
        setTickerTableData(data.data);
      })
      .then(() => {
        setLoading(false);
      });
  };

  return (
    <Layout>
      <div className="content-container">
        <div className="card-container">
          <ChartData tickerGraphData={tickerGraphData} />

          <TradeToday
            selectedTicker={selectedTicker}
            setShowDropdown={setShowDropdown}
            showDropdown={showDropdown}
          />
        </div>

        <Market
          loading={loading}
          selectedTicker={selectedTicker}
          tickerTableData={tickerTableData}
        />
      </div>

      {showDropdown && (
        <SelectDropdown
          setShowDropdown={setShowDropdown}
          tickers={tickers}
          loading={loading}
          handleTickerChange={handleTickerChange}
        />
      )}
    </Layout>
  );
};

export default Ticker;
