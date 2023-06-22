import {render} from '@testing-library/react';
import TradeData from '../../components/TradeData';

describe('TradeData', () => {
  it('renders trade data correctly', () => {
    const selectedTicker = 'AAPL';
    const tickerData = [
      [12345, '2023-06-22', 100.25, 500],
      [12346, '2023-06-23', 101.5, 700],
      [12347, '2023-06-24', 99.8, 600],
    ];

    const {getByText} = render(
      <TradeData selectedTicker={selectedTicker} tickerData={tickerData} />,
    );

    // Check if the selected ticker is rendered correctly
    const tickerHeading = getByText(`${selectedTicker} Data:`);
    expect(tickerHeading).toBeInTheDocument();

    // Check if the trade data items are rendered correctly
    const tradeItems = tickerData.map((trade, index) =>
      getByText(`Trade #${index + 1}: Price: ${trade[2]}, Volume: ${trade[3]}`),
    );
    tradeItems.forEach((tradeItem, index) => {
      expect(tradeItem).toBeInTheDocument();
      expect(tradeItem).toHaveTextContent(
        `Trade #${index + 1}: Price: ${tickerData[index][2]}, Volume: ${
          tickerData[index][3]
        }`,
      );
    });
  });
});
