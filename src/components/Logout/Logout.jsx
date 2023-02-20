import React from "react";
import { Link, Navigate } from "react-router-dom";
import { HOME, LOGOUT, PRIVATE } from "../../config/routes/paths";
import { useAuthContext } from "../../Context/authContext";
import Swal from "sweetalert2";
import PrivateRoute from "../router/PrivateRoute";

const Logout = () => {
  const { isAuthenticated } = useAuthContext;
  const setcloset = () => {
    if (!isAuthenticated) {
      console.log("fsfdhAGS", isAuthenticated);
      return Swal.fire({
        title: "Log out?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, you logged out!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("users");
          location.reload();
          Swal.fire("Log out!", "Your file has been deleted.", "success");
        }
      });
    }
  };
  return (
    <div>
      <Link to={PRIVATE} className="button" onClick={setcloset}>
        LOGOUT
      </Link>
    </div>
  );
};

export default Logout;
