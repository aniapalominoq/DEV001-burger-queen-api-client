import Login from "./pages/Login/Login.jsx";
import "bulma/css/bulma.min.css";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import WaiterView from "./pages/waiterView/WaiterView.jsx";
import { LOGIN, LOGOUT, PRIVATE } from "./config/routes/paths.js";
import { AuthContextProvider } from "./Context/authContext.jsx";
import PublicRoute from "./components/router/PublicRoute.jsx";
import PrivateRoute from "./components/router/PrivateRoute.jsx";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path={LOGIN} element={<Login />} />
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route index element={<WaiterView />} />
            <Route path={LOGOUT} element={<Login />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
