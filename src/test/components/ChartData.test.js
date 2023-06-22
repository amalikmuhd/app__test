import {render} from '@testing-library/react';
import ChartData from '../../components/ChartData';

describe('ChartData', () => {
  it('renders chart data correctly', () => {
    const selectedTicker = 'ABC';
    const tickerData = [
      [1, 10, 8],
      [2, 12, 15],
      [3, 9, 7],
    ];

    const {getByText, getAllByTestId} = render(
      <ChartData selectedTicker={selectedTicker} tickerData={tickerData} />,
    );

    // Check if the selected ticker is displayed correctly
    expect(getByText('ABC Data:')).toBeInTheDocument();

    // Check if the chart items are rendered correctly
    const chartItems = getAllByTestId('chart-item');
    expect(chartItems).toHaveLength(tickerData.length);

    // Check the height and background color of each chart item
    tickerData.forEach((trade, index) => {
      const chartItem = chartItems[index];
      const height = Math.abs(trade[1] - trade[2]) + '%';
      const background = trade[1] - trade[2] > 0 ? 'red' : 'green';

      expect(chartItem).toHaveStyle(`height: ${height}`);
      expect(chartItem).toHaveStyle(`background: ${background}`);
    });
  });
});
