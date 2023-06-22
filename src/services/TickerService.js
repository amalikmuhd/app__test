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
      });
  },

  getTradesData: (ticker) => {
    return API.get(`v1/trades/${ticker}`)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default TickerService;
