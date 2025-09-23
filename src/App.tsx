
import "./App.css";

function App() {
  return (
    <div className="welcome-root">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkL9UFA4MD2fguemOZclswSCBO73820j_JpA&s"
        className="company-logo"
        alt="Company Logo"
      />
      <h1 className="welcome-title">Welcome to Return Instructions.</h1>
      <p className="welcome-msg">
        Effortlessly pack and return your IT equipment.<br />
        Select the type of item you want instructions for below.
      </p>
      <div className="return-options">
        <button className="return-option">Laptop Return</button>
        <button className="return-option">Single Monitor (with/without Laptop)</button>
        <button className="return-option">Large Items or Quantities</button>
        <button className="return-option">Desktops</button>
      </div>
    </div>
  );
}

export default App;
