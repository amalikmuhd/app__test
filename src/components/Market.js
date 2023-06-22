import {useState} from 'react';

import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md';

import '../styles/Market.css';

const Market = ({loading, tickerTableData, selectedTicker}) => {
  const [showData, setShow] = useState(false);
  console.log('tickerTableData', tickerTableData);

  return (
    <main className="market-container">
      <section className="market-top-container ">
        <h1>Market</h1>
        {showData ? (
          <div className="market-top-container-icon">
            <MdKeyboardArrowDown size={24} onClick={() => setShow(!showData)} />
          </div>
        ) : (
          <div className="market-top-container-icon">
            <MdKeyboardArrowUp size={24} onClick={() => setShow(!showData)} />
          </div>
        )}
      </section>

      {showData && (
        <section className="market-content-container">
          <h2>{selectedTicker.toUpperCase()}</h2>
          {!loading &&
            tickerTableData.map((trade, index) => (
              <div
                key={index}
                className="content-container-item--wrapper-container"
              >
                <div className="wrapper-item-inner-container">
                  <span>Amount</span>
                  <span>{trade.amount}</span>
                </div>
                <div className="wrapper-item-inner-container">
                  <span>Exchange</span>
                  <span>{trade.exchange}</span>
                </div>
                <div className="wrapper-item-inner-container">
                  <span>Price</span>
                  <span>{trade.price}</span>
                </div>
                <div className="wrapper-item-inner-container">
                  <span>timestamp</span>
                  <span>{trade.timestamp}</span>
                </div>
                <div className="wrapper-item-inner-container">
                  <span>type</span>
                  <span>{trade.type}</span>
                </div>
              </div>
            ))}
        </section>
      )}
    </main>
  );
};

export default Market;
