
import "./App.css";
import companyLogo from "./assets/company-logo.png";

function App() {
  return (
    <div className="welcome-root">
      <img src={companyLogo} className="company-logo" alt="Company Logo" />
      <h1 className="welcome-title">Welcome to the Return Kit Packing Instructions</h1>
      <p className="welcome-msg">Please select what you are returning to get tailored packing instructions.</p>
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
