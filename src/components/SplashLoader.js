import Lottie from 'react-lottie';
import splashloader from '../assets/lotties/splash-loader';

import '../styles/SplashLoader.css';

export default function SplashLoader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: splashloader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="splash-loader-container">
      <Lottie options={defaultOptions} height={250} width={250} />
    </div>
  );
}
