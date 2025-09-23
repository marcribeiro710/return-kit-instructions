import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import InstructionsIndexPage from "./pages/InstructionsIndexPage";
import LaptopInstructionsPage from "./pages/instructions/LaptopInstructionsPage";
import MonitorInstructionsPage from "./pages/instructions/MonitorInstructionsPage";
import LargeItemsInstructionsPage from "./pages/instructions/LargeItemsInstructionsPage";
import DesktopInstructionsPage from "./pages/instructions/DesktopInstructionsPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/instructions" element={<InstructionsIndexPage />} />
        <Route path="/instructions/laptop" element={<LaptopInstructionsPage />} />
        <Route path="/instructions/monitor" element={<MonitorInstructionsPage />} />
        <Route path="/instructions/large-items" element={<LargeItemsInstructionsPage />} />
        <Route path="/instructions/desktop" element={<DesktopInstructionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
