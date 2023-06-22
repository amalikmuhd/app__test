import Footer from './Footer';
import Navbar from './Navbar';
import '../styles/Layout.css';

const Layout = ({children}) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
