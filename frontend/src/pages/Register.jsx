import { useState } from "react";
import { registerUser } from "../features/authSlice";
import { useDispatch } from "react-redux";
const Register = () => {
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formdata));
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="flex flex-col gap-3 rounded border border-gray-400 p-3"   onSubmit={handleSubmit}>
        <input
        className="outline-0 border rounded pl-1"
          onInput={handleInput}
          name="username"
          value={formdata.username}
          type="text"
          placeholder="username"
        />
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
        <button className="bg-blue-500 p-2 rounded text-xl font-semibold text-white">Register</button>
      </form>
    </div>
  );
};

export default Register;
