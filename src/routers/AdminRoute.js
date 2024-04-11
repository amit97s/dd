import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../context/auth";
import { ENV_CONFIG } from "../config/env_config";

function AdminRoute() {
  const [ok, setOk] = React.useState(false);
  const [auth] = useAuth();
  const navigate = useNavigate();
  const API_ENDPOINT = ENV_CONFIG.BASE_URL;

  React.useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(`${API_ENDPOINT}/user/admin-auth`, {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        });

        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        // Handle error here, for example:
        console.error("Error during admin authentication:", error);
        setOk(false);
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [API_ENDPOINT, auth?.token]);

  return ok ? (
    <>
      <Outlet />
    </>
  ) : (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <h1>You are not an admin, please go back.</h1>
      <button
        onClick={() => navigate("/")}
        className="mt-10 px-12 bg-black hover:bg-slate-900 duration-150 text-white font-semibold py-3"
      >
        Go back
      </button>
    </div>
  );
}

export default AdminRoute;
