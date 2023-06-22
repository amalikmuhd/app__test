Certainly! Here's the documentation in README format:

# React Ticker Data Application

The React Ticker Data application is a simple user interface built using React.js that allows users to fetch and display ticker data from the Bitfinex API. Users can select a ticker, and the application will retrieve and display the corresponding trade and candle data for that ticker.

## Installation

To run the React Ticker Data application locally, follow these steps:

1. Ensure that you have Node.js installed on your machine.
2. Clone the GitHub repository for the React Ticker Data application:
   ```
   git clone https://github.com/mintlayer/react_test.git
   ```
3. Navigate to the project directory in your terminal.
4. Install the project dependencies:
   ```
   npm install
   ```
5. Start the application:
   ```
   npm start
   ```
6. The application will be accessible at `http://localhost:3000` in your web browser.

## Usage

1. Select a Ticker:

   - On the application's home page, you will find a dropdown menu labeled "Select a ticker."
   - Click on the dropdown to view the available ticker options.
   - Choose a ticker from the list by clicking on it.

2. View Ticker Data:

   - After selecting a ticker, the application will fetch the corresponding trade and candle data from the Bitfinex API.
   - The retrieved data will be displayed in a chart-like format within the application.
   - The chart bars represent the trade data, and their height represents the volume of the trades.
   - The chart bars will animate to simulate real-time movement.

3. Change Ticker:
   - To view data for a different ticker, simply repeat step 1 and choose a new ticker from the dropdown menu.

## Additional Notes

- The React Ticker Data application uses Axios, a popular HTTP client library, for making API requests to the Bitfinex API.
- The application implements basic styling using CSS to provide a visually appealing user interface.
- The chart bars' animation duration is dynamically set based on the volume of the trades, creating a real-time movement effect.
- The application relies on the Bitfinex API to fetch ticker data. Ensure a stable internet connection for proper functionality.

## Conclusion

The React Ticker Data application allows users to fetch and display ticker data from the Bitfinex API in a simple and intuitive user interface. By following the installation and usage instructions provided, users can explore different ticker data and visualize the trade and candle information in a chart-like representation.

If you encounter any issues or have any questions, please refer to the project's GitHub repository for further support and documentation.
