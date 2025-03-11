import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Details from "./pages/Details"
import Sell from "./pages/Sell"
import { AuthProvider } from "./contexts/AuthContext"

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/sell" element={<Sell/>}/>
        </Routes>
      </AuthProvider>
    </>
  )
}
export default App