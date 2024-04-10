import React, { useState } from "react";
import { Outlet } from "react-router-dom";
function AdminRoute(params) {
  const [ok, setOk] = useState(true);
  if (ok) {
    return <Outlet />;
  } else {
    return <div>u are not admin</div>;
  }
}
export default AdminRoute;
