## Code Documentation: `TradeData` Component

The `TradeData` component is a React functional component that displays trade data for a selected ticker. It takes two props: `selectedTicker` and `tickerData`. Here's the documentation for this code:

### Props

- `selectedTicker` (string): The selected ticker symbol or name to be displayed in the heading.
- `tickerData` (array of arrays): An array of trade data points for the selected ticker. Each trade data point is represented by an array with at least three elements:
  - `trade[0]` (string or number): The trade identifier or timestamp (not used in the displayed data).
  - `trade[1]` (string or number): The trade type or label (not used in the displayed data).
  - `trade[2]` (number): The trade price.
  - `trade[3]` (number): The trade volume.

### Return Value

The `TradeData` component returns a JSX element representing the trade data.

### JSX Structure

The JSX structure of the `TradeData` component is as follows:

```jsx
<div className="ticker-data">
  <h2 className="ticker-heading">{selectedTicker} Data:</h2>
  <ul className="trade-list">
    {tickerData.map((trade, index) => (
      <li key={index} className="trade-item">
        Trade #{index + 1}: Price: {trade[2]}, Volume: {trade[3]}
      </li>
    ))}
  </ul>
</div>
```

#### JSX Explanation

- The `div` element with the class name `"ticker-data"` serves as the container for the trade data component.
- The `h2` element with the class name `"ticker-heading"` displays the selected ticker name or symbol followed by the text " Data:". It represents the heading of the trade data section.
- The `ul` element with the class name `"trade-list"` is the container for the trade items.
- Inside the trade list container, there is a mapping function used to iterate over each `trade` item in the `tickerData` array.
- For each `trade` item, an `li` element is rendered with the class name `"trade-item"`.
- The `key` prop is set to the index of the `trade` item in the `tickerData` array to provide a unique identifier for React.
- The `li` element displays the trade information, including the trade index number, price, and volume. The trade index is calculated as `index + 1` to display a more user-friendly value.
- The trade price is accessed from `trade[2]`, and the trade volume is accessed from `trade[3]`.

Please note that this documentation assumes familiarity with React and JSX syntax.
