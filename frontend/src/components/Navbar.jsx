import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { Link } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const token = useSelector((s) => s.auth.token);
  return (
    <div className="flex justify-between p-3 bg-blue-400">
      <div>
        <div className="text-2xl text-white font-semibold">Demo App</div>
      </div>
      <div>
        {token ? (
        <>
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            logout
          </button>
        </>
      ) : (
        <div className="flex gap-4">
          
          <Link className="outline-1 outline-white rounded p-1 text-white" to={"/login"}>Login page</Link>{" "}
          <Link  className="outline-1 outline-white rounded p-1 text-white" to={"/register"}>Register</Link>{" "}
        </div>
      )}
      </div>
      
    </div>
  );
};

export default Navbar;
