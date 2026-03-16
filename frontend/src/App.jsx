import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import AddOrder from "./pages/AddOrder"
import RoutesPage from "./pages/RoutesPage"

function App() {
  return (
    <BrowserRouter>

      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Dashboard</Link>
        <Link to="/add-order" style={{ marginRight: "15px" }}>Add Order</Link>
        <Link to="/routes">Routes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-order" element={<AddOrder />} />
        <Route path="/routes" element={<RoutesPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
