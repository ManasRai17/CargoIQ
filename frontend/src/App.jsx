import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Dashboard() {
  return <h2>Dashboard Page</h2>
}

function AddOrder() {
  return <h2>Add Order Page</h2>
}

function RoutesPage() {
  return <h2>Routes Page</h2>
}

function App() {
  return (
    <BrowserRouter>

      {/* Navigation */}
      <nav style={{padding:"10px", background:"#eee"}}>
        <Link to="/" style={{marginRight:"15px"}}>Dashboard</Link>
        <Link to="/add-order" style={{marginRight:"15px"}}>Add Order</Link>
        <Link to="/routes">Routes</Link>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-order" element={<AddOrder />} />
        <Route path="/routes" element={<RoutesPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
