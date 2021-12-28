import React, { MouseEventHandler, useState } from "react";

import { useRouter } from "next/router";

import { supabase } from "../src/utils/SupabaseClient";

const SignIn = () => {
  const router = useRouter();

  const handleSignInWithGoogle: MouseEventHandler = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signIn(
      {
        provider: "google",
      },
      {
        redirectTo: "http://localhost:3000/callback/",
      }
    );

    if (error) {
      alert(JSON.stringify(error));
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-center text-white">
          Enter Paktola
        </h1>

        <div className="flex flex-col p-6">
          <button
            className="text-lg text-white font-semibold bg-blue-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2"
            onClick={handleSignInWithGoogle}
          >
            Sign In with Google
          </button>

          <hr className="bg-gray-600 border-0 h-px my-8" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
