import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ENV_CONFIG } from "../config/env_config";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Upload from "./Upload";
import { useAuth } from "../context/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const API_ENDPOINT = ENV_CONFIG.BASE_URL;

  const handleLogin = async () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = regexEmail.test(email);

    if (!isEmailValid) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 5) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    try {
      const res = await axios.post(`${API_ENDPOINT}/user/login`, {
        email,
        password,
      });
      if (res.data.success) {
        console.log(res.data.message);
        setAuth({
          ...auth,
          // user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("authentication", JSON.stringify(res.data));
        navigate("/dashboard/admin");
      } else {
        console.error(res.data.message);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  // React.useEffect(() => {
  //   const auth = localStorage.getItem("authentication");
  //   if (auth) {
  //     navigate("/");
  //   } else {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <form
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="text-center text-lg font-medium font-custom">
            Login in to Bajrang Bagri
          </p>

          <div>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="button"
            onClick={handleLogin}
            className="block w-full rounded-lg bg-slate-950 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
