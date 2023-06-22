import "../styles/loader.css";
const Loader = () => {
  return (
    <div className="loaderContainer">
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
