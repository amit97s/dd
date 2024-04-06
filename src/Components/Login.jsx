import React from "react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
//   console.log(email)
//   console.log(password)
const handelLogin= ()=>{
    // console.log(email.valueOf())
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTest = regexEmail.test(email)
    if(!regexTest){
        setError(true)
    }
    else{setError(false)}
    
}

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <form
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="text-center text-lg font-medium ">
            Sign in to your account
          </p>

          <div>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit" onClick={handelLogin}
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
