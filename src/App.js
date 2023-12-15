import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import { Home, Category, Cart } from "./pages/index";
// components
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
