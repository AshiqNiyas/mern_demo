import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const token = useSelector((s) => s.auth.token);

  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formdata));
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="flex flex-col gap-3 rounded border border-gray-400 p-3 " onSubmit={handleSubmit}>
        <input
        className="outline-0 border rounded pl-1"
          onInput={handleInput}
          name="email"
          value={formdata.email}
          type="email"
          placeholder="email"
        />
        <input
        className="outline-0 border rounded pl-1"
          onInput={handleInput}
          name="password"
          value={formdata.password}
          type="password"
          placeholder="password"
        />
        <button className="bg-green-500 p-2 rounded text-xl font-semibold text-white">Login</button>
      </form>
    </div>
  );
};

export default Login;
