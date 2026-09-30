"use client";

import React, { useState } from "react";
import { authClient } from "../../lib/auth-client";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


   const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await authClient.signUp.email({
    name: name,
    email: email,
    password: password,
    callbackURL: "/dashboard" // Redirect after successful sign-up
    
  }, {
        onRequest: (ctx) => {
            console.log("Sign-up request initiated", ctx);
        },
        onSuccess: (ctx) => {
            console.log("Sign-up successful", ctx);
            //redirect to the dashboard or sign in page
        },
        onError: (ctx) => {
            console.log("Sign-up error", ctx);
            // display the error message
            alert(ctx.error.message);
        },
})
  console.log(data); 
};

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm rounded-lg border p-6">
        <h1 className="mb-6 text-2xl font-bold">Sign Up</h1>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border p-2"
          />

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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;