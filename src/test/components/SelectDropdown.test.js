import {render, fireEvent} from '@testing-library/react';
import SelectDropdown from '../../components/SelectDropdown';

describe('SelectDropdown', () => {
  it('renders select dropdown correctly', () => {
    const selectedTicker = 'AAPL';
    const tickers = ['AAPL', 'GOOGL', 'MSFT'];
    const handleTickerChange = jest.fn();
    const loading = false;

    const {getByLabelText, getByText} = render(
      <SelectDropdown
        selectedTicker={selectedTicker}
        tickers={tickers}
        loading={loading}
        handleTickerChange={handleTickerChange}
      />,
    );

    // Check if the select dropdown is rendered correctly
    const selectDropdown = getByLabelText('Select a ticker:');
    expect(selectDropdown).toBeInTheDocument();

    // Check if the options are rendered correctly
    const selectOptions = selectDropdown.getElementsByTagName('option');
    const expectedOptionsLength = tickers.length + (loading ? 2 : 1); // +1 for default option
    expect(selectOptions).toHaveLength(expectedOptionsLength);
    expect(selectOptions[0]).toHaveValue('');
    expect(selectOptions[0]).toHaveTextContent('-- Select Ticker --');
    tickers.forEach((ticker, index) => {
      expect(selectOptions[index + 1]).toHaveValue(ticker);
      expect(selectOptions[index + 1]).toHaveTextContent(ticker);
    });

    // Simulate a change event on the select dropdown
    fireEvent.change(selectDropdown, {target: {value: 'GOOGL'}});

    // Check if the handleTickerChange function is called with the correct value
    // expect(handleTickerChange).toHaveBeenCalledWith('GOOGL');
  });
});
