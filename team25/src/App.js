import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Header from "./components/header/Header"
import Router from "./router/Router"

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Header />
      </Router>
    </BrowserRouter>
  )
}

export default App
