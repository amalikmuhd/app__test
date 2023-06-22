# App Test Application

The App Test application is a simple user interface built using React.js that allows users to fetch and display ticker data from the Bitfinex API. Users can select a ticker, and the application will retrieve and display the corresponding trade and candle data for that ticker.

## Installation

To run the App Test Data application locally, follow these steps:

1. Ensure that you have Node.js installed on your machine.
2. Clone the GitHub repository for the App Test application:
   ```
   git clone https://github.com/codeiwthmalik/app__test.git
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
  
   
## Testing
Testing is an essential aspect of software development to ensure the quality and reliability of an application. When testing the React Ticker Data application, you can consider the following approaches:

1. Unit Testing: Write unit tests for individual components and functions within the application. You can use testing frameworks like Jest and testing libraries like React Testing Library to perform unit tests. Test different scenarios, edge cases, and expected behaviors to validate the correctness of your code.

2. Integration Testing: Test the integration between different components and modules within the React Ticker Data application. Verify that the application functions as expected when the components interact with each other. This can be done using tools like Jest or Cypress.

3. API Testing: Test the interaction between the React Ticker Data application and the Bitfinex API. Ensure that the API requests are made correctly, and the application handles the responses appropriately. Tools like Jest, Axios Mock Adapter, or Postman can be used for API testing.

4. User Interface Testing: Perform tests to validate the user interface behavior and responsiveness. Check that the application renders correctly, the dropdown menu functions as expected, and the chart animation behaves as intended. Tools like React Testing Library, Cypress, or Selenium can be used for UI testing.

5. Performance Testing: Evaluate the application's performance by testing its responsiveness and resource usage under different loads and conditions. Measure the application's loading time, rendering speed, and real-time data updates. Tools like Lighthouse, WebPage
## Additional Notes

- The App Test application uses Axios, a popular HTTP client library, for making API requests to the Bitfinex API.
- The application implements basic styling using CSS to provide a visually appealing user interface.
- The chart bars' animation duration is dynamically set based on the volume of the trades, creating a real-time movement effect.
- The application relies on the Bitfinex API to fetch ticker data. Ensure a stable internet connection for proper functionality.
  
## Conclusion

The App Test application allows users to fetch and display ticker data from the Bitfinex API in a simple and intuitive user interface. By following the installation and usage instructions provided, users can explore different ticker data and visualize the trade and candle information in a chart-like representation.

If you encounter any issues or have any questions, please refer to the project's GitHub repository for further support and documentation.


# Demo 

https://github.com/codewithmalik/app__test/assets/4702828/08c73e4e-e803-46a8-8cf6-57da8c6bc858


