import '../styles/Loader.css';
const Loader = () => {
  return (
    <div className="loaderContainer" data-testid="loader">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
