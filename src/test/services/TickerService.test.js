import TickerService from '../../services/TickerService';
import API from '../../services/API';

describe('TickerService', () => {
  beforeEach(() => {
    jest.spyOn(API, 'get').mockImplementation((url) => {
      if (url === '/v1/symbols') {
        return Promise.resolve({data: ['symbol1', 'symbol2']});
      } else if (url === '/v2/candles/trade:1m:tsymbol1/hist') {
        return Promise.resolve({data: 'tradesData'});
      } else {
        return Promise.reject();
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
    const tradesData = await TickerService.getTradesData('SYMBOL1');
    expect(API.get).toHaveBeenCalledWith('/v2/candles/trade:1m:tSYMBOL1/hist'); //https://api.bitfinex.com/v2/candles/trade:1m:tBTCUSD/hist
    expect(Array.isArray(tradesData)).toBe(false);
  });

  it('should handle errors while fetching ticker symbols', async () => {
    API.get.mockRejectedValueOnce(new Error('API error'));

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    await expect(TickerService.getTicker()).resolves.toEqual(undefined);
    expect(consoleSpy).toHaveBeenCalledWith(new Error('API error'));
  });

  it('should handle errors while fetching trades data', async () => {
    API.get.mockRejectedValueOnce(new Error('API error'));

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    await expect(TickerService.getTradesData('symbol1')).resolves.toEqual(
      undefined,
    );
    expect(consoleSpy).toHaveBeenCalledWith(new Error('API error'));
  });
});
