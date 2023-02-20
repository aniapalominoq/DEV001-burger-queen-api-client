import React from "react";
import { Link } from "react-router-dom";
import { PRIVATE } from "../../config/routes/paths";
import { useAuthContext } from "../../Context/authContext";
import Swal from "sweetalert2";

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
        confirmButtonColor: "#61C002",
        cancelButtonColor: "rgba(253, 140, 0, 1)",
        confirmButtonText: "Yes, you logged out!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("users");
          location.reload();
          Swal.fire("Log out!", "Your section has been closed", "success");
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
