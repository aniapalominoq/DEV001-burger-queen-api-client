import Login from "./pages/Login/Login.jsx";
import "bulma/css/bulma.min.css";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import WaiterView from "./pages/waiterView/WaiterView.jsx";
import { LOGIN, LOGOUT, ORDERS, PRIVATE } from "./config/routes/paths.js";
import { AuthContextProvider } from "./Context/authContext.jsx";
import PublicRoute from "./components/router/PublicRoute.jsx";
import PrivateRoute from "./components/router/PrivateRoute.jsx";
<<<<<<< HEAD
import Orders from "./pages/Orders/Orders.jsx";
=======
import Board from "./components/board/board.jsx";
import Slider from "./components/Slider.jsx";
>>>>>>> f6d715e09db834d3a7d1a792223524d8d68d413f

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
<<<<<<< HEAD
            <Route index element={<Orders/>} />
=======
            <Route index element={<Slider />} />
>>>>>>> f6d715e09db834d3a7d1a792223524d8d68d413f
            <Route path={LOGIN} element={<Login />} />
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route index element={<WaiterView />} />
            <Route path={ORDERS} element={<Orders/>}/>
            <Route path={LOGOUT} element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
