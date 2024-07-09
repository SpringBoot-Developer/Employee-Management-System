import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import EmployeeComponent from "./components/EmployeeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          {/* http://localhost:3000 */}
          <Route path="/" element={<ListEmployeeComponent />} />
          {/* http://localhost:3000/employee */}
          <Route path="/employees" element={<ListEmployeeComponent />} />
          {/* http://localhost:3000/add-employee */}
          <Route path="/add-employee" element={<EmployeeComponent />} />
          {/* http://localhost:3000/update-employee/:id */}
          <Route path="/update-employee/:id" element={<EmployeeComponent />} />
          {/* http://localhost:3000/delete-employee/:id */}
          <Route path="/delete-employee/:id" element={<EmployeeComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
