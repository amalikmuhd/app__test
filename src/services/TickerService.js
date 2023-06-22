import API from './API';

const TickerService = {
  getTicker: () => {
    return API.get('/v1/symbols')
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
        alert('Error fetching data get Ticker');
      });
  },

  getTradesData: (ticker) => {
    return API.get(`/v2/candles/trade:1m:t${ticker.toUpperCase()}/hist`)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
        alert('Error fetching data get Trades Data ');
      });
  },
};

export default TickerService;

// const tickerData = await fetchTickerData(data[0]);
