"use client";

import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
const { data, error } = await authClient.signIn.email({
    email: email,
    password: password,
    rememberMe: true,
    callbackURL: "/dashboard"
})
console.log(data);  
};


  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm rounded-lg border p-6">
        <h1 className="mb-6 text-2xl font-bold">Sign In</h1>

        <form className="space-y-4" onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border p-2"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border p-2"
          />

          <button
            type="submit"
            className="w-full rounded bg-black p-2 text-white"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;