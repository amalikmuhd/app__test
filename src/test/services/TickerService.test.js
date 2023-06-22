import TickerService from '../../services/TickerService';

describe('TickerService', () => {
  beforeEach(() => {
    // Mocking API.get function from the './API' module
    jest.spyOn(API, 'get').mockImplementation((url) => {
      if (url === '/v1/symbols') {
        return Promise.resolve({data: ['symbol1', 'symbol2']});
      } else if (url === '/v2/candles/trade:1m:tsymbol1/hist') {
        return Promise.resolve({data: 'tradesData'});
      } else {
        return Promise.reject(new Error('Invalid URL'));
      }
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should fetch ticker symbols', async () => {
    const tickerSymbols = await TickerService.getTicker();
    expect(API.get).toHaveBeenCalledWith('/v1/symbols');
    expect(tickerSymbols).toEqual(['symbol1', 'symbol2']);
  });

  it('should fetch trades data for a given ticker symbol', async () => {
    const tradesData = await TickerService.getTradesData('symbol1');
    expect(API.get).toHaveBeenCalledWith('/v2/candles/trade:1m:tsymbol1/hist');
    expect(tradesData).toEqual('tradesData');
  });

  it('should handle errors while fetching ticker symbols', async () => {
    API.get.mockImplementationOnce(() =>
      Promise.reject(new Error('API error')),
    );

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation();

    await expect(TickerService.getTicker()).rejects.toThrowError('API error');
    expect(consoleSpy).toHaveBeenCalledWith(new Error('API error'));
    expect(alertSpy).toHaveBeenCalledWith('Error fetching data get Ticker');
  });

  it('should handle errors while fetching trades data', async () => {
    API.get.mockImplementationOnce(() =>
      Promise.reject(new Error('API error')),
    );

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation();

    await expect(TickerService.getTradesData('symbol1')).rejects.toThrowError(
      'API error',
    );
    expect(consoleSpy).toHaveBeenCalledWith(new Error('API error'));
    expect(alertSpy).toHaveBeenCalledWith(
      'Error fetching data get Trades Data ',
    );
  });
});
