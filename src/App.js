import React, {useState} from 'react';

import Ticker from './screens/Ticker';
import SplashLoader from './components/SplashLoader';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a delay in loading the app
  setTimeout(() => {
    setLoading(false);
  }, 4000);

  return <div>{loading ? <SplashLoader /> : <Ticker />}</div>;
};

export default App;
